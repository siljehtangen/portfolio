export const no = {
  navbar: {
    sections: ['Hjem', 'Interesser', 'Karriere', 'Prosjekter'],
    language: 'Språk',
    emailTitle: 'Send meg en e-post',
    linkedinTitle: 'Ta kontakt på LinkedIn',
    githubTitle: 'Se GitHub-profilen min',
  },
  navigation: {
    previous: 'Forrige',
    next: 'Neste',
    goToStep: 'Gå til steg {step}',
  },
  intro: {
    greeting: 'Hei, jeg heter',
    descriptionPrefix: 'En',
    descriptionHighlight: 'utvikler',
    descriptionMiddle: 'som drives av',
    keywords: ['å gjøre det lille ekstra', 'samarbeid', 'kvalitet', 'pålitelighet'],
    journey:
      'I team presterer jeg best sammen med mennesker som tror på meg, tør å si fra, og som alltid er ivrige etter å lære og vokse sammen.',
    traitsTitle: 'Nøkkelegenskaper',
    traits: ['Tar ansvar', 'Støttende og hjelpsom', 'Opptatt av læring', 'Søker utfordringer'],
  },
  hobbies: {
    title: 'Mine hobbyer og interesser',
    description:
      'Utover koding gir disse interessene meg kreativitet og former hvordan jeg angriper problemløsning og samarbeid.',
    skillsGained: 'Ferdigheter jeg har fått:',
    devGrowth: 'Hvordan det hjelper meg å utvikle meg som utvikler:',
    items: [
      {
        title: 'Kreativ skriving',
        description:
          'Skriving har styrket evnen min til å kommunisere tydelig, tenke logisk og løse problemer med kreativitet og presisjon.',
        skills: ['Strukturert', 'Kreativitet', 'Detaljfokus'],
        devConnection:
          'Kreativ skriving hjelper meg å skrive ren og vedlikeholdbar kode, god dokumentasjon og intuitive brukeropplevelser.',
      },
      {
        title: 'Fotball',
        description:
          'Fotball har lært meg verdien av lagarbeid, raske beslutninger og ro under press i konkurransesituasjoner.',
        skills: ['Lagarbeid', 'Strategisk tenkning', 'Kommunikasjon'],
        devConnection:
          'Å jobbe i team, tilpasse seg raske endringer og ta raske beslutninger speiler mye av dynamikken i prosjektene jeg jobber med.',
      },
      {
        title: 'Trening',
        description:
          'Regelmessig trening holder meg fokusert og bygger vaner rundt disiplin, kontinuitet og personlig utvikling.',
        skills: ['Kontinuitet', 'Målsetting', 'Robusthet'],
        devConnection:
          'Kontinuitet i trening har lært meg verdien av små, jevne forbedringer, akkurat som den gradvise progresjonen i utviklerfaget.',
      },
    ],
  },
  career: {
    title: 'Min karrierereise',
    description:
      'Hver rolle har bidratt til at jeg forstår interessene mine bedre og hvordan jeg kan bidra best mulig.',
    keySkills: 'Nøkkelferdigheter og teknologier:',
    items: [
      {
        title: 'Programvareutvikler',
        company: 'Kasomo Energy AS',
        duration: 'Juni 2025 - Nå',
        type: 'Heltid',
        description:
          'Etter et vellykket deltidsengasjement gikk jeg over i heltidsrolle for å fortsette hovedansvaret for systemutviklingen.',
        skills: ['TypeScript', 'React', 'Next.js', 'PostgreSQL', 'Vercel', 'Clerk', 'Docker', 'PGAdmin', 'Cursor'],
      },
      {
        title: 'Fullstack-utvikler',
        company: 'Curio Learning AS',
        duration: 'November 2025 - Januar 2026',
        type: 'Deltid (sidejobb)',
        description:
          'Curio Learning demokratiserer en-til-en-undervisning. Vi mener alle elever fortjener personlig oppfølging og skreddersydd veiledning.',
        skills: ['React', 'Next.js', 'TypeScript', 'Node.js', 'Nest', 'OpenAI API', 'PostgreSQL'],
      },
      {
        title: 'IT-systemutvikler',
        company: 'Kasomo Energy AS',
        duration: 'Januar 2025 - Juni 2025',
        type: 'Deltid (ved siden av studier)',
        description:
          'Utviklet prosjektstyrings- og workflowsystemet Kotip, der jeg bidro med mesteparten av koden og hadde en sentral rolle i dialogen med produkteier.',
        skills: ['TypeScript', 'React', 'Next.js', 'PostgreSQL', 'Vercel', 'Clerk', 'Docker', 'PGAdmin', 'Cursor'],
      },
      {
        title: 'Programvarekonsulent',
        company: 'Capgemini AS',
        duration: 'November 2024 - Mars 2025',
        type: 'Deltid (ved siden av studier)',
        description:
          'Jobbet med et proof of concept for Statens Vegvesen med fokus på bedre BIM-dataflyt gjennom automatisering og kvalitetssikring.',
        skills: ['Python', 'IFC', 'IDS', 'VSCode'],
      },
      {
        title: 'iOS-apputvikler',
        company: 'FotMob AS',
        duration: 'September 2024 - Desember 2024',
        type: 'Deltid (ved siden av studier)',
        description:
          'Jobbet med implementering av funksjoner og feilretting for å forbedre ytelse og brukeropplevelse i appen.',
        skills: ['Swift', 'Xcode'],
      },
      {
        title: 'Fullstack-utvikler',
        company: 'SD Worx',
        duration: 'Juni 2024 - August 2024',
        type: 'Heltid (sommerinternship)',
        description:
          'Implementerte et utkast til rammeverk for å måle effektivitet, med visualisering av resultater på en nettside.',
        skills: ['C#', '.NET', 'Angular', 'Azure', 'SQL Server', 'ASP.NET Core', 'Entity Framework', 'VSCode'],
      },
    ],
  },
  projects: {
    title: 'Mine prosjekter',
    description:
      'Bestående av hobby prosjekter og studentprosjekter.',
    keyFeatures: 'Nøkkelfunksjoner:',
    items: [
      {
        title: 'WordLens AI (mar 2026 - nå)',
        technologies: [
          'Rust',
          'Leptos',
          'WASM',
          'Trunk',
          'Tailwind CSS',
          'Axum',
          'Moka',
          'Ollama',
          'Llama 3',
          'SSE',
        ],
        description:
          'Et flerperspektiv språkverktøy bygget fullt ut i Rust, der hvert begrep forklares gjennom ulike AI-linser med tilhørende visuelle temaer.',
        highlights: [
          'Fem linser du kan bytte mellom: simple, learning, game, cyberpunk og poetic',
          'Leptos WASM-frontend med reaktiv streaming-UI og linsestyrt fargetema',
          'Axum-backend med Ollama-integrasjon, token-streaming via SSE og Moka-cache',
          'Lokal-først arkitektur med historikk-endepunkt, health checks og produksjonsservering av statiske filer',
        ],
        links: [{ type: 'GitHub', url: 'https://github.com/siljehtangen/wordlens-ai' }],
      },
      {
        title: 'Stitchbud (feb 2026 - nå)',
        technologies: [
          'Kotlin',
          'Spring Boot 3',
          'Spring Security',
          'JWT',
          'JPA/Hibernate',
          'PostgreSQL',
          'Supabase',
          'React 18',
          'TypeScript',
          'Vite',
          'Tailwind CSS',
          'React Router v6',
          'Gradle 8',
        ],
        description:
          'En mobil-først webapp for å spore strikke-, hekle- og syprosjekter med sikker autentisering, skylagring av filer og et delt materialbibliotek.',
        highlights: [
          'Dashboard med kategoriantall, nylige prosjekter og progresjonsoversikt',
          'Prosjektstyring med materialer, radteller, tags og prosjektnotater',
          'Mønsterrutenett for strikking og hekling med paint/erase-funksjonalitet',
          'Supabase-basert filopplasting, delt materialbibliotek, i18n-støtte og PDF-eksport',
        ],
        links: [{ type: 'GitHub', url: 'https://github.com/siljehtangen/stitchbud' }],
      },
      {
        title: 'LeieXEie (jan 2026 - nå)',
        technologies: [
          'React 18',
          'TypeScript',
          'Vite',
          'Recharts',
          '@react-pdf/renderer',
          'react-i18next',
          'CSS',
        ],
        description:
          'En leie-eller-eie-kalkulator tilpasset det norske boligmarkedet, laget for å sammenligne langsiktig nettoformue i stedet for kun månedlige boutgifter.',
        highlights: [
          'Rask og avansert modus med detaljert norsk finansmodell og skattebevisste antakelser',
          'Side-ved-side simulering av kjøper og leietaker med inflasjonsjustert nettoformue',
          'Break-even-år, årsvis detaljoversikt, interaktive grafer og PDF-eksport',
          'Tospråklig grensesnitt (norsk/engelsk) med et rent og brukervennlig design',
        ],
        links: [{ type: 'GitHub', url: 'https://github.com/siljehtangen/leie-x-eie' }],
      },
      {
        title: 'Prediplay (des 2025 - nå)',
        technologies: [
          'Go',
          'chi router',
          'SQLite',
          'GORM',
          'Angular 17',
          'TypeScript',
          'SCSS',
          'Bzzoiro sports API',
        ],
        description:
          'En fullstack fotballanalyse-applikasjon som henter spillerstatistikk fra de fem største ligaene, kjører scoringsmodeller og presenterer innsikt via et REST-API og et Angular-frontend.',
        highlights: [
          'Scoringssystem for toppspillere, benkespillere, skjulte perler og røde flagg',
          'REST-API med endepunkter for ligaer, lag, spillere, prediksjoner og dashboard',
          'Automatisk spiller-synk ved oppstart av backend med konfigurerbar API-integrasjon',
          'Separat backend/frontend-oppsett for lokal utvikling med API-proxy',
        ],
        links: [{ type: 'GitHub', url: 'https://github.com/siljehtangen/prediplay' }],
      },
      {
        title: 'Adventskalender 2025 (des 2025)',
        technologies: ['Svelte', 'TypeScript', 'Supabase', 'PostgreSQL'],
        description: 'En digital julekalender for venner og familie.',
        highlights: ['Brukerprofil med innlogging og registrering', 'Interaktiv historie som lar brukeren velge veien videre', 'Responsivt design for alle enheter'],
        links: [{ type: 'GitHub', url: 'https://github.com/siljehtangen/advent-calendar' }],
      },
      {
        title: 'Ompa (jan 2025 - nå)',
        technologies: ['React', 'TailwindCSS', 'ShadCN', 'Vue.js', 'TypeScript', 'Vite', 'C#', 'ASP.NET Core', 'Entity Framework', 'PostgreSQL', 'Azure', 'Cypress', 'Jest', 'Docker', 'PGAdmin', 'VSCode', 'GitHub', 'Google Auth'],
        description:
          'Sammen med Bouvet ASA og produkteier Jens Lien utviklet vi et nettbasert noteforvaltningssystem for Heimdal Storband.',
        highlights: [
          'Rollebasert tilgang og brukerprofiler',
          'Automatisk genererte nedlastbare settlister tilpasset hver musiker',
          'Håndtering av vikarer og opptredener',
          'Sentralisert notearkiv administrert av administratorer',
        ],
      },
      {
        title: 'Barcode (aug 2024 - des 2024)',
        technologies: ['TailwindCSS', 'Vitest', 'MongoDB', 'Jest', 'Express', 'Apollo Server', 'GraphQL', 'Apollo Client', 'Shadcn', 'Cypress', 'VSCode'],
        description:
          'En plattform der brukere kan dele drinkoppskrifter, like og kommentere innlegg, med fokus på brukervennlighet og tilgjengelighet.',
        highlights: [
          'Iterativ utvikling basert på kontinuerlig brukerfeedback',
          'Sterkt fokus på universell utforming og tilgjengelighet',
          'Responsiv støtte på tvers av enheter',
          'Bærekraftige prinsipper i webutvikling',
        ],
        links: [{ type: 'GitHub', url: 'https://github.com/siljehtangen/IT2810-project' }],
      },
      {
        title: 'Xplora (jan 2024 - jun 2024)',
        technologies: ['TypeScript', 'React', 'Next.js', 'Jest', 'ShadCN', 'MongoDB', 'Firebase', 'GitLab', 'VSCode'],
        description:
          'En reiseapp der brukere kan utforske byer, lagre favoritter, markere steder de har besøkt og skrive anmeldelser.',
        highlights: ['Utforske og oppdage byer', 'Lagre favorittbyer på profil', 'Markere byer du har besøkt', 'Skrive og lese anmeldelser'],
        links: [{ type: 'GitHub', url: 'https://github.com/siljehtangen/TDT4140-project' }],
      },
      {
        title: 'Ourplace (aug 2023 - des 2023)',
        technologies: ['JavaScript', 'Java', 'CSS', 'HTML5', 'Spring Boot', 'JavaFX', 'JUnit', 'VSCode', 'PlantUML', 'Maven'],
        description:
          'Forumapplikasjon der brukere registrerer seg eller logger inn og samhandler gjennom innlegg og reaksjoner.',
        highlights: ['Registrering og innlogging', 'Lese, skrive og reagere på innlegg', 'Feed sortert på dato eller reaksjoner'],
        links: [{ type: 'GitHub', url: 'https://github.com/siljehtangen/IT1901-project' }],
      },
      {
        title: 'FlappyBall (2023)',
        technologies: ['C#', 'Unity', 'VSCode'],
        description: 'Utviklet et Unity-spill inspirert av Flappy Bird.',
        highlights: ['Fysikkbasert ballbevegelse', 'Responsivt system for hinder-spawning', 'Poengsystem og tydelig UI-feedback'],
        links: [{ type: 'GitHub', url: 'https://github.com/siljehtangen/flappy-ball-unity' }],
      },
      {
        title: 'Hackerspace NTNU (aug 2022 - sep 2023)',
        technologies: ['Python', 'Django', 'JavaScript', 'HTML', 'CSS', 'VSCode'],
        description:
          'Nettside for Hackerspace NTNU med arrangementsregistrering, informasjonssider og bookingsystem.',
        highlights: ['Løpende vedlikehold og funksjonsoppdateringer', 'Implementerte engelske oversettelser', 'Forbedret UI/UX gjennom feilretting'],
        links: [{ type: 'GitHub', url: 'https://github.com/hackerspace-ntnu/website' }],
      },
      {
        title: 'Fryd & Flor (aug 2022 - des 2022)',
        technologies: ['JavaScript', 'HTML', 'CSS3', 'VSCode'],
        description:
          'Informasjonsnettside for blomsterbutikken Fryd & Flor med fokus på tydelig kommunikasjon og god brukeropplevelse.',
        highlights: ['Tydelig presentasjon av identitet og verdier', 'Brukervennlig og rent design', 'Responsivt oppsett for alle enheter'],
        links: [{ type: 'GitHub', url: 'https://github.com/siljehtangen/IT2805-project' }],
      },
    ],
  },
} as const
