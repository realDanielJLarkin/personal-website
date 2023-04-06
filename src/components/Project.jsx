import Image from 'next/image'
import React from 'react'

function LinkIcon(props) {
    return (
        <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
            <path
                d="M15.712 11.823a.75.75 0 1 0 1.06 1.06l-1.06-1.06Zm-4.95 1.768a.75.75 0 0 0 1.06-1.06l-1.06 1.06Zm-2.475-1.414a.75.75 0 1 0-1.06-1.06l1.06 1.06Zm4.95-1.768a.75.75 0 1 0-1.06 1.06l1.06-1.06Zm3.359.53-.884.884 1.06 1.06.885-.883-1.061-1.06Zm-4.95-2.12 1.414-1.415L12 6.344l-1.415 1.413 1.061 1.061Zm0 3.535a2.5 2.5 0 0 1 0-3.536l-1.06-1.06a4 4 0 0 0 0 5.656l1.06-1.06Zm4.95-4.95a2.5 2.5 0 0 1 0 3.535L17.656 12a4 4 0 0 0 0-5.657l-1.06 1.06Zm1.06-1.06a4 4 0 0 0-5.656 0l1.06 1.06a2.5 2.5 0 0 1 3.536 0l1.06-1.06Zm-7.07 7.07.176.177 1.06-1.06-.176-.177-1.06 1.06Zm-3.183-.353.884-.884-1.06-1.06-.884.883 1.06 1.06Zm4.95 2.121-1.414 1.414 1.06 1.06 1.415-1.413-1.06-1.061Zm0-3.536a2.5 2.5 0 0 1 0 3.536l1.06 1.06a4 4 0 0 0 0-5.656l-1.06 1.06Zm-4.95 4.95a2.5 2.5 0 0 1 0-3.535L6.344 12a4 4 0 0 0 0 5.656l1.06-1.06Zm-1.06 1.06a4 4 0 0 0 5.657 0l-1.061-1.06a2.5 2.5 0 0 1-3.535 0l-1.061 1.06Zm7.07-7.07-.176-.177-1.06 1.06.176.178 1.06-1.061Z"
                fill="currentColor"
            />
        </svg>
    )
}

function Project({ project }) {
    return (
        <div className="max-w-sm card rounded-lg overflow-hidden shadow-lg bg-white cursor-pointer dark:bg-gray-900 dark:text-zinc-200 dark:hover:bg-gray-800">
            <Image className="w-full bg-white" src={project.image} alt={project.title} width={500} height={500} />
            <div className="card-body px-6 py-4">
                <div className="font-bold text-xl mb-2">{project.title}</div>
                <p className="text-gray-700 text-base dark:text-zinc-400">{project.description}</p>

                {/* <div className='card-action justify-start flex gap-3 flex-wrap items-start'>
                    {project.tags.map(tag => (
                        <div key={tag} className="badge bg-purple-100 text-purple-800 border-none">{tag}</div>
                    ))}
                </div> */}
                <div className="card-actions justify-end">
                    <a href={project.link} target='_blank' rel="noreferrer" className="relative z-10 mt-6 flex text-sm font-medium text-zinc-400 transition hover:text-teal-500 cursor-pointer">
                        <LinkIcon className="h-6 w-6 flex-none" />
                        <span className="ml-2">{project.link}</span>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Project