import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"
import parse from 'html-react-parser'

function SinglePostCard({ post }) {
    const [innerHTML, setInnerHTML] = useState('')
    useEffect(() => {
        setInnerHTML(post.excerpt)
    }, [post.excerpt])

    return (
        <div className="max-w-sm card rounded-lg overflow-hidden shadow-lg bg-white cursor-pointer dark:bg-gray-900 dark:text-zinc-200 dark:hover:bg-gray-800">
            <div className=" h-[200px] overflow-hidden flex ">
                <Image className="" src={post.featuredImage.node.sourceUrl} alt={post.title} width={500} height={500} />
            </div>
            <div className="card-body px-6 py-4">
                <div className="font-bold text-xl mb-2">{post.title}</div>
                <p>{parse(innerHTML)}</p>
                <div className="card-actions justify-end">
                    <Link href={`/blog/${post.slug}`} className="relative z-10 mt-6 flex text-sm font-medium text-zinc-400 transition hover:text-teal-500 cursor-pointer">
                        <span className="ml-2">Read More</span>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default SinglePostCard