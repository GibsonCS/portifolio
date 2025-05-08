import nodemailer from 'nodemailer'

export const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 587,
  secure: false,
  auth: {
    user: 'gibson.cruzds@gmail.com',
    pass: process.env.EMAIL_PASS,
  },
})

export const sendMail = async (email: string) => {
  await transporter.sendMail({
    from: '"Gibson Cruz" <gibson.cruzds@gmail.com>',
    subject: 'Contato Gibson Cruz',
    to: `${email}, gibson.cruzds@gmail.com`,
    html: `<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <title>Resposta de Contato</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      color: #333;
      line-height: 1.6;
    }
    .container {
      max-width: 600px;
      margin: 0 auto;
      padding: 20px;
    }
    .footer {
      margin-top: 30px;
      font-size: 0.9em;
      color: #888;
    }
  </style>
</head>
<body>
  <div class="container">
    <p>Olá,</p>

    <p>Obrigado pelo seu contato!</p>

    <p>Recebi sua mensagem e assim que possível retornarei com uma resposta.</p>

    <p>Atenciosamente,<br>
    Gibson Cruz</p>

    <div class="footer">
      Este é um e-mail automático de confirmação de recebimento.
    </div>
  </div>
</body>
</html>
`,
  })
}
