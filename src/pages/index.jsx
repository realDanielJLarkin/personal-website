import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import { Button } from '@/components/Button'
import { Card } from '@/components/Card'
import { Container } from '@/components/Container'
import { GitHubIcon, InstagramIcon, LinkedInIcon, } from '@/components/SocialIcons'
import logoAirbnb from '@/images/logos/airbnb.svg'
import logoFacebook from '@/images/logos/facebook.svg'
import logoPlanetaria from '@/images/logos/planetaria.svg'
import logoStarbucks from '@/images/logos/starbucks.svg'
import image1 from '@/images/photos/image-1.jpg'
import image2 from '@/images/photos/image-2.jpg'
import image3 from '@/images/photos/image-3.jpg'
import image4 from '@/images/photos/image-4.jpg'
import image5 from '@/images/photos/image-5.jpg'
import Newsletter from '@/components/Newsletter'
import dayjs from 'dayjs'
import ReactHTMLParser from 'react-html-parser'
import { useEffect, useState } from 'react'

function BriefcaseIcon(props) {
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

function ArrowDownIcon(props) {
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

function Article({ post }) {

  const [innerHTML, setInnerHTML] = useState()
  useEffect(() => {
    setInnerHTML(post.excerpt)
  }, [])

  return (
    <Card as="article">
      <Card.Title href={`/blog/${post.slug}`}>
        {post.title}
      </Card.Title>
      <Card.Eyebrow as="time" dateTime='tbd' decorate>
        {dayjs(post.date).format('MMM DD YYYY')}
      </Card.Eyebrow>
      <Card.Description>{ReactHTMLParser(innerHTML)}</Card.Description>
      <Card.Cta><Link href={`/blog/${post.slug}`}>Read article</Link></Card.Cta>
    </Card>
  )
}

function SocialLink({ icon: Icon, ...props }) {
  return (
    <Link target='_blank' className="group -m-1 p-1" {...props}>
      <Icon className="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300" />
    </Link>
  )
}



function Resume() {
  let resume = [
    {
      company: 'Planetaria',
      title: 'CEO',
      logo: logoPlanetaria,
      start: '2019',
      end: {
        label: 'Present',
        dateTime: new Date().getFullYear(),
      },
    },
    {
      company: 'Airbnb',
      title: 'Product Designer',
      logo: logoAirbnb,
      start: '2014',
      end: '2019',
    },
    {
      company: 'Facebook',
      title: 'iOS Software Engineer',
      logo: logoFacebook,
      start: '2011',
      end: '2014',
    },
    {
      company: 'Starbucks',
      title: 'Shift Supervisor',
      logo: logoStarbucks,
      start: '2008',
      end: '2011',
    },
  ]

  return (
    <div className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
      <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
        <BriefcaseIcon className="h-6 w-6 flex-none" />
        <span className="ml-3">Work</span>
      </h2>
      <ol className="mt-6 space-y-4">
        {resume.map((role, roleIndex) => (
          <li key={roleIndex} className="flex gap-4">
            <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
              <Image src={role.logo} alt="" className="h-7 w-7" unoptimized />
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
                aria-label={`${role.start.label ?? role.start} until ${role.end.label ?? role.end
                  }`}
              >
                <time dateTime={role.start.dateTime ?? role.start}>
                  {role.start.label ?? role.start}
                </time>{' '}
                <span aria-hidden="true">—</span>{' '}
                <time dateTime={role.end.dateTime ?? role.end}>
                  {role.end.label ?? role.end}
                </time>
              </dd>
            </dl>
          </li>
        ))}
      </ol>
      <Button href="#" variant="secondary" className="group mt-6 w-full">
        Download CV
        <ArrowDownIcon className="h-4 w-4 stroke-zinc-400 transition group-active:stroke-zinc-600 dark:group-hover:stroke-zinc-50 dark:group-active:stroke-zinc-50" />
      </Button>
    </div>
  )
}

function Photos() {
  let rotations = ['rotate-2', '-rotate-2', 'rotate-2', 'rotate-2', '-rotate-2']

  return (
    <div className="mt-16 sm:mt-20">
      <div className="-my-4 flex xl:justify-center gap-5 py-4 sm:gap-8 xl:overflow-hidden overflow-x-scroll">
        {[image1, image2, image3, image4, image5].map((image, imageIndex) => (
          <div key={image.src} className={clsx('relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:w-72 sm:rounded-2xl',)} >
            <Image src={image} alt="" width={500} height={500} quality={100} className={`absolute inset-0 h-full w-full object-cover `} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default function Home({ posts }) {

  return (
    <>
      <Head>
        <title>
          Daniel Larkin - Software developer, founder, and world traveler
        </title>
        <meta
          name="description"
          content="I’m Daniel, a software developer and founder based in Iowa. I’m the founder and CEO of Collaboratr, where we help musicians, producers, and engineers connect."
        />
      </Head>
      <Container className="mt-9">
        <div className="max-w-2xl">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
            Software developer, founder, and world traveler.
          </h1>
          <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
            I’m Daniel, a software developer and founder based in Iowa. I’m the founder and CEO of Collaboratr, where we help musicians, producers, and engineers connect.
          </p>
          <div className="mt-6 flex gap-6">
            <SocialLink
              href="https://instagram.com/realdanieljlarkin/"
              aria-label="Follow on Instagram"
              icon={InstagramIcon}
            />
            <SocialLink
              href="https://github.com/realDanielJLarkin"
              aria-label="Follow on GitHub"
              icon={GitHubIcon}
            />
            <SocialLink
              href="https://www.linkedin.com/in/daniel-larkin-a4a517114/"
              aria-label="Follow on LinkedIn"
              icon={LinkedInIcon}
            />
          </div>
        </div>
      </Container>
      <Photos />
      <div className='flex items-center justify-center mt-6'>
        <p className='text-lg font-bold dark:text-zinc-400'>Like what you see? <a href='https://instagram.com/realdanieljlarkin/' target='_blank' className='text-purple-600 dark:text-teal-500 cursor-pointer hover:underline'>Follow me on Instagram</a> </p>
      </div>
      <Container className="mt-24 md:mt-28">
        <div className="mx-auto max-w-2xl lg:mx-0 mb-6">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-zinc-200">Recent Posts</h2>
          <p className="mt-2 text-sm leading-8 text-gray-600 dark:text-zinc-400">
            Stay up to date with the blog. I write about tech, travel, and lifestyle design.
          </p>
        </div>
        <div className="mx-auto grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none lg:grid-cols-2">

          <div className="flex flex-col gap-16">
            {posts.nodes.slice(0, 3).map((post) => (
              <Article key={post.slug} post={post} />
            ))}
          </div>
          <div className="space-y-10 lg:pl-16 xl:pl-24">
            <Newsletter />
            {/* <Resume /> */}
          </div>
        </div>
      </Container>
    </>
  )
}

export async function getStaticProps() {
  const res = await fetch(process.env.WP_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      query: `
      query HomePageQuery {
        posts {
          nodes {
            slug
            content
            title
            date
            excerpt
          }
        }
      }
      `
    })
  })
  const json = await res.json()
  return {
    props: {
      posts: json.data.posts
    }
  }
}
