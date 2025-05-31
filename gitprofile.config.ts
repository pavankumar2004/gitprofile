// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'pavankumar2004', // Your GitHub org/user name.
  },
  base: '/',
  projects: {
    github: {
      display: true,
      header: 'GitHub Projects',
      mode: 'automatic',
      automatic: {
        sortBy: 'stars',
        limit: 8,
        exclude: {
          forks: false,
          projects: [],
        },
      },
      manual: {
        projects: ['pavankumar2004/transcribe-digital', 'pavankumar2004/decentralized-freelance-platform'],
      },
    },
    external: {
      header: 'Featured Projects',
      projects: [
        {
          title: 'Transcribe Digital',
          description: 'An AI-powered transcription platform using WhisperX and Flask, with diarization support and file handling via Node.js and GCP.',
          imageUrl: 'https://img.freepik.com/free-vector/audio-transcription_23-2148643689.jpg', // Replace with your project image if available
          link: 'https://transcribe.digital',
        },
        {
          title: 'Decentralized Freelance Platform',
          description: 'A full-stack decentralized freelance platform with Firebase, MongoDB, and Stripe integration for payments.',
          imageUrl: 'https://img.freepik.com/free-vector/freelance-work-concept_23-2148521407.jpg', // Replace with your project image if available
          link: 'https://github.com/pavankumar2004/decentralized-freelance-platform',
        },
      ],
    },
  },
  seo: {
    title: 'Portfolio of Pavan Kumar S G',
    description: 'Explore the portfolio of Pavan Kumar S G – a passionate Theoretical Computer Science student and full-stack/blockchain developer.',
    imageURL: '',
  },
  social: {
    linkedin: 'pavankumar2004',
    x: '',
    mastodon: '',
    researchGate: '',
    facebook: '',
    instagram: '',
    reddit: '',
    threads: '',
    youtube: '',
    udemy: '',
    dribbble: '',
    behance: '',
    medium: '',
    dev: '',
    stackoverflow: '',
    skype: '',
    telegram: '',
    website: '',
    phone: '+91-90808-27026',
    email: '22pt22@psgtech.ac.in',
  },
  resume: {
    fileUrl: '', // Add your resume link here (PDF hosted online)
  },
  skills: [
    'JavaScript',
    'Node.js',
    'React.js',
    'Flask',
    'MongoDB',
    'Firebase',
    'GCP',
    'AWS',
    'Docker',
    'Postman',
    'Git',
    'MySQL',
    'Oracle SQL',
    'Ethereum',
    'Solidity',
  ],
  experiences: [
    {
      company: 'Crush Growth',
      position: 'Backend Developer Intern',
      from: 'June 2024',
      to: 'August 2024',
      companyLink: 'https://www.crushgrowth.com/',
    },
    {
      company: 'Freelance',
      position: 'Full Stack Developer',
      from: '2023',
      to: 'Present',
      companyLink: '',
    },
  ],
  certifications: [
    {
      name: 'Google Cloud Essentials',
      body: 'Google Cloud',
      year: 'March 2024',
      link: 'https://example.com', // Replace with actual certificate link
    },
  ],
  educations: [
    {
      institution: 'PSG College of Technology',
      degree: 'Integrated M.Sc. Theoretical Computer Science',
      from: '2022',
      to: '2027',
    },
  ],
  publications: [],

  blog: {
    source: '', // dev or medium
    username: '', // Leave empty to hide blog section
    limit: 2,
  },
  googleAnalytics: {
    id: '',
  },
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'lofi',
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
  footer: `Made with <a 
      class="text-primary" href="https://github.com/arifszn/gitprofile"
      target="_blank"
      rel="noreferrer"
    >GitProfile</a> and ❤️ by Pavan Kumar S G`,
  enablePWA: true,
};

export default CONFIG;
