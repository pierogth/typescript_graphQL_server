// src/index.ts

import { createServer } from 'node:http'
import { schema } from "./schema";
import { createSchema, createYoga } from 'graphql-yoga'

const yoga = createYoga({
  schema: schema
})

const server = createServer(yoga)

server.listen(4000, () => {
  console.info('Server is running on http://localhost:4000/graphql')
})