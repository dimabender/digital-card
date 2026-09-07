import { Prisma, PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const profileData: Prisma.ProfileCreateInput = {
    name: 'Никита Кулаков',
    description:
      'Fullstack-разработчик с фокусом на Backend (TypeScript/Node.js), 3+ года коммерческого опыта',
  };

  const profile = await prisma.profile.upsert({
    where: { id: 1 },
    update: profileData,
    create: {
      id: 1,
      ...profileData,
    },
  });

  const links: Prisma.LinkCreateWithoutProfileInput[] = [
    { label: 'GitHub', url: 'https://github.com/dimabender' },
    { label: 'LinkedId', url: 'https://linkedin.com/in/thatsameuser' },
    { label: 'Telegram', url: 'https://t.me/thatsameuser' },
    { label: 'Homepage', url: 'https://dimabender.com' },
  ];

  for (const link of links) {
    await prisma.link.upsert({
      where: { url: link.url },
      update: { ...link, profileId: profile.id },
      create: { ...link, profileId: profile.id },
    });
  }

  const skills: Prisma.SkillCreateWithoutProfileInput[] = [
    {
      name: 'TypeScript',
      category: 'Frontend/Backend',
      description: 'Основной язык разработки',
    },
    {
      name: 'Rust',
      category: 'Backend',
      description: 'Системное программирование',
    },
    {
      name: 'Node.js',
      category: 'Backend',
      description: 'Среда выполнения',
    },
    {
      name: 'NestJS',
      category: 'Backend',
      description: 'Модульный DI-фреймворк',
    },
    {
      name: 'ExpressJS',
      category: 'Backend',
      description: 'Веб-фреймворк для Node.js',
    },
    {
      name: 'HonoJS',
      category: 'Backend',
      description: 'Лёгкий веб-фреймворк',
    },
    {
      name: 'Bun',
      category: 'Backend',
      description: 'Быстрая среда выполнения JS/TS',
    },
    {
      name: 'Prisma',
      category: 'Backend',
      description: 'Типобезопасный ORM',
    },
    {
      name: 'PostgreSQL',
      category: 'Backend',
      description: 'Реляционное хранилище',
    },
    {
      name: 'MongoDB',
      category: 'Backend',
      description: 'NoSQL база данных',
    },
    {
      name: 'Redis',
      category: 'Backend',
      description: 'In-memory хранилище, кэширование',
    },
    {
      name: 'React',
      category: 'Frontend',
      description: 'Библиотека для построения UI',
    },
    {
      name: 'NextJS',
      category: 'Frontend',
      description: 'React-фреймворк',
    },
    {
      name: 'React Native',
      category: 'Frontend',
      description: 'Кроссплатформенная мобильная разработка',
    },
    {
      name: 'Docker',
      category: 'Infra/DevOps',
      description: 'Контейнеризация и оркестрация',
    },
    {
      name: 'Linux',
      category: 'Infra/DevOps',
      description: 'Администрирование серверов',
    },
    {
      name: 'Git',
      category: 'Infra/DevOps',
      description: 'Контроль версий',
    },
    {
      name: 'Proxmox',
      category: 'Infra/DevOps',
      description: 'Виртуализация, homelab',
    },
  ];

  for (const skill of skills) {
    await prisma.skill.upsert({
      where: { name: skill.name },
      update: { ...skill, profileId: profile.id },
      create: { ...skill, profileId: profile.id },
    });
  }

  const experience: Prisma.ExperienceCreateWithoutProfileInput[] = [
    {
      company: 'Freelance',
      position: 'Fullstack-разработчик',
      startDate: new Date('2023-07-01'),
      endDate: null,
      achievements: [
        'Полностью разработал платформу для сервиса бьюти-услуг (фронтенд, бэкенд, база данных)',
        'Создал backend для платформы оптовой продажи цифровых ключей с системой заказов и оплаты',
        'Оптимизировал архитектуру нескольких проектов, повысив масштабируемость и скорость работы',
        'Взаимодействовал с клиентами, собирал требования и обеспечивал соблюдение сроков',
      ],
      stack: [
        'React',
        'NextJS',
        'React Native',
        'ExpressJS',
        'HonoJS',
        'Prisma',
        'PostgreSQL',
        'MongoDB',
      ],
    },
    {
      company: 'РосАква',
      position: 'Fullstack-разработчик',
      startDate: new Date('2025-04-01'),
      endDate: new Date('2026-05-01'),
      achievements: [
        'Инициировал единый механизм обработки ошибок, сократив число API-роутов',
        'Перевёл запросы к базе данных на транзакции, ускорив работу с большими данными в ~3 раза',
        'Переписал систему формирования древовидных данных, повысив производительность клиентского приложения',
      ],
      stack: ['React', 'Electron', 'HonoJS', 'PostgreSQL', 'Prisma', 'Bun'],
    },
    {
      company: 'Riga Technical University',
      position: 'Fullstack-разработчик',
      startDate: new Date('2024-01-01'),
      endDate: new Date('2024-06-01'),
      achievements: [
        'Перенёс дизайн платформы на современный интерфейс, адаптировал под мобильные устройства',
        'Разработал систему управления учебными материалами и тестовыми заданиями для преподавателей',
      ],
      stack: ['React', 'NestJS', 'MongoDB'],
    },
    {
      company: 'Trade union of information technology specialists',
      position: 'Backend-разработчик',
      startDate: new Date('2022-05-01'),
      endDate: new Date('2022-10-01'),
      achievements: [
        'Разработал модуль агрегации и фильтрации данных о гражданах, ускоривший получение информации на 40%',
        'Создал систему управления ролями и правами доступа',
        'Настроил взаимодействие фронтенда и бэкенда, участвовал в контроле качества кода',
      ],
      stack: ['NextJS', 'ExpressJS', 'Node.js', 'PostgreSQL', 'Prisma'],
    },
  ];

  for (const exp of experience) {
    await prisma.experience.upsert({
      where: { company: exp.company },
      update: { ...exp, profileId: profile.id },
      create: { ...exp, profileId: profile.id },
    });
  }

  const projects: Prisma.ProjectCreateWithoutProfileInput[] = [
    {
      name: 'Digital Card API',
      description:
        'GraphQL API на NestJS + Prisma, демонстрирующий backend-стек',
      repoUrl: 'https://github.com/dimabender/digital-card',
    },
    {
      name: 'Homepage',
      description: 'Личный сайт-визитка на TypeScript',
      repoUrl: 'https://github.com/dimabender/homepage',
    },
    {
      name: 'Raycast Engine',
      description: 'Raycast-движок на основе алгоритма DDA, написан на Rust',
      repoUrl: 'https://github.com/dimabender/raycast-engine',
    },
    {
      name: 'ASCII Web',
      description:
        'Конвертер изображений в ASCII-графику, Rust + веб-интерфейс',
      repoUrl: 'https://github.com/dimabender/ascii-web',
    },
    {
      name: 'Crypto Wallet',
      description:
        'Крипто-кошелёк на Next.js для сети Sepolia с поддержкой USDC',
      repoUrl: 'https://github.com/dimabender/crypto-wallet',
    },
  ];

  for (const project of projects) {
    await prisma.project.upsert({
      where: { repoUrl: project.repoUrl },
      update: { ...project, profileId: profile.id },
      create: { ...project, profileId: profile.id },
    });
  }

  console.log('Seed has successfully completed');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
