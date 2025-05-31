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
          title: 'Transcribe Digital',
          description: 'A transcription web app using WhisperX for diarization and transcription. Built with Flask & React. Used by 300+ users.',
          imageUrl: 'https://transcribe.digital/logo.png',
          link: 'https://transcribe.digital/',
        },
        {
          title: 'Every Survey',
          description: 'No Ads, No Affiliates. A survey platform with 100+ users for clean feedback collection.',
          imageUrl: 'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
          link: 'https://everysurvey.website/',
        },
        {
          title: 'Airdrop Finder',
          description: 'Web app to track latest crypto airdrops. Built for web3 enthusiasts.',
          imageUrl: 'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
          link: 'https://airdropfinders.vercel.app/',
        },
        {
          title: 'GasApps Directory',
          description: 'Curated directory for gas-saving dApps. Gained 1000+ users.',
          imageUrl: 'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
          link: 'https://gasapps.fyi/',
        },
        {
          title: 'Marin Motor (Belgium)',
          description: 'Responsive site built for a Belgian auto garage business.',
          imageUrl: 'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
          link: 'https://www.marinmotor.be/',
        },
      ],
    },
  },
  seo: {
    title: 'Pavan Kumar S G — Software Engineer (ML | Backend | Web)',
    description: 'Software Engineer specializing in Machine Learning, Backend Systems, and Web Development. Creator of Transcribe Digital.',
    imageURL: '',
  },
  social: {
    linkedin: 'pavan-kumar-s-g',
    website: 'https://transcribe.digital',
    phone: '+91-90808-27026',
    email: '22pt22@psgtech.ac.in',
  },
  resume: {
    fileUrl: '', // Optional
  },
  skills: [
    'JavaScript',
    'React.js',
    'Node.js',
    'Express.js',
    'Flask',
    'Python',
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
      companyLink: 'https://transcribe.digital/',
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
  educations: [], // Removed college
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
    defaultTheme: 'lofi',
    disableSwitch: false,
    respectPrefersColorScheme: false,
    displayAvatarRing: true,
    themes: [
      'light', 'dark', 'cupcake', 'synthwave', 'retro', 'valentine', 'lofi',
      'dracula', 'nord', 'business', 'dim', 'sunset', 'procyon',
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
