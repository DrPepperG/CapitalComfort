import {
	createDirectus,
	rest,
	createItem,
	staticToken
} from '@directus/sdk';

const env = useRuntimeConfig()

const directusUrl = env.public.directus.url
const directusToken = env.directus.token;

const directusServer = createDirectus<any>(directusUrl)
	.with(rest())
	.with(staticToken(directusToken));

export { directusServer, createItem};