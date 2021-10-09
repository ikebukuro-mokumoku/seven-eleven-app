<template>
  <div>
    <div></div>
    <v-btn color="accent" @click="fetchAPI()">
      APIを取得
    </v-btn>
    <template v-if="fetched">
      <template v-for="product in products">
        <div :key="product.id">
          <v-img class="image" :src="product.image" />
          <div>商品名: {{ product.name }}</div>
          <div>カテゴリー: {{ product.category }}</div>
          <div>価格: {{ product.price }}</div>
          <v-divider></v-divider>
          <div>合計金額: {{ totalPrice }}</div>
        </div>
      </template>
    </template>
  </div>
</template>

<script>
import { ApiClient } from '../plugins/apiClient'
const apiClient = new ApiClient()

export default {
  data() {
    return {
      products: [],
      fetched: false
    }
  },
  computed: {
    totalPrice() {
      return 1000
    }
  },
  methods: {
    async fetchAPI() {
      try {
        this.products = await apiClient.fetchAPI()
        this.fetched = true
      } catch (error) {
        console.error(error)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.image {
  width: 100px;
  height: 100px;
}
</style>
