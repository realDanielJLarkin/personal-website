
import informedViewerImage from '../../public/informedviewer.png'
import stepOutAndGo from '../../public/stepoutgo.png'
import portfolio from '../../public/portfolio.png'
import multistep from '../../public/multistep.png'
import tech from '../../public/fem-tech.png'
import chirp from '../../public/chirp.png'

const projects = [
    {
        title: 'Informed Viewer',
        description: 'Informed Viewer is a fullstack application built with MongoDB, Express, React, and Node. The app allows users search for and like or dislike YouTube videos.',
        image: informedViewerImage,
        link: 'https://classy-rugelach-71b903.netlify.app/',
        tags: ['NodeJS', 'Fullstack', 'MongoDB', 'React', 'REST API'],
        id: 1,
    },
    // {
    //     title: 'Step out and Go',
    //     description: 'Step out and Go is a travel blog built with Wordpress utlizing Elementor Pro.',
    //     image: stepOutAndGo,
    //     link: 'https://stepoutandgo.com',
    //     tags: ['Wordpress', 'Elementor', 'GraphQL', 'CMS', 'Blog'],
    //     id: 2
    // },
    {
        title: 'My Portfolio',
        description: 'My porfolio website (which you are currently viewing) is a headless Wordpress site built with NextJS. This option is great if you want the familiarity of Wordpress CMS but want a completely custom layout.',
        image: portfolio,
        link: 'https://lrkn.dev/',
        tags: ['NextJS', 'TailwindCSS', 'Fullstack', 'Headless Wordpress', 'GraphQL'],
        id: 3
    },
    {
        title: 'Multistep subscritption App',
        description: 'This is a project from Frontend Mentor. It is a mutistep subscription app built with NextJS featuring form validation, global state management, and CSS modules.',
        image: multistep,
        link: 'https://multistep-subscription-app.vercel.app/',
        tags: ['NextJS', 'Vanilla CSS', 'State Management', 'Form Validation', 'Frontend'],
        id: 4
    },
    {
        title: 'Tech Blog Home Page',
        description: 'This is a project from Frontend Mentor. It is frontend only and features responsive design with mobile navigation.',
        image: tech,
        link: 'https://frontend-mentor-news-page-phi.vercel.app/',
        tags: ['NextJS', 'TailwindCSS', 'Javascript', 'Kinda boring but kinda cool too', 'Frontend'],
        id: 5
    },
    {
        title: 'Chirp - Emoji Twitter Clone',
        description: 'Twitter, but for emojis. Built with NextJS using Typescript, Prisma, Clerk, and tRPC.',
        image: chirp,
        link: 'https://chirp-emoji-twitter.vercel.app/',
        tags: ['NextJS', 'TailwindCSS', 'Fullstack', 'Typescript', 'User Auth'],
        id: 6
    },

]

export default projects