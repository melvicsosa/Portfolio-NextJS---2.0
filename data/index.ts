/**
 * Navigation items
 */
export const navItems = [
    { name: 'About', link: '#about' },
    { name: 'Projects', link: '#projects' },
    { name: 'Testimonials', link: '#testimonials' },
    { name: 'Experience', link: '#experience' },
    { name: 'Contact', link: '#contact' },
]

/**
 * Main Grid items - these are the items that are displayed in the grid - not all the items have a spare image
 */
export const gridItems = [
    {
        id: 1,
        title: 'Collaborative, team player, and detail-oriented',
        description: '',
        className: 'lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]',
        imgClassName: 'w-full h-full',
        titleClassName: 'justify-end',
        img: '/developer-way.svg',
        spareImg: '',
    },
    {
        id: 2,
        title: "I'm very flexible with time zone communications",
        description: '',
        className: 'lg:col-span-2 md:col-span-3 md:row-span-2',
        imgClassName: '',
        titleClassName: 'justify-start',
        img: '',
        spareImg: '',
    },
    {
        id: 3,
        title: 'My Tech Stack',
        description: 'Constantly learning and improving',
        className: 'lg:col-span-2 md:col-span-3 md:row-span-2',
        imgClassName: '',
        titleClassName: 'justify-center',
        img: '',
        spareImg: '',
    },
    {
        id: 4,
        title: 'New Tech researcher and enthusiast',
        description: '',
        className: 'lg:col-span-2 md:col-span-3 md:row-span-1',
        imgClassName: '',
        titleClassName: 'justify-start',
        img: '/grid.svg',
        spareImg: '/b4.svg',
    },
    {
        id: 5,
        title: 'Currently building a Figma Wireframe Automation Tool',
        description: 'The Inside Scoop',
        className: 'md:col-span-3 md:row-span-2',
        imgClassName: 'absolute right-0 bottom-0 md:w-96 w-60',
        titleClassName: 'justify-center md:justify-start lg:justify-center',
        img: '/b5.svg',
        spareImg: '/grid.svg',
    },
    {
        id: 6,
        title: 'Open for new projects and opportunities—let’s talk.',
        description: '',
        className: 'lg:col-span-2 md:col-span-3 md:row-span-1',
        imgClassName: '',
        titleClassName: 'justify-center md:max-w-full max-w-60 text-center',
        img: '',
        spareImg: '',
    },
]

/**
 * Projects - list of projects to display in the projects section/.
 * Each project has an id, title, description, image, icon list, and link
 */
export const projects = [
    {
        id: 1,
        title: 'Elis Cuisine',
        description: 'A strikingly elegant and modern web portfolio tailored for a specialized chef. Built with Next.js, it beautifully showcases culinary expertise through a dynamic portfolio, a stunning plates gallery, and a seamless contact experience.',
        img: '/projects/elis-cuisine.webp',
        iconLists: ['/next.svg', '/ts.svg','/tail.svg', 'vscode-icons:file-type-vite'],
        link: 'https://eliscuisine.com/',
    },
    {
        id: 2,
        title: 'Gamma Solar MF - Solar Calc',
        description: 'A powerful calculator engineered with Next.js, TypeScript, and Tailwind CSS to instantly estimate and quote ideal Gamma Solar equipment. It leverages precise geolocation and kW calculations to deliver highly accurate, tailored solar solutions.',
        img: '/projects/gamma-solar.webp',
        iconLists: ['/next.svg', '/ts.svg','/tail.svg', 'vscode-icons:file-type-vite'],
        link: 'https://gammasolar-calculadora.onrender.com/',
    },
    {
        id: 3,
        title: 'Simpli Studio - Ad Creative Management',
        description: 'Delivered a 25% performance lift that boosted marketing results and engagement; led the shift from third-party tools to in-house solutions to cut costs and reliance; and, using Vue.js, Node.js, and AWS, improved scalability, reliability, and deployment speed for a smoother UX.',
        img: '/projects/simpli_01.webp',
        iconLists: ['logos:vue', 'skill-icons:sass', 'skill-icons:javascript', 'mdi:aws', 'flowbite:mongo-db-solid', 'logos:nodejs-icon', 'material-icon-theme:serverless'],
        link: 'https://studio.simpli.padsquad.com/sign-in',
    },
    {
        id: 4,
        title: 'BuyRite Site - B2B Portal',
        description: 'Developed a Laravel/Statamic B2B portal from design files, implemented company and user registration for a custom e-commerce portal, automated product sync from Google Sheets, and contributed across front- and back-end development, including testing and automation.',
        img: '/projects/buyrite.webp',
        iconLists: ['simple-icons:statamic', 'ri:php-fill', '/ts.svg','/tail.svg', 'simple-icons:mysql', 'vscode-icons:file-type-vite'],
        link: 'https://buyrite.site/',
    },
    {
        id: 5,
        title: 'IGI-WAX',
        description: 'Developed an informative WordPress (Bedrock/Sage) portal with a resource and product catalog, implementing ACF-managed custom post types and taxonomies, an MVC services extension, and bespoke catalog e-commerce features; integrated HubSpot via Gravity Forms and contributed across the stack (front end and back end).',
        img: '/projects/igiwax.webp',
        iconLists: ['ic:baseline-wordpress', 'ri:php-fill', '/ts.svg','/tail.svg', 'simple-icons:mysql', 'vscode-icons:file-type-vite'],
        link: 'https://igiwax.com/',
    },
    {
        id: 6,
        title: 'iFoodDS – Enrollment Portal',
        description: 'Built a WordPress (Bedrock/Sage) enrollment portal with ACF-driven custom post types/fields, developed custom WooCommerce services for multi-variation pricing, crafted layouts/styles with Blade and Tailwind, and contributed across both front- and back-end.',
        img: '/projects/ifoodds.webp',
        iconLists: ['ic:baseline-wordpress', 'logos:woocommerce-icon', 'ri:php-fill', '/ts.svg','/tail.svg', 'simple-icons:mysql', 'mdi:webpack'],
        link: 'https://supplier-trace.ifoodds.com/',
    },
    {
        id: 7,
        title: 'MAC Connectors',
        description: 'Catalog website with modern/minimalistic design with custom functiosn to sync products from Google Sheets. Developed using Statamic, Blade, php, Tailwind, PCSS, Javascript and Vite.',
        img: '/projects/macconnectors.webp',
        iconLists: ['simple-icons:statamic', 'ri:php-fill', 'devicon:javascript', '/tail.svg', 'skill-icons:sass', 'vscode-icons:file-type-vite'],
        link: 'https://macconnectors.net/',
    },
    {
        id: 8,
        title: 'Web Portal | Judicial Branch (Dom.Rep)',
        description: 'Implemented a secure, scalable cloud architecture using PHP, jQuery, and MySQL; optimized for SEO and accessibility; integrated in-house solutions with third-party apps for a unified, user-centric experience; and led digital transformation during the 2020 pandemic by creating new online channels.',
        img: '/projects/PoderJudicial.webp',
        iconLists: ['ic:baseline-wordpress', 'ri:php-fill','devicon:bootstrap', 'devicon:jquery', 'simple-icons:mysql', 'devicon:azure' , 'ri:windows-fill'],
        link: 'https://poderjudicial.gob.do/',
    },
    {
        id: 9,
        title: 'e-Commerce Website | Judicial Quiosk',
        description: 'Built a WooCommerce/WordPress site with points rewards and role-based dashboards—enabling performance/event/task redemption and boosting engagement. Played a key role in the institution\'s digital transformation, driving engagement and motivation.',
        img: '/projects/Quiosco.webp',
        iconLists: ['ic:baseline-wordpress', 'ri:php-fill','logos:woocommerce-icon', 'devicon:jquery', 'simple-icons:mysql', 'devicon:azure' , 'ri:windows-fill'],
        link: 'https://quiosco.poderjudicial.gob.do/',
    },
    {
        id: 10,
        title: 'Magnolia Home Remodeling',
        description: 'Pixel-perfect WordPress overhaul: new design, new framework, refactored code, and preserved content—built with TypeRocket (MVC), Tailwind, Twig, and Gulp.',
        img: '/projects/magnolia.webp',
        iconLists: ['ic:baseline-wordpress', 'ri:php-fill', 'devicon:laravel','/ts.svg','/tail.svg','material-icon-theme:twig', 'vscode-icons:file-type-css',],
        link: 'https://magnoliahomeremodeling.com/',
    },
    {
        id: 11,
        title: 'Grade Construction',
        description: 'Developed a showcase-driven WordPress site (Bedrock/Sage) using ACF for CPTs/fields and Blade + Tailwind for layout/styles; key contributor on both FE and BE.',
        img: '/projects/grade.webp',
        iconLists: ['ic:baseline-wordpress', 'ri:php-fill', '/ts.svg','/tail.svg', 'simple-icons:mysql', 'skill-icons:gulp'],
        link: 'https://gradeconstruction.net/',
    },
    {
        id: 12,
        title: 'Elite Mechanical Group',
        description: 'Developed a custom WordPress design, using ACF for the Custom Fields & Custom Postypes and Elementor Pro as Builder, with a refined, minimalist look. Focused on content organization and user experience.',
        img: '/projects/elitemgc.webp',
        iconLists: ['ic:baseline-wordpress', 'ri:php-fill', 'devicon:javascript', 'simple-icons:elementor', '/gsap.svg'],
        link: 'https://elitemgc.com/',
    },
    {
        id: 13,
        title: 'Gundam - 3D-Carousel CSS Only',
        description: 'A simple 3D hero carousel built with React and Vite, styled entirely with PostCSS. The slides transition using layered transforms and perspective tricks in pure CSS—no JavaScript animation libraries required.',
        img: '/projects/gundam-hero.webp',
        iconLists: ['ri:reactjs-fill', 'vscode-icons:file-type-css', 'skill-icons:sass', 'vscode-icons:file-type-vite'],
        link: 'https://3d-gundam-hero.netlify.app/',
    },
    {
        id: 14,
        title: 'Pokedex with Speech Synthesis',
        description: 'A simple but user-friendly Pokedex. The data is fetched from the PokeAPI. One of the key features of this project is the implementation of the SpeechSynthesisUtterance interface, enabling the application to verbally announce the names and characteristics of each Pokémon.',
        img: '/projects/pokedex.webp',
        iconLists: ['material-symbols:html', 'vscode-icons:file-type-css', 'mdi:api'],
        link: 'https://animated-zuccutto-61e9d7.netlify.app/',
    },
]

/**
 * Testimonials - list of testimonials to display in the testimonials section.
 * Each testimonial has a quote, name, title, and headshot.
 */
export const testimonials = [
    {
        quote: "Melvic was instrumental in our digital transformation. His design expertise and extensive experience significantly improved our web portals—elevating user experience, visual interfaces, and integrations. Through strong teamwork and Melvic’s leadership, we earned multiple national institutional certifications.",
        name: 'Ricy Bido',
        title: 'Deputy Chief Technology Officer at Judicial Branch (Dominican Republic)',
        headshot: '/testimonials/ricy-100.jpg',
    },
    {
        quote: "A standout member of the Platform team, he shipped new tooling while safeguarding an intuitive UX/UI that empowered non-technical stakeholders. He collaborated seamlessly with Marketing and Ads Dev to deliver a successful ads implementation. Dependable, proactive, and detail-oriented, he consistently raised the bar.",
        name: 'Jennifer Gavin',
        title: 'SVP Creative + Innovation at PadSquad',
        headshot: '/testimonials/jenn-100.jpg',
    },
    {
        quote: "I’ve worked with Melvic on several freelance projects. He’s detail-oriented, earns client trust, and stays calm under pressure while keeping us focused on delivering results.",
        name: 'Eddy Ramirez',
        title: 'Senior QA Engineer at Kewit',
        headshot: '/testimonials/eddy-100.jpg',
    },
    {
        quote: "During Melvic’s time on the Platform team, we achieved strong business results. We built internal tools and components that meaningfully reduced third-party costs. Melvic adapted seamlessly to our SCRUM methodology and consistently elevated the team by sharing his knowledge and technical curiosity.",
        name: 'Ilich Padilla',
        title: 'Product Platform Team Lead at PadSquad',
        headshot: '/testimonials/ilich-100.jpg',
    },
]

/**
 * Companies - list of brands logos to display in the companies section.
 * Each company has an id, name, and image.
 */
export const companies = [
    {
        id: 1,
        name: 'googlecloud',
        img: '/companies/Google_Cloud_logo.svg',
    },
    {
        id: 2,
        name: 'aws',
        img: '/companies/Amazon_Web_Services_Logo.svg',
    },
    {
        id: 3,
        name: 'HOSTINGER',
        img: '/companies/hostinger_logo.svg',
    },
    {
        id: 4,
        name: 'stream',
        img: '/companies/Windows_Server_logo.svg',
    },
    {
        id: 6,
        name: 'n8n',
        img: '/companies/N8n-logo.svg',
    },
]

/**
 * Work Experience - list of work experience.
 * Each work experience has an id, title, description, class name, and thumbnail (icon).
 */
export const workExperience = [
    {
        id: 1,
        title: 'Front-End Developer - Lform (NJ)',
        desc: 'Develop scalable Laravel/Statamic/WordPress systems; engineer custom themes; deliver pixel-perfect layouts; optimize deployments and performance.',
        className: 'md:col-span-2',
        thumbnail: '/experience/exp01.png',
    },
    {
        id: 2,
        title: 'Software Engineer - PadSquad (NYC) ',
        desc: 'Developed scalable Vue/Node features, built AWS serverless architecture meeting advanced UX/UI and accessibility standards.',
        className: 'md:col-span-2',
        thumbnail: '/experience/exp02.png',
    },
    {
        id: 3,
        title: 'User Experience Expert (UX/UI) - Judicial Branch (Dom. Rep) ',
        desc: 'Led UX/UI enhancements for internal systems; expanded scope to architect, implement, and maintain public-facing platforms.',
        className: 'md:col-span-2',
        thumbnail: '/experience/exp03.png',
    },
    {
        id: 4,
        title: 'Webmaster & Database Analyst - 9-1-1 (Dom. Rep)',
        desc: 'Delivering secure, high-performance websites and resilient databases—building and maintaining sites, managing updates/backups/troubleshooting, optimizing SEO and Core Web Vitals, administering SQL Server/MariaDB/MySQL & tuning schemas/queries.',
        className: 'md:col-span-2',
        thumbnail: '/experience/exp04.png',
    },
]

/**
 * Social Media - list of social media links.
 * Each social media has an id, icon, and link.
 */
export const socialMedia = [
    {
        id: 1,
        icon: 'mdi:github',
        link: 'https://github.com/melvicSosa',
    },
    {
        id: 2,
        icon: 'mdi:linkedin',
        link: 'https://linkedin.com/in/melvic-sosa',
    },
    {
        id: 3,
        icon: 'mdi:behance',
        link: 'https://www.behance.net/melvicsosa',
    },
    {
        id: 4,
        icon: 'cib:500px-5',
        link: 'https://500px.com/p/melvicsosa',
    },
]

/**
 * Tech Stacks - list of tech stacks to displayed in the two columns layout tech section
 */
export const techStacksLeft = [
    'Next.js', 'Vue.js', 'Tailwind', 'JavaScript'
]

export const techStacksRight = [
    'Wordpress', 'PHP', 'PCSS'
]

