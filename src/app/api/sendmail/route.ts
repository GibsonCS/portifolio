import { sendMail } from '@/lib/sendMail'
import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  'use server'
  const email = await request.json()
  await sendMail(email)
  return NextResponse.json({ success: true })
}
