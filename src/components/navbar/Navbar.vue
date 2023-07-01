<template>
    <nav class="h-20 top-0 sticky bg-white">
        <div class="md:mx-60 mx-4 flex items-center h-full justify-between">
            <h1 class="text-4xl cursor-pointer">Shop<span class="text-pink-600">ID</span></h1>
            <div class="space-x-4 text-lg font-light">
                <router-link to="/">Produk</router-link>
            </div>
        </div>
    </nav>
</template>

<script>
export default {
    name: "Navbar"
}
</script>
