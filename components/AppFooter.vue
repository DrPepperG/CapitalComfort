<template>
    <footer class="mt-auto bg-cc-black text-white py-8 px-16 space-y-4">
        <div class="flex flex-col lg:flex-row gap-4">
            <!-- Logo -->
            <AppLogo />
            <div class="grid grid-cols-1 sm:grid-cols-2 2xl:grid-cols-4 items-start gap-8">
                <div
                    v-for="category in $settings.site_footer_links"
                    :key="category.category_title"
                >
                    <span class="text-xl font-bold uppercase">{{ category.category_title }}</span>
                    <ul class="mt-2">
                        <li
                            class="font-semibold"
                            v-for="link in category.category_links"
                        >
                            {{ link.text }}
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="container border-t-2 border-white">
            <div class="flex flex-col mt-4">
                <span class="font-semibold">NC License #20269</span>
                <span class="font-bold">Copyright &copy; {{ new Date().getFullYear() }} {{ $settings.site_name }}</span>
            </div>
        </div>
    </footer>
</template>
