import { Container } from '@/components/Container'
import Project from '@/components/Project'
import { SimpleLayout } from '@/components/SimpleLayout'
import SinglePostCard from '@/components/SinglePostCard'
import Head from 'next/head'
import React from 'react'


function Blog({ data }) {
    const posts = data.nodes
    return (
        <>
            <Head>
                <title>Blog - Daniel Larkin</title>
                <meta
                    name="Blog"
                    content="My Blog"
                />
            </Head>

            <SimpleLayout title={'Blog'} intro={'Thanks for checking out my blog! You can expect me to blog from time to time about topics and issues that I find interesting.'} />
            <Container>
                <div className="flex flex-col relative text-center md:text-left items-center">
                    <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                        {posts.map((post) => (
                            <SinglePostCard post={post} key={post.slug} />
                        ))}
                    </div>
                </div>
            </Container>

        </>
    )
}

export default Blog

export async function getStaticProps() {
    const res = await fetch(process.env.WP_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            query: `
            query MyQuery2 {
                posts {
                  nodes {
                    content
                    slug
                    title
                    featuredImage {
                      node {
                        sourceUrl
                      }
                    }
                    excerpt
                    date
                  }
                }
              }
        `
        })
    })
    const json = await res.json()
    console.log(json)
    return {
        props: {
            data: json.data.posts
        }
    }
}