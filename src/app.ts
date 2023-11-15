// https://mirzaleka.medium.com/bun-crud-api-with-elysia-js-mongodb-10e73d484723

import { Elysia } from 'elysia';
import { swagger } from '@elysiajs/swagger';
import { fileLogger } from '@bogeychan/elysia-logger';
import './db/db';
import { v1 } from './routes/v1/v1';
import packageJson from '../package.json';
import cors from '@elysiajs/cors';

const app = new Elysia()
	// @ts-ignore
	.use(cors())
	.use(
		// @ts-ignore
		fileLogger({
			file: 'app.log',
		})
	)
	.use(
		// @ts-ignore
		swagger({
			documentation: {
				info: {
					title: 'ElysiaJS-todo-app Docs',
					version: packageJson.version,
				},
			},
		})
	)
	.use(v1)
	.listen(process.env.PORT || 3000);

console.log(`🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`);

export type api = typeof app;
