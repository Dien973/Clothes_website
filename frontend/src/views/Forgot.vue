<template>
  <div class="forgot-container">
    <div class="forgot-box">
      <h2>Forgot </h2>
      <p>Please enter your username address to reset your password.</p>

      <!-- Username Input Field -->
      <div class="input-field">
        <input 
          type="username" 
          v-model="username" 
          class="input"
          placeholder="Enter your username"
          required
        />
      </div>

      <div class="input-field">
        <input 
          type="password" 
          v-model="password" 
          class="input"
          placeholder="Enter your new password"
          required
        />
      </div>

      <div class="input-field">
        <input 
          type="password" 
          v-model="password" 
          class="input" 
          placeholder="Confirm password" 
          required 
        />
        </div>
      <!-- Reset Password Button -->
      <div class="input-field">
        <input 
          type="submit" 
          value="Send Reset Link" 
          class="submit"
          @click="handleResetPassword"
        />
      </div>

      <p class="back-to-login">
        <router-link to="/login">Back to Login</router-link>
      </p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

// Reactive variable for username
const username = ref('');
const router = useRouter();

// Handle password reset (this will be where you add logic to send reset email)
const handleResetPassword = () => {
  console.log('Username for password reset:', username.value);
  // Add your password reset logic here (e.g., API call to send the reset link)
  alert('A password reset link has been sent to your username.');
  router.push('/login'); // Redirect back to the login page
};
</script>

<style scoped>
.forgot-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f7f7f7;

}

.forgot-box {
  background: #d5cece;
  padding: 20px ;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(141, 24, 24, 0.1);
  width: 400px;
  text-align: center;

   
  display: flex;
  flex-direction: column; /* Sắp xếp các phần tử bên trong theo chiều dọc */
  align-items: center; /* Căn giữa nội dung theo chiều ngang */
  text-align: center;
   position: relative;
  transform: translateY(150px); /* Lui xuống 50px từ vị trí chính giữa */
}

.forgot-box h2 {
  margin-bottom: 20px;
}

.input-field {
  margin-bottom: 20px;
}

.input {
  width: 100%;
  padding: 10px;
  border: 4px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
}

.submit {
  width: 100%;
  padding: 10px;
  background-color: #28a745;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
}

.submit:hover {
  background-color: #218838;
}

.back-to-login {
  margin-top: 10px;
}

.back-to-login a {
  text-decoration: none;
  color: #007bff;
}

.back-to-login a:hover {
  text-decoration: underline;
}
</style>
