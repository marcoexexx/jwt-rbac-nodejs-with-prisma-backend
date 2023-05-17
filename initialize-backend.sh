yarn init .
yarn add typescript
yarn add -D types/node
npx tsc --init

mkdir -p src/controllers
mkdir -p src/middleware/

touch src/middleware/permission.ts

mkdir src/routes
mkdir src/services

mkdir config

touch config/default.ts
touch config/custom-environment-variables.ts

yarn add config dotenv
yarn add -D @types/config

echo \nPORT=8000 >> .env
echo \nNODE_ENV=development >> .env

yarn add envalid

mkdir utils

touch utils/validateEnv.ts

yarn add redis

touch utils/connectRedis.ts

yarn add express
yarn add -D @types/express

yarn add ts-node-dev

# yarn add -D prisma 
# npx prisma init --datasource-provider postgresql
# yarn add @prisma/client
