<template>
  <div class="product-detail-container">
    <div v-if="loading" class="loading">Loading...</div>
    <div v-else-if="error" class="error">{{ error }}</div>
    <div v-else class="product-detail">
              <img :src="`/img/${product.product_image}`" alt="Product Image" class="productinfo imgae" />
      <div class="product-info">
        <h2>{{ product.product_name }}</h2>
        <p><strong>Price:</strong> {{ product.product_unit_price }} VNĐ</p>
        <p><strong>Description:</strong> {{ product.product_description }}</p>
                <p><strong>Type:</strong> {{ product.product_type }}</p>

        <p><strong>Size:</strong> {{ product.product_size }}</p>
        <p><strong>Stock:</strong> {{ product.product_stock }}</p>
      </div>
      <div class="button">
        <button @click="goBack" class="btn">Go Back</button>
        <button @click="addToCart" class="add-to-cart-button">Add to Cart</button>
        
      </div>
    </div>
  </div>
  <Footer />
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRoute,  useRouter } from "vue-router";
import axios from "axios";


import Footer from "@/components/Footer.vue";

// Reactive state variables
const product = ref({});
const loading = ref(true);
const error = ref(null);

// Get the product ID from route params
const route = useRoute();
const router = useRouter();
const productId = route.params.productid;

// Fetch product details function
const fetchProductDetails = async () => {
  loading.value = true;
  error.value = null;

  try {
    const response = await axios.get(`/api/v1/products/detail/${productId}`);
    product.value = response.data.product;
  } catch (err) {
    if (err.response && err.response.status === 404) {
      error.value = "Product not found.";
    } else {
      error.value = "An error occurred while fetching product details.";
    }
  } finally {
    loading.value = false;
  }
};

// Hàm quay lại trang trước
const goBack = () => {
  router.go(-1);
};

// Fetch product details when component is mounted
onMounted(fetchProductDetails);
</script>

<style scoped>
.product-detail-container {
  padding: 20px;
  max-width: 800px;
  margin: 0 auto;
}

.loading {
  text-align: center;
  font-size: 20px;
  color: #28a746;
}

.error {
  text-align: center;
  font-size: 20px;
  color: red;
}

.product-detail {
  display: flex;
  flex-direction: column;
  align-items: center;
  border: #000 solid 2px;
  background-color: #28a74645;
}

.product-image {
  max-width: 100%;
  height: auto;
  margin-bottom: 20px;
}

.product-info {
  margin-bottom: 20px;
  padding: 0 ;
  text-align: left;
}

.product-info h2 {
  font-size: 25px;
  font-weight: bold;
  margin-bottom: 10px;
}

.button {
  
  justify-items: center;
  padding: 10px;
  padding-left: 10px;
  max-width: 100%;
  height: auto;
  display: flex;
}

.product-info p {
  font-size: 20px;
  margin: 5px 0;
  
}

.add-to-cart-button {
  background-color: #252826b7;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  font-size: 18px;
  margin-top: 20px;
}

.add-to-cart-button:hover {
  background-color: #218837e0;
}

.btn {
  background-color: #252826b7;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  font-size: 18px;
  margin-top: 20px;
  margin-right: 10px
}

.btn:hover {
  background-color: #218837e0;
}

.productinfo.imgae{
  width: 90%; /* Chiều rộng ảnh */
  padding: 5px;
  margin: auto;
  height: auto; /* Chiều cao tự động theo tỉ lệ */
  max-height: 500px; /* Chiều cao tối đa */
  object-fit: cover; /* Đảm bảo ảnh vừa khung */
}


</style>
