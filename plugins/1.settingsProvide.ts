export interface Settings {
    id?: number,
    site_name: string,
    site_logo: string,
    site_phone_number: string,
    site_email: string,
    site_alert: string,
    site_description: string,
    site_nav_links: Array<{
        text: string,
        url: string,
        external?: boolean
    }>
    date_created: Date,
    date_updated: Date,
}

export default defineNuxtPlugin(async () => {
    const { getSingletonItem } = useDirectusItems();

    const settings: Settings = await getSingletonItem<Settings>({
        collection: 'site_settings'
    })
    
    return {
        provide: {
            settings: settings
        }
    }
})
