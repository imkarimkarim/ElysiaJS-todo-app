import { Elysia } from 'elysia';
import packageJson from '../../../../package.json';

export const index = new Elysia().get('/', () => ({
	version: packageJson.version,
	docs: '/swagger',
}));
