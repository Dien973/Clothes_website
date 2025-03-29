<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
    <div class="container">
        <router-link to="/" class="navbar-brand">DNClothes</router-link>
        <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
        >
            <span class="navbar-toggler-icon"></span>
        </button>

      
                
        
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        
        <ul class="navbar-nav mr-auto">

                    <li >
                      <router-link to="./shirt" class="nav-link">
                        Shirt
                      </router-link>
                    </li>
                    <li>
                      <router-link to="./trousers" class="nav-link">
                        Trousers
                      </router-link>
                    </li>                        
                    <li>
                      <router-link to="./accessories" class="nav-link">
                      Accesories
                      </router-link>
                    </li>
                    <li>
                      <router-link to="./dress" class="nav-link">
                        Dresses
                      </router-link>
                    </li>
            <li>
                <router-link to="/userhome" class="nav-link">Home</router-link>
            </li>

        </ul>


        <ul class="navbar-nav ms-auto">
            <!-- Liên kết với tài khoản người dùng -->
            <li class="nav-item">
                <router-link to="/account" class="nav-link">
                <i class="fas fa-user"  style="cursor: pointer"></i>
                </router-link>
            </li>
        </ul>

        
      </div>

      
    </div>
  </nav>
</template>




<style scoped>

    .navbar {
        display: flex;
        justify-content: space-between; /* Căn đều khoảng cách giữa các mục */
        align-items: center; /* Căn giữa theo chiều dọc */
    }

    .navbar .navbar-brand {
        font-size:30px;
        margin-left: 20px;
    }

    .navbar .container {
        max-width: 100%;
    }

    .navbar-nav {
        font-size: 20px;
        color: #fff; /* Màu chữ trắng */
        padding: 10px 15px;  
        margin-left: 500px;  
        justify-content: center; /* Căn giữa các mục navbar */
    } 

     .navbar-nav .navbar-link {
        padding-left: 20px;
     }

     .navbar-nav .nav-link:hover, .navbar-nav .nav-link.active {
        color: #28a745; /* Màu chữ khi hover hoặc active */
    }

    .navbarnav .nav-item {
        border-left: #28a745 solid 2px;
        opacity: 0.52;
        height: 30px;
    }

    .navbar-nav.ms-auto {
        margin-right: 10px;  /* Đẩy các mục trong navbar về bên phải */
    }

    .fas.fa-user {
        font-size: 30px; /* Thay đổi kích thước icon tại đây */
    }

</style>
