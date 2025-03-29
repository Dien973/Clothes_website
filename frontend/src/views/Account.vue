<template>
     
   <Navbar />
   <div class="main-container">
      <h1>Welcome to DN Clothes Shop!</h1>
      <p>Discover the latest trends and shop your favorite outfits today.</p>
   

       <!-- Form Container -->
      <form class="form-container">
         <div class="input-group">
            <label for="name">Username</label>
            <input type="text" id="name" placeholder="Enter your user name" />
         </div>
         <div class="input-group">
            <label for="address">Address</label>
            <input type="text" id="address" placeholder="Enter your address" />
         </div>
         <div class="input-group">
            <label for="email">Email</label>
            <input type="text" id="email" placeholder="Enter your email" />
         </div>
          <!-- Gender Selection -->
            <div class="input-group gender-group">
               <p>Select your gender:</p>
               <label>
                  <input 
                     type="radio" 
                     name="gender" 
                     value="male" 
                     v-model="gender"
                  />
                  Male
               </label>
               <label>
                  <input 
                     type="radio" 
                     name="gender" 
                     value="female" 
                     v-model="gender"
                  />
                  Female
               </label>
            </div>
         <div class="input-group">
            <label for="birthday">Birthday</label>
            <input type="text" id="birthday" placeholder="Enter your birthday" />
         </div>
         <button type="update" class="update-button">Update</button>
         <!-- Delete Account Button -->
            <button type="delete" class="delete-button"
               @click="handleDeleteAccount"
            >Delete Account</button>
      </form>
   </div> 

   <Footer />

</template>

<script setup>
import Navbar from '@/components/Navbar.vue';
import SearchResult from '@/components/SearchResult.vue';
import Footer from '@/components/Footer.vue';


</script>

<style scoped>
.main-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  min-height: 70vh;
  background-color: #f9f9f9;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.main-container h1 {
  font-size: 2rem;
  color: #333;
  margin-bottom: 10px;
}

.main-container p {
  font-size: 1.2rem;
  color: #555;
  margin-bottom: 20px;
}

/* Form Container */
.form-container {
  width: 100%;
  max-width: 400px;
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

/* Input Group */
.input-group {
  margin-bottom: 15px;
}

.input-group label {
  display: block;
  margin-bottom: 5px;
  font-size: 14px;
  font-weight: bold;
  color: #333;
}

.input-group input {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 14px;
}

.input-group input:focus {
  border-color: #28a745;
  outline: none;
}

/* Update Button */
.update-button {
  width: 100%;
  padding: 10px;
  background-color: #28a745;
  color: #fff;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
}

.update-button:hover {
  background-color: #218838;
}

/* Delete Button */
.delete-button {
  width: 100%;
  padding: 10px;
  background-color: #ff4d4d;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
  margin-top: 10px;
}

.delete-button:hover {
  background-color: #e60000;
}
</style>

