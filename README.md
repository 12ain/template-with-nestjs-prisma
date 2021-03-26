<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo_text.svg" width="320" alt="Nest Logo" /></a>
</p>

## Description

This is an application built by Nest.JS TypeScript Prisma MySQL and Swagger.

## Installation

```bash
# Add this in your .env
APP_DATABASE_URL="mysql://USER:PASSWORD@SERVER:PORT/DATABASE_NAME"
# then
yarn install
yarn prisma migrate dev
```

## Running the app

```bash
# development
yarn start
# watch mode
yarn start:dev

# production mode
yarn start:prod
```

## Test

```bash
# unit tests
yarn test

# e2e tests
yarn test:e2e

# test coverage
yarn test:cov
```

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## License

Nest is [MIT licensed](LICENSE).
