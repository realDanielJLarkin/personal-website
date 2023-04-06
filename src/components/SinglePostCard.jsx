import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"
import ReactHTMLParser from 'react-html-parser'

function SinglePostCard({ post }) {
    const [innerHTML, setInnerHTML] = useState()
    useEffect(() => {
        setInnerHTML(post.excerpt)
    }, [])

    return (
        <div className="max-w-sm card rounded-lg overflow-hidden shadow-lg bg-white cursor-pointer dark:bg-gray-900 dark:text-zinc-200 dark:hover:bg-gray-800">
            <div className=" h-[200px] overflow-hidden flex ">
                <Image className="" src={post.featuredImage.node.sourceUrl} alt={post.title} width={500} height={500} />
            </div>
            <div className="card-body px-6 py-4">
                <div className="font-bold text-xl mb-2">{post.title}</div>
                <p>{ReactHTMLParser(innerHTML)}</p>

                {/* <div className='card-action justify-start flex gap-3 flex-wrap items-start'>
                    {project.tags.map(tag => (
                        <div key={tag} className="badge bg-purple-100 text-purple-800 border-none">{tag}</div>
                    ))}
                </div> */}
                <div className="card-actions justify-end">
                    <Link href={`/blog/${post.slug}`} target='_blank' className="relative z-10 mt-6 flex text-sm font-medium text-zinc-400 transition hover:text-teal-500 cursor-pointer">
                        <span className="ml-2">Read More</span>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default SinglePostCard