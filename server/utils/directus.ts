import {
	createDirectus,
	rest,
	createItem,
} from '@directus/sdk';

const directusUrl = useRuntimeConfig().public.directus.url

const directusServer = createDirectus<any>(directusUrl)
	.with(rest());

export { directusServer, createItem};