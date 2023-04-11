import Head from 'next/head'
import Image from 'next/image'

import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'
import projects from '@/project-data/projects'
import Project from '../components/Project'
import { Container } from '@/components/Container'




export default function Projects() {
  return (
    <>
      <Head>
        <title>Projects - Daniel Larkin</title>
        <meta
          name="description"
          content="Things I’ve made trying to put my dent in the universe."
        />
      </Head>
      <SimpleLayout
        title="Just a small sample of projects I've worked on"
        intro="These projects cover a wide variety of tools and technologies. From fullstack NextJS applications to simple frontend only SPAs to Wordpress blogs, look around to see what
        interests you." />
      <Container>
        <div className='flex flex-col relative text-center md:text-left items-center'>
          <div className="relative grid grid-cols-1 md:grid md:grid-cols-3 md:flex-wrap md:max-w-7xl md:mx-auto md:justify-center gap-6">
            {projects.map((project) => (
              <Project key={project.id} project={project} />
            ))
            }
          </div>
        </div>
      </Container>

    </>
  )
}

//<div className='' key={project.title}>
            //   <Card className='p-6 flex item-center'>
            //     <div className="relative z-10 flex h-72 w-72 bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
            //       <Image
            //         src={project.image}
            //         alt=""
            //         className="h-72 w-72"
            //         unoptimized
            //       />
            //     </div>
            //     <h2 className="mt-6 text-base font-semibold text-zinc-800 dark:text-zinc-100">
            //       <Card.Link href={project.link}>{project.name}</Card.Link>
            //     </h2>
            //     <Card.Description>{project.description}</Card.Description>
            //     <p className="relative z-10 mt-6 flex text-sm font-medium text-zinc-400 transition group-hover:text-teal-500 dark:text-zinc-200">
            //       <LinkIcon className="h-6 w-6 flex-none" />
            //       <span className="ml-2">{project.link}</span>
            //     </p>
            //   </Card>
            // </div>