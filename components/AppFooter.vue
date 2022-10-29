<template>
    <footer class="mt-auto bg-cc-black text-white py-8 px-16 space-y-4">
        <div class="grid grid-cols-1 md:grid-cols-5">
            <div>
                <!-- Logo -->
                <AppLogo />
            </div>
            <div>
                test
            </div>
        </div>
        <div class="container border-t-2 border-white">
            <div class="flex flex-col mt-4">
                <span class="font-semibold">NC License #20269</span>
                <span class="font-bold">Copyright &copy; {{ new Date().getFullYear() }} Capital Comfort</span>
            </div>
        </div>
    </footer>
</template>
