#!/bin/sh
set -e

echo "Applying migrations..."
npx prisma migrate deploy

echo "Seeding database..."
npx prisma db seed

echo "Starting application..."
node dist/main.js
