<template>
  <div id="footerInfo">
    <div class="container">

      <div class="d-flex justify-content-evenly" style=" padding-top: 3rem;">
        <div class="footertext">
            <h3>Links</h3> 
        </div>

        <div class="footertext">
            <h3>Socials</h3>
        </div>
      </div>

      <div class="d-flex justify-content-evenly">
        <div class="footertext">
            <i class="fa-brands fa-github"></i>
            <i class="fa-brands fa-linkedin"></i>
        </div>
        <div class="footertext">

            <i class="fa-brands fa-instagram"></i>
        </div>

      <div style="width: 100%; margin-top:3rem; text-align: center;">
          <p class="footertext fw-light" style="font-size: 2rem">
              Xena Skhikhi copyright© 2022
          </p>
      </div>

    </div>
  </div>
</template>

<style scoped>
#footerInfo {
  background-color: #ffc2cc;
  height: 40vh;
  border-top-right-radius: 20px;
  border-top-left-radius: 20px;
}

.footertext{
    color: white;
}

i{
    font-size: 2rem;
    margin: 5px;
}

</style>