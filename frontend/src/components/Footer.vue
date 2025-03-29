<template>
  <hr>
  <footer class="footer">
    <div class="container">
      <div class="row">
        <div class="col-lg-4">
          <h2>Contacts</h2>
          <ul class="contact">
            <li class="items">
              <i class="fa-solid fa-phone"></i> 0123456789
            </li>

            <li class="items">
              <i class="fa-solid fa-envelope"></i> dienb2111973@student.ctu.edu.vn
            </li>

            <li class="items">
              <i class="fa-solid fa-envelope"></i> nganb2111993@student.ctu.edu.vn
            </li>

            <li class="items">
              <i class="fa-solid fa-location-dot"></i> Ninh Kieu, Can Tho, Viet Nam              
            </li>
          </ul>
        </div>
        <div class="col-lg-6">
          <h2>About  DNClothes</h2>
          <p class="items">DN Clothes is a standout clothing store offering diverse fashion collections, ranging from elegant office wear to trendy street styles. We carefully select the best fabrics to ensure comfort and durability for our customers. In addition, with a dedicated team and professional service, DN Clothes strives to bring you fashion products that are not only stylish but also in line with modern trends.</p>
        </div>
        <div class="col-lg-2">
          <h2>Links</h2>
          <ul class="link">  
            <li class="items">
              <a href="https://www.facebook.com/cdien.tt/" class="footer-link">
                <i class="fa-brands fa-facebook"></i> Facebook
              </a>
            </li>

            <li class="items">
              <a href="https://www.instagram.com" class="footer-link">
                <i class="fa-brands fa-square-instagram"></i> Instagram
              </a>
            </li>

            <li class="items">
              <RouterLink to="/" class="footer-link">
                <i  class="fa-solid fa-globe"></i> Website
              </RouterLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
}
</script>

<style scoped>
  hr {
    border: #000 solid 1px
  }

  .col-lg-6 h2{
    text-align: center;
  }

  a {
    text-decoration: none;
  }

  ul {
    list-style-type: none;
    padding-left: 0;  /* Loại bỏ khoảng cách mặc định bên trái */
  }

  li {
    margin-left: 0;  /* Loại bỏ khoảng cách bên trái của các mục */
  }


  .footer .fa-solid, .footer .fa-brands {
    color: #28a745;
    opacity: 0.65;
    padding: 10px;
  }

  .footer .items {
    font-size: 20px;
  }

  .footer .items .footer-link {
    display: flex;
    font-size: 20px;
    align-items: center;
    color: #000;
  }

  .link .footer-link:hover, .link .footer-link.active {
    color: #28a745; /* Màu chữ khi hover hoặc active */
  }
</style>
