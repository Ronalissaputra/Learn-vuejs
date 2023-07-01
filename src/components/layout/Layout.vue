<template>
    <div>
        <Navbar />
        <slot></slot>
        <Footer />
    </div>
</template>

<script>
import Navbar from '../navbar/Navbar.vue';
import Footer from "../footer/Footer.vue"
export default {
    name: "Layout",
    components: {
        Navbar,
        Footer
    }
}
</script>

