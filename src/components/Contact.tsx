'use client'

import { Button } from '@headlessui/react'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import { Mail } from 'lucide-react'

export type FormData = {
  email: string
}

export default function Contact() {
  const { handleSubmit, register } = useForm<FormData>()
  const route = useRouter()

  const handleEmail = async (formData: FormData) => {
    const response = await fetch('/api/sendmail', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(formData.email),
    })
    await response.json()
    route.push('/thank-you')
  }

  return (
    <form
      onSubmit={handleSubmit(handleEmail)}
      className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40"
    >
      <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
        <Mail />
        <span className="ml-3">Contato</span>
      </h2>
      <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
        Informe o seu e-mail para que eu possa entrar em contato
      </p>
      <div className="mt-6 flex">
        <input
          {...register('email', { required: 'O campo e-mail é obrigatório' })}
          type="email"
          placeholder="Email address"
          aria-label="Email address"
          className="min-w-0 flex-auto appearance-none rounded-md border border-zinc-900/10 bg-white px-3 py-[calc(--spacing(2)-1px)] shadow-md shadow-zinc-800/5 placeholder:text-zinc-400 focus:border-teal-500 focus:ring-4 focus:ring-teal-500/10 focus:outline-hidden sm:text-sm dark:border-zinc-700 dark:bg-zinc-700/[0.15] dark:text-zinc-200 dark:placeholder:text-zinc-500 dark:focus:border-teal-400 dark:focus:ring-teal-400/10"
        />
        <Button type="submit" className="ml-4 flex-none">
          Enviar
        </Button>
      </div>
    </form>
  )
}
