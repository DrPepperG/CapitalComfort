export interface Session {
	id: string;
	date_created: string;
}

export default defineNuxtRouteMiddleware(() => {
	const session = useCookie('session');

	if (!session.value) {
		const newSession: Session = {
			id: self.crypto.randomUUID(),
			date_created: new Date().toISOString(),
		};

		session.value = JSON.stringify(newSession);
	}
});