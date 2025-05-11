'use client'

import Image, { type ImageProps } from 'next/image'
import Link from 'next/link'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { GitHubIcon, LinkedInIcon } from '@/components/SocialIcons'

import logoPlanetaria from '@/images/logos/map-pinned.svg'
import image1 from '@/images/photos/image-1.png'
import image2 from '@/images/photos/image-2.png'
import image3 from '@/images/photos/image-3.png'
import image4 from '@/images/photos/image-4.png'
import image5 from '@/images/photos/image-5.png'
import Contact from '@/components/Contact'
import { useEffect, useState } from 'react'

const images = [
  {
    image: image1,
    alt: 'nodejs',
  },
  {
    image: image2,
    alt: 'fastify',
  },
  {
    image: image3,
    alt: 'javascript',
  },
  {
    image: image4,
    alt: 'typescript',
  },
  {
    image: image5,
    alt: 'react',
  },
]

function BriefcaseIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M2.75 9.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z"
        className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
      />
      <path
        d="M3 14.25h6.249c.484 0 .952-.002 1.316.319l.777.682a.996.996 0 0 0 1.316 0l.777-.682c.364-.32.832-.319 1.316-.319H21M8.75 6.5V4.75a2 2 0 0 1 2-2h2.5a2 2 0 0 1 2 2V6.5"
        className="stroke-zinc-400 dark:stroke-zinc-500"
      />
    </svg>
  )
}

function ArrowDownIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" {...props}>
      <path
        d="M4.75 8.75 8 12.25m0 0 3.25-3.5M8 12.25v-8.5"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function SocialLink({
  icon: Icon,
  ...props
}: React.ComponentPropsWithoutRef<typeof Link> & {
  icon: React.ComponentType<{ className?: string }>
}) {
  return (
    <Link className="group -m-1 p-1" {...props}>
      <Icon className="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300" />
    </Link>
  )
}

interface Role {
  company: string
  title: string
  logo: ImageProps['src']
  start: string | { label: string; dateTime: string }
  end: string | { label: string; dateTime: string }
}

function Role({ role }: { role: Role }) {
  let startLabel =
    typeof role.start === 'string' ? role.start : role.start.label
  let startDate =
    typeof role.start === 'string' ? role.start : role.start.dateTime

  let endLabel = typeof role.end === 'string' ? role.end : role.end.label
  let endDate = typeof role.end === 'string' ? role.end : role.end.dateTime

  return (
    <li className="flex gap-4">
      <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full bg-amber-100 shadow-md ring-1 shadow-zinc-800/5 dark:ring-0">
        <Image
          src={role.logo}
          alt=""
          className="h-7 w-7 rounded-md bg-amber-100"
          unoptimized
        />
      </div>
      <dl className="flex flex-auto flex-wrap gap-x-2">
        <dt className="sr-only">Company</dt>
        <dd className="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100">
          {role.company}
        </dd>
        <dt className="sr-only">Role</dt>
        <dd className="text-xs text-zinc-500 dark:text-zinc-400">
          {role.title}
        </dd>
        <dt className="sr-only">Date</dt>
        <dd
          className="ml-auto text-xs text-zinc-400 dark:text-zinc-500"
          aria-label={`${startLabel} until ${endLabel}`}
        >
          <time dateTime={startDate}>{startLabel}</time>{' '}
          <span aria-hidden="true">—</span>{' '}
          <time dateTime={endDate}>{endLabel}</time>
        </dd>
      </dl>
    </li>
  )
}

function Resume() {
  let resume: Array<Role> = [
    {
      company: 'Fesudeperj',
      title: 'Full-stack Developer',
      logo: logoPlanetaria,
      start: '2023',
      end: {
        label: 'Present',
        dateTime: new Date().getFullYear().toString(),
      },
    },
    {
      company: 'Fesudeperj',
      title: 'Tecnólogo em Gestão da TI',
      logo: logoPlanetaria,
      start: '2021',
      end: {
        label: '2023',
        dateTime: new Date().getFullYear().toString(),
      },
    },
    {
      company: 'Triunfo',
      title: 'IT Assist',
      logo: logoPlanetaria,
      start: '2018',
      end: {
        label: '2020',
        dateTime: new Date().getFullYear().toString(),
      },
    },
    {
      company: 'Nova Era',
      title: 'IT Aux',
      logo: logoPlanetaria,
      start: '2015',
      end: {
        label: '2018',
        dateTime: new Date().getFullYear().toString(),
      },
    },
  ]

  return (
    <div className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
      <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
        <BriefcaseIcon className="h-6 w-6 flex-none" />
        <span className="ml-3">Tragetória</span>
      </h2>
      <ol className="space-y-4s mt-6">
        {resume.map((role, roleIndex) => (
          <Role key={roleIndex} role={role} />
        ))}
      </ol>
      <Button
        href="./docs/Gibson_Cruz_Desenvolvedor_Fullstack.pdf"
        target="_blank"
        variant="secondary"
        className="group mt-6 w-full animate-bounce"
      >
        Download CV
        <ArrowDownIcon className="h-4 w-4 stroke-zinc-400 transition group-active:stroke-zinc-600 dark:group-hover:stroke-zinc-50 dark:group-active:stroke-zinc-50" />
      </Button>
    </div>
  )
}

function Photos() {
   
  const [visible, setVisible] = useState(false)
  const [animate, setAnimate] = useState(true)
  
  useEffect(() => {
    const timeVisible = setTimeout(() => {
        setVisible(true)
  
    },500)
    
   const timeAnimaiton =  setTimeout(() => {
      setAnimate(false)
    }, 3000)

    return () => {
      clearTimeout(timeVisible)
      clearTimeout(timeAnimaiton)
    }

  },[]) 

  let rotations = ['rotate-2', '-rotate-2', 'rotate-2', 'rotate-2', '-rotate-2']

  return (
    <div  className={` transition-opacity duration-1000 ${
          visible ? 'opacity-75' : 'opacity-0'} p-8 animate-bounce 
          ${animate ? 'animate-bounce' : 'animate-none duration-700 transition '}`} >

      <div className="-my-4 flex justify-center gap-5 overflow-hidden py-4 sm:gap-8">
        {images.map((image, imageIndex) => (
          <div
            key={imageIndex}
            className={`aspect-9/10 w-24 flex-none overflow-hidden rounded-xl bg-zinc-100 sm:w-42 sm:rounded-2xl dark:bg-zinc-800 ${rotations[imageIndex % rotations.length]}`}
          >
            <Image
              src={image.image}
              alt={image.alt}
              className=" inset-0 h-full w-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default function Home() {
   const [visible, setVisible] = useState(false)
  useEffect(() => {
    setTimeout(() => {
        setVisible(true)
  
    },4000)

  },[])
  return (
    <>
      <Container className="mt-9">
        <div className="max-w-2xl">
          <div className="flexs flex-col">
            <span className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
              Wellcome to my world 👋🏼
            </span>
            <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
              Me chamo Gibson, sou desenvolvedor de software localizado no Rio
              de Janeiro. Sou fundador e CEO da CodeLift, onde nas horas vagas,
              ajudo pessoas e empresas buscarem seu espaço no digital.
            </p>
          </div>
          <div className="mt-6 flex gap-6">
            <SocialLink
              href="https://github.com/gibsoncs"
              target="_blanck"
              aria-label="Follow on GitHub"
              icon={GitHubIcon}
            />
            <SocialLink
              href="https://linkedin.com/in/gibson-cs"
              target="_blank"
              aria-label="Follow on LinkedIn"
              icon={LinkedInIcon}
            />
          </div>
        </div>
      </Container>
      <Photos />
      <Container className="mt-24 md:mt-28">
        <div className="mx-auto grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none lg:grid-cols-2">
          <div className="flex flex-col gap-16">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi
            earum quidem quos, iusto reprehenderit repellat, ipsa explicabo,
            cumque corrupti maiores quaerat nobis fugit voluptates! Ratione
            deserunt tempora consequatur iure doloribus!
          </div>
          <div className="space-y-10 lg:pl-16 xl:pl-24">
            <Resume />
            <Contact />
          </div>
        </div>
      </Container>
    </>
  )
}
