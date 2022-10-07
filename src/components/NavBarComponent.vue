<template>
  <section>

    <!-- <div id="NavHolder" class="fixed-top">
      <div id="Navbar" class="container-fluid">

        <div style=" height: 100%;display: flex; align-items: center;justify-content: space-evenly ">
          <a href="#landing" class="links"> Home </a>

          <a href="#skills" class="links"> Skills </a>

          <a href="#projects" class="links"> Projects </a>

          <a href="#testimonals" class="links"> Testimonals </a>

          <a href="#contact" class="links"> Contact </a>
        </div>

      </div>
    </div> -->

    <nav 
      class="navbar navbar-expand-lg fixed-top" 
      style="background-color: #ffc2cc; height: 10vh; border-bottom-left-radius: 20px; border-bottom-right-radius: 20px; font-size: 1.3rem; font-weight: 100;">
  <div class="container d-flex justify-content-center">

    <!-- <a class="navbar-brand" href="#">Navbar</a> -->

    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse d-flex justify-content-evenly" id="navbarNav">
      <ul class="navbar-nav">

        <li class="nav-item">
          <a class="nav-link" href="#landing">Home</a>
        </li>

        <li class="nav-item">
          <a class="nav-link" href="#skills">Skills</a>
        </li>

        <li class="nav-item">
          <a class="nav-link" href="#projects">Projects</a>
        </li>

        <li class="nav-item">
          <a class="nav-link" href="#testimonals">Testimonals</a>
        </li>

        <li class="nav-item">
          <a class="nav-link" href="#contact">Contact</a>
        </li>

      </ul>
    </div>
  </div>
</nav>

  </section>
</template>

<style scoped>
#Navbar{
    height: 10vh;
    background-color: #ffc2cc;
    /* padding-top: 10px; */

    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
}

a{

  text-decoration: none;
  color: white;
}
</style>
