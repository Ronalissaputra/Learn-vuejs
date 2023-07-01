<template>
  <Layout>
    <div class="md:mx-60 mx-4 mt-5 mb-10">
      <div class="flex items-center justify-between">
        <h1 class="text-2xl my-4">Produk Rekomendasi</h1>
        <select id="option" v-model="setCategory" @change="request"
          class="px-4 py-2 rounded-lg bg-slate-200 text-slate-600 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500">
          <option value="" disabled selected>Pilih kategori</option>
          <option value="smartphones">smartphones</option>
          <option value="laptops">laptops</option>
          <option value="fragrances">fragrances</option>
          <option value="skincare">skincare</option>
          <option value="groceries">groceries</option>
          <option value="home-decoration">home-decoration</option>
          <option value="furniture">furniture</option>
          <option value="womens-dresses">womens-dresses</option>
          <option value="womens-shoes">womens-shoes</option>
          <option value="mens-shirts">mens-shirts</option>
          <option value="mens-shoes">mens-shoes</option>
          <option value="mens-watches">mens-watches</option>
        </select>
      </div>
      <div v-if="response.length > 0">
        <div class="grid md:grid-cols-3 grid-cols-1 gap-4">
          <div 
            v-for="item in response" 
            :key="item.id" 
            class="border-2 ">
            <img :src="item.images[0]" alt="" class="w-full h-72">
            <div class="p-2 text-xl">
              <p>{{ item.title }}</p>
              <p>{{ item.brand }}</p>
              <p>Rate {{ item.rating }}</p>
              <p>$ {{ item.price }}</p>
            </div>
            <div class="flex p-2 gap-2 items-center justify-center">
              <button class="w-20 h-10 bg-slate-900 text-white text-2xl rounded-md">-</button>
              <p class="w-full h-10 bg-slate-900 text-white text-center text-2xl rounded-md">0</p>
              <button class="w-20 h-10 bg-slate-900 text-white text-2xl rounded-md">+</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Layout>
</template>

<script>
import Layout from '@/components/layout/Layout.vue';
import axios from "axios"
export default {
  name: "AboutView",
  components: {
    Layout,
  },
  data() {
    return {
      response: [],
      setCategory: "",
    }
  },
  mounted() {
    this.request();
  },
  methods: {
    async request() {
      try {
        let req;
        if (this.setCategory) {
          req = await axios.get(`https://dummyjson.com/products/category/${this.setCategory}`);
        } else {
          req = await axios.get('https://dummyjson.com/products');
        }
        this.response = req.data.products;
        console.log(req.data);
      } catch (error) {
        console.log(error);
      }
    }
  },
}
</script>