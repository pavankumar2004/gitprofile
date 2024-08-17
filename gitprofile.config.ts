// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'pavankumar2004', // Your GitHub org/user name. (This is the only required config)
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/arifszn/arifszn.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/arifszn/portfolio, then set base to '/portfolio/'.
   */
  base: '/gitprofile/',
  projects: {
    github: {
      display: true, // Display GitHub projects?
      header: 'Github Projects',
      mode: 'automatic', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'updated', // Sort projects by 'stars' or 'updated'
        limit: 10, // How many projects to display.
        exclude: {
          forks: true, // Forked projects will not be displayed if set to true.
          projects: [], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: ['arifszn/gitprofile', 'arifszn/pandora'], // List of repository names to display. example: ['arifszn/my-project1', 'arifszn/my-project2']
      },
    },
    external: {
      header: 'My Projects',
      // To hide the `External Projects` section, keep it empty.
      projects: [
        {
          title: 'marinmotor.be',
          description:
            'A website for a belgian based car garage company built using Express js, html, css and GCP',
          imageUrl:
            'https://www.marinmotor.be/images/logo1.png',
          link: 'https://marinmotor.be',
        },
        {
          title: 'Transcribe.digital',
          description:
            'A web application that lets the user transcript their audio/video files using the whisper model of open ai',
          imageUrl:
            'https://th.bing.com/th/id/OIP.RTDptYLa9Hy1n7HwnhtFhwHaES?rs=1&pid=ImgDetMain',
          link: 'https://transcribe.digital',
        },
      ],
    },
  },
  seo: {
    title: 'Portfolio of Pavan kumar',
    description: '',
    imageURL: '',
  },
  social: {
 
    
    
    
    instagram: 'pavan_s_g',
    
    
    
    
    
    email: 'pk6122004@gmail.com',
  },
 
  skills: [


    'JavaScript',
    'React.js',
    'Node.js',
    'Next.js',
    'MySQL',
    'PostgreSQL',
    'CSS',
    'Tailwind',
    'flask',
    'django',
    'MySql',
    'Typescript',
  ],
  experiences: [
    {
      company: 'software developer',
      position: 'crushgrowth.com(Transcribe.digital)',
      from: 'may 2024',
      to:'present',
      
    },
    
  ],

  educations: [
    {
      institution: 'PCOT',
      degree: 'Theoretical Computer Science',
      from: '2021',
      to: '2026',
    },
    
  ],


  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'dark',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Display the ring in Profile picture
    displayAvatarRing: true,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'dim',
      'nord',
      'sunset',
      'procyon',
    ],

    // Custom theme, applied to `procyon` theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  // Optional Footer. Supports plain text or HTML.


  enablePWA: true,
};

export default CONFIG;
