import { Elysia } from 'elysia';
import { index } from './index';
import { todos } from './todos/todos';
import { logger } from '@bogeychan/elysia-logger';

export const v1 = new Elysia().group('/v1', (v1) => v1.use(index).use(todos));
