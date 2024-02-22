This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
#to install dependencies
yarn

#to run dev server
yarn dev

#to run prod server
yarn build
yarn start

```

## Project structure

- `App/` - App root component

- `components/` - UI components

- `pages/` - Page components

## Docker File

- `docker-compose.yml` - docker compose file to run both dev and prod
- `Dockerfile.dev` - docker file to run dev mode
- `Dockerfile.prod` - docker file to run prod mode

```bash

#to run both dev and prod
 docker-compose up

#to run prod
docker-compose prod

#to run dev
docker-compose dev

```

Open [http://localhost:3000] <- for dev

Open [http://localhost:3011] <- for prod


## StoryBook




## Github Flow 

`-> You -> staging -> dev -> main`

