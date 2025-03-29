<template>
  <div>
    <h1>Product List</h1>
    <div>
      <input
        type="text"
        v-model="searchQuery"
        placeholder="Search for a product..."
        @input="fetchProducts"
      />
    </div>
    <div v-if="loading">Loading...</div>
    <div v-else-if="error">{{ error }}</div>
    <div v-else>
      <ul>
        <li v-for="product in products" :key="product.product_id">
          <h2>{{ product.product_name }}</h2>
          <p>Type: {{ product.product_type }}</p>
          <p>Price: {{ product.product_unit_price }}</p>
          <p>Description: {{ product.product_description }}</p>
          <img :src="product.product_image" alt="Product Image" />
          <p>Size: {{ product.product_size }}</p>
          <p>Stock: {{ product.product_stock }}</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      searchQuery: "",
      products: [],
      loading: false,
      error: null,
    };
  },
  methods: {
    async fetchProducts() {
      this.loading = true;
      this.error = null;

      try {
        // Gửi request đến backend
        const response = await axios.get("/api/v1/products/search", {
          params: {
            productname: this.searchQuery, // Gửi từ khóa nếu có
          },
        });
        this.products = response.data.products; // Lưu danh sách sản phẩm
      } catch (err) {
        // Xử lý lỗi
        if (err.response && err.response.status === 404) {
          this.error = "No products found.";
          this.products = [];
        } else {
          this.error = "An error occurred while fetching products.";
        }
      } finally {
        this.loading = false;
      }
    },
  },
  created() {
    // Tự động tải tất cả sản phẩm khi component được khởi tạo
    this.fetchProducts();
  },
};
</script>

<style scoped>
h1 {
  text-align: center;
}
input {
  margin: 20px;
  padding: 10px;
  width: 300px;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  border: 1px solid #ddd;
  margin: 10px 0;
  padding: 10px;
}
img {
  max-width: 100px;
  max-height: 100px;
}
</style>
