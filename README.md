# Digital Card API

Backend-приложение, презентующее меня как TypeScript-разработчика через GraphQL API вместо статичного резюме.

## Запуск

```
cp .env.example .env
docker compose up --build
```

При старте контейнеры автоматически:

1. поднимают PostgreSQL,
2. применяют Prisma-миграции,
3. заполняют БД реальными данными (идемпотентный seed через `upsert`),
4. поднимают GraphQL-сервер с Apollo Sandbox.

## Apollo Sandbox

После запуска доступен по адресу:

http://localhost:3000/graphql

Пример запроса

```graphql
query {
  profile {
    name
    description
    skills {
      name
      category
    }
    experience {
      company
      position
      achievements
    }
    projects {
      name
      repoUrl
    }
  }
}
```
