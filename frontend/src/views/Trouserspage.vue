<template>
     
   <Header />
   <div class="main-container">
      <img src="/img/avatarlogo.jpg" alt="Image" class="image"/>
      <div class="text-overlay">DN Clothes Shop</div>
   </div>
   
   <div >
      <div class="searchbar">
         <input
         type="text"
         v-model="searchQuery"
         placeholder="Search for a product..."
         @input="fetchProducts"
         />
      </div>

      <div v-if="floading">Loading...</div>
      <div v-else-if="ferror">{{ ferror }}</div>

      <div v-else>
         <ul class="product-list">
            <li class="product" v-for="product in products" :key="product.product_id">
              <img :src="`/img/${product.product_image}`" alt="Product Image" class="productinfo imgae" />
              <h2 class="productinfo">{{ product.product_name }}</h2>
              <p class="productinfo">Price: {{ product.product_unit_price }}</p>
               <div class="button">
               <button @click="addToCart(product.product_id)" class="addtocart">Add to cart</button>
               <!-- Nút xem chi tiết -->
              <button @click="viewDetails(product.product_id)" class="btn btn-primary">
                View details
              </button>
              </div>
            </li>

            
         </ul>
      </div>
  </div>
   
   
   

<Footer></Footer>

</template>

<script setup>
import { ref, onMounted } from "vue";
import axios from "axios";
import { useRouter } from 'vue-router';

import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";

// Reactive state variables
const searchQuery = ref("");
const products = ref([]);
const floading = ref(true);
const ferror = ref(null);
const router = useRouter();

const productType = ref('Trousers');

// Fetch products function
const fetchProducts = async () => {
  floading.value = true;
  ferror.value = null;

  try {
    const response = await axios.get("/api/v1/products/search", {
      params: { productname: searchQuery.value },
    });

    products.value = response.data.products;
  } catch (err) {
    if (err.response && err.response.status === 404) {
      ferror.value = "No products found.";
      products.value = [];
    } else {
      ferror.value = "An error occurred while fetching products.";
    }
  } finally {
    floading.value = false;
  }
};

// Fetch all products when the component is mounted
onMounted(fetchProducts);

/*
const userId = 17; // Giả sử user ID là 1 (cần thay thế bằng user ID thực tế)

const addToCart = async (productId) => {
  try {
    const response = await axios.post(`/api/v1/cart/add/${userId}/${productId}`, {
      quantity: 1, // Mặc định số lượng là 1
    });
    alert(response.data.message); // Hiển thị thông báo thành công
  } catch (ferror) {
    console.error(ferror);
    alert("Can't add product to cart");
  }
};
*/
// Hàm lấy danh sách sản phẩm
const fetchDetailProducts = async () => {
  try {
    const response = await axios.get(`http://localhost:3000/api/v1/products/detail/${productid}`);
    products.value = response.data.products;
  } catch (error) {
    console.error('Failed to fetch products:', error);
  }
};

// Hàm điều hướng đến trang chi tiết sản phẩm
const viewDetails = (productid) => {
  router.push(`/detail/${productid}`);
};

// Gọi fetchProducts khi component được gắn kết
onMounted(fetchDetailProducts);

// Fetch products by type
const fetchProductsByType = async () => {
  floading.value = true;
  ferror.value = null;

  try {
    const response = await axios.get(`/api/v1/products/${productType.value}`);
    products.value = response.data.products;
  } catch (err) {
    ferror.value = 'An error occurred while fetching products';
    console.error(err);
  } finally {
    floading.value = false;
  }
};

// Fetch products when component is mounted
onMounted(fetchProductsByType);
</script>

<style scoped>

.container {
   min-height: 1000vh;
}

.main-container {
  position: relative;
  display: inline-block;
}

.image {
  width: 555.8%;  /* Hoặc kích thước cố định nếu cần */
  max-height: 25vh;
  filter: blur(3px); /* Điều chỉnh độ mờ */
  
}

.text-overlay {
   position: absolute;
   top: 50%;
   left: 278%;
   transform: translate(-50%, -50%);
   color: #28a7469e;  /* Màu chữ */
   font-size: 100px;  /* Kích thước chữ */
   font-weight: bold;  /* Định dạng chữ */
   text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);  /* Tạo bóng cho chữ để dễ nhìn trên nền sáng */
   
   width: 240%;
}

.searchbar {
   display: flex; /* Sử dụng Flexbox */
  justify-content: center; /* Căn giữa theo chiều ngang */
  align-items: center; /* Căn giữa theo chiều dọc */
  margin: 20px auto; /* Khoảng cách trên dưới */
  width: 100%;
}

.searchbar input {
  width: 60%; /* Chiều rộng của input */
  padding: 10px; /* Thêm khoảng cách bên trong */
  font-size: 16px; /* Kích thước chữ */
  border: 1px solid #ccc; /* Viền input */
  border-radius: 5px; /* Bo góc */
}

.product-list {
   display:grid;
   grid-template-columns: repeat(5, 1fr);
   gap: 15px;
   justify-items: center;
   list-style: none;   
}

.product{
   border: #000 SOLID 2PX;
   background-color: #28a74632;
   width: 350px;
   height: 600px;
   font-size: 25px;
}



.product-item {
  border: 1px solid #ccc;
  padding: 16px;
  margin: 8px;
  text-align: center;
}
.btn-primary {
  background-color: #16171793;
  color: white;
  border: none;
  padding: 8px 12px;
  cursor: pointer;
  font-size: 20px;
  
}
.btn-primary:hover {
  background-color: #28a7468d;
}

.button {
  padding: 10px;
  display: flex;
  justify-content: space-between; /* Căn chỉnh hai nút cách đều */
}

.productinfo {
  align-items: center;
  padding: 2px;
  padding-left: 10px;
  max-width: 100%;
  height: auto;
  display: block;
}

.productinfo.imgae{
  width: 90%; /* Chiều rộng ảnh */
  padding: 5px;
  margin: auto;
  height: auto; /* Chiều cao tự động theo tỉ lệ */
  max-height: 300px; /* Chiều cao tối đa */
  object-fit: cover; /* Đảm bảo ảnh vừa khung */
}

</style>
