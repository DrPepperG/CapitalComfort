export interface Settings {
    id?: number,

    site_name: string,
    site_logo: string,
    site_phone_number: string,
    site_email: string,

    site_alert: string,
    site_alert_color: string,

    site_description: string,
    site_favicon: string,

    site_nav_links: Array<{
        text: string,
        url: string,
        new_tab?: boolean
    }>
    site_footer_links: Array<{
        category_title: string,
        category_links: Array<{
            text: string,
            is_link: boolean,
            link?: 'string',
            new_tab?: boolean,
        }>
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
