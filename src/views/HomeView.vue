<template>
  <Layout>
    <div class="md:mx-60 mx-4">
      <h1 class="text-3xl">Anda sudah memencet sebanyak {{ count }}</h1>
      <div class="flex space-x-5">
        <button @click="updateCount" class="px-4 rounded-md py-2 bg-indigo-600 text-white">Tambah</button>
        <button @click="deleteCount" class="px-4 rounded-md py-2 bg-indigo-600 text-white">Kurang</button>
      </div>
    </div>
  </Layout>
</template>

<!-- script -->
<script>
import Layout from '@/components/layout/Layout.vue';
export default {
  name: "HomeView",
  components: {
    Layout,
  },
  data() {
    return {
      count: 0,
    }
  },
  methods: {
    updateCount() {
      this.count += 1;
    },
    deleteCount() {
      if(this.count > 0) {
        this.count -= 1;
      }
    }
  }
}
</script>

<style lang="scss" scoped></style>