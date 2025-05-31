// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'pavankumar2004',
  },
  base: '/',
  projects: {
    github: {
      display: true,
      header: 'GitHub Projects',
      mode: 'manual',
      manual: {
        projects: [
          'pavankumar2004/exam-automation-amcs',
          'pavankumar2004/TravelwithAI',
          'pavankumar2004/stock-market-data-retrieval',
          'pavankumar2004/F1-predictions-and-analysis',
          'pavankumar2004/job-matcher',
          'pavankumar2004/crypto-currency-arbitrage-detection',
        ],
      },
    },
    external: {
      header: 'Freelance & Side Projects',
      projects: [
        {
          title: 'Teach Tools',
          description: 'AI tools directory for teachers to enhance classroom experience.',
          imageUrl: 'https://ibb.co/mrxqjmPq/image.png',
          link: 'https://teach.droptools.site',
        },
        {
          title: 'Travel with AI',
          description: 'AI-powered travel planning platform for personalized itineraries.',
          imageUrl: 'https://ibb.co/dJxJwT7B/image.png',
          link: 'https://travelwithai.com',
        },
        {
          title: 'Transcribe Digital',
          description: 'Transcription web app using WhisperX for diarization and transcription.',
          imageUrl: 'https://ibb.co/KcfdHB23/image.png',
          link: 'https://transcribe.digital',
        },
        {
          title: 'Every Survey',
          description: 'Survey platform with 100+ users for clean feedback collection.',
          imageUrl: 'https://ibb.co/9m3XJ533/image.png',
          link: 'https://everysurvey.website',
        },
        {
          title: 'Airdrop Finder',
          description: 'Web app to track latest crypto airdrops.',
          imageUrl: 'https://ibb.co/KxCD96y4/image.png',
          link: 'https://airdropfinders.vercel.app',
        },
        {
          title: 'Marin Motor (Belgium)',
          description: 'Responsive site built for a Belgian auto garage business.',
          imageUrl: 'https://ibb.co/bgRXNdFW/image.png',
          link: 'https://www.marinmotor.be',
        },
      ],
    },
  },
  seo: {
    title: 'Pavan Kumar S G — Software Engineer (ML | Backend | Web)',
    description: 'Software Engineer specializing in Machine Learning, Backend Systems, and Web Development.',
    imageURL: '',
  },
  social: {
    linkedin: 'pavankumar2004',
    website: 'https://transcribe.digital',
    phone: '+91-90808-27026',
    email: '22pt22@psgtech.ac.in',
  },
  resume: {
    fileUrl: '',
  },
  skills: [
    'Python',
    'JavaScript',
    'React.js',
    'Node.js',
    'Express.js',
    'Flask',
    'Java',
    'MySQL',
    'MongoDB',
    'Firebase',
    'Docker',
    'Git',
    'GCP',
    'AWS EC2',
  ],
  experiences: [
    {
      company: 'Transcribe Digital',
      position: 'Backend Developer (Freelance)',
      from: 'June 2024',
      to: 'Present',
      companyLink: 'https://transcribe.digital',
    },
    {
      company: 'Freelancer',
      position: 'Software Engineer (Full Stack & ML)',
      from: '2023',
      to: 'Present',
      companyLink: 'https://github.com/pavankumar2004',
    },
  ],
  certifications: [],
  educations: [],
  publications: [],
  blog: {
    source: '',
    username: '',
    limit: 0,
  },
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
      'synthwave',
      'retro',
      'valentine',
      'lofi',
      'dracula',
      'nord',
      'business',
      'dim',
      'sunset',
      'procyon',
    ],
    customTheme: {
      primary: '#00BFA6',
      secondary: '#263238',
      accent: '#FFD54F',
      neutral: '#1E1E1E',
      'base-100': '#FAFAFA',
      '--rounded-box': '1rem',
      '--rounded-btn': '1rem',
    },
  },
  footer: `Made with <a class="text-primary" href="https://github.com/arifszn/gitprofile" target="_blank" rel="noreferrer">GitProfile</a> and ❤️ by Pavan Kumar S G`,
  enablePWA: true,
};

export default CONFIG;
