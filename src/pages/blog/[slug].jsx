import React from 'react'
import { ArticleLayout } from '@/components/ArticleLayout'

function Post({ post }) {

    return (
        <ArticleLayout post={post} />
    )
}

export default Post

export const getStaticProps = async (context) => {
    const res = await fetch(process.env.WP_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            query: `
          query SinglePost ($id: ID!, $idType: PostIdType! ) {
            post(id: $id, idType: $idType) {
              content
              slug
              featuredImage {
                node {
                  sourceUrl
                }
              }
              title
            }
          }
          `,
            variables: {
                id: context.params.slug,
                idType: "SLUG"
            }
        })
    })
    const json = await res.json()
    return {
        props: {
            post: json.data.post
        }
    }
}

export const getStaticPaths = async () => {
    const res = await fetch(process.env.WP_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            query: `
          query AllPosts {
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
    const posts = json.data.posts.nodes

    const paths = posts.map((post) => ({
        params: { slug: post.slug }
    }))

    return { paths, fallback: false }
}