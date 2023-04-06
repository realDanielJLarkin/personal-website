import { Container } from '@/components/Container'
import Project from '@/components/Project'
import { SimpleLayout } from '@/components/SimpleLayout'
import SinglePostCard from '@/components/SinglePostCard'
import React from 'react'


function Blog({ data }) {
    const posts = data.nodes
    return (
        <>
            <SimpleLayout title={'Blog'} intro={'I blog about tech, travel, and life style design.'} />
            <Container>
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
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