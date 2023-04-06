import Head from 'next/head'
import { useRouter } from 'next/router'

import { Container } from '@/components/Container'
import { Prose } from '@/components/Prose'
import Image from 'next/image'
import dayjs from 'dayjs'
import parse from 'html-react-parser'


export function ArticleLayout({ post }) {
  let router = useRouter()

  return (
    <>
      <Head>
        <title>{`${post.title} - Spencer Sharp`}</title>
        <meta name="description" content={post.excerpt} />
      </Head>
      <Container className="mt-16 lg:mt-32">
        <div className="xl:relative">
          <div className="mx-auto max-w-2xl">
            {/* {previousPathname && (
              <button type="button" onClick={() => router.back()} aria-label="Go back to articles" className="group mb-8 flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 transition dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0 dark:ring-white/10 dark:hover:border-zinc-700 dark:hover:ring-white/20 lg:absolute lg:-left-5 lg:-mt-2 lg:mb-0 xl:-top-1.5 xl:left-0 xl:mt-0" >
                <ArrowLeftIcon className="h-4 w-4 stroke-zinc-500 transition group-hover:stroke-zinc-700 dark:stroke-zinc-500 dark:group-hover:stroke-zinc-400" />
              </button>
            )} */}
            <article>
              <div className='mb-3'>
                <Image src={post.featuredImage.node.sourceUrl} width={1500} height={1500} />
              </div>
              <header className="flex flex-col">

                <h1 className="mt-6 text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
                  {post.title}
                </h1>
                <time
                  dateTime={post.date}
                  className="order-first flex items-center text-base text-zinc-400 dark:text-zinc-500"
                >
                  <span className="h-4 w-0.5 rounded-full bg-zinc-200 dark:bg-zinc-500" />
                  <span className="ml-3 mr-3">{dayjs(post.date).format("MMM DD YYYY")}</span>
                  <span className="h-4 w-0.5 rounded-full bg-zinc-200 dark:bg-zinc-500" />
                  <span className="ml-3">Daniel Larkin</span>
                </time>
              </header>
              <Prose className="mt-8">{parse(post.content)}</Prose>
            </article>
          </div>
        </div>
      </Container>
    </>
  )
}
