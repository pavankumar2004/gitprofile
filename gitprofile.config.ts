// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'pavankumar2004',
  },

  base: '/gitprofile/',

  projects: {
    github: {
      display: true,
      header: 'Github Projects',
      mode: 'manual',
      automatic: {
        sortBy: 'updated',
        limit: 5,
        exclude: {
          forks: false,
          projects: ['pavankumar2004/pavankumar2004'],
        },
      },
      manual: {
        projects: [
          'pavankumar2004/TravelwithAI',
          'pavankumar2004/teachtools-v1',
          'pavankumar2004/airdropfinder',
          'pavankumar2004/F1-predictions-and-analysis',
        ],
      },
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
    title: 'Portfolio of Pavan Kumar',
    description: 'Full-stack developer with a passion for web, AI, and automation.',
    imageURL: 'https://source.unsplash.com/1200x630/?developer,portfolio',
  },

  social: {
    instagram: 'pavan_s_g',
    email: 'pk6122004@gmail.com',
  },

  skills: [
    'JavaScript',
    'TypeScript',
    'React.js',
    'Next.js',
    'Node.js',
    'MySQL',
    'PostgreSQL',
    'CSS',
    'Tailwind',
    'Flask',
    'Django',
  ],

  experiences: [
    {
      company: 'CrushGrowth / Transcribe.digital',
      position: 'Software Developer',
      from: 'May 2024',
      to: 'Present',
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
    id: '',
  },

  hotjar: {
    id: '',
    snippetVersion: 6,
  },

  themeConfig: {
    defaultTheme: 'dark',
    disableSwitch: false,
    respectPrefersColorScheme: false,
    displayAvatarRing: true,

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

  enablePWA: true,
};

export default CONFIG;
