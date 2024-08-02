export default defineEventHandler(async (event) => {
    const body = await readBody(event);

    await verifyTurnstileToken(body.token || body['cf-turnstile-response'])
        .then((res) => {
            if (!res.success) {
                throw createError({
                    message: 'Invalid token.',
                    status: 400
                })
            }
        });

    try {
        await directusServer.request(
            createItem('contact_us', body.form)
        );
    } catch(err: any) {
        throw createError({
            message: JSON.stringify(err.errors),
            status: 400
        })
    }

    return { success: true }
})
  