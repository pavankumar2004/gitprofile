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
      mode: 'manual', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'updated', // Sort projects by 'stars' or 'updated'
        limit: 5, // How many projects to display.
        exclude: {
          forks: false, // Forked projects will not be displayed if set to true.
          projects: ['pavankumar2004/pavankumar2004'], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: ['pavankumar2004/TravelwithAI', 'pavankumar2004/teachtools-v1', 'pavankumar2004/airdropfinder','pavankumar2004/F1-predictions-and-analysis'], // List of repository names to display. example: ['arifszn/my-project1', 'arifszn/my-project2']
      },
    },
external: {
  header: 'My Projects',
  projects: [
    {
      title: 'marinmotor.be',
      description:
        'A website for a Belgian-based car garage built using Express.js, HTML, CSS, and hosted on GCP.',
      imageUrl: 'https://source.unsplash.com/800x600/?car,garage',
      link: 'https://marinmotor.be',
    },
    {
      title: 'Transcribe.digital',
      description:
        'A web app that transcribes audio/video files using OpenAI’s Whisper model with a clean UI.',
      imageUrl: 'https://source.unsplash.com/800x600/?audio,transcription',
      link: 'https://transcribe.digital',
    },
    {
      title: 'EverySurvey',
      description:
        'A minimalistic survey builder and collector platform. Create and share surveys in seconds.',
      imageUrl: 'https://source.unsplash.com/800x600/?survey,forms',
      link: 'https://everysurveywebsite.vercel.app',
    },
    {
      title: 'GasApps.fyi',
      description:
        'A directory of Google Apps Script-powered mini tools and automations curated for productivity.',
      imageUrl: 'https://source.unsplash.com/800x600/?automation,code',
      link: 'https://gasapps.fyi',
    },
  ],
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
