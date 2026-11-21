# JobAi

## Requirements

- Node.js 20.11 or newer
- npm 10.2 or newer

## Bootstrap and run

Install dependencies from the repository root:

```sh
npm ci
```

Build and start each application independently:

```sh
npm run build:api
npm run start:api

npm run build:gateway
npm run start:gateway

npm run build:worker
npm run start:worker
```

The API listens on port 3000 by default. The WhatsApp gateway and worker run as standalone NestJS
application contexts and do not open an HTTP listener.
