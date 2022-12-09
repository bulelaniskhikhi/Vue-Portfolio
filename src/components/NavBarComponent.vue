<template>
  <section>

    <nav class="navbar navbar-expand-lg fixed-top">

      <div class="container">

        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i class="bi bi-list" style="font-size: 2rem"> </i>
        </button>

        <div class="collapse navbar-collapse" id="navbarNav">
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
button {
  color: white;
  border: none;
}
nav {
  background-color: #ffc2cc;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  font-size: 1.3rem;
  font-weight: 100;
}
#Navbar {
  height: 10vh;
  background-color: #ffc2cc;

  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
}

a {
  text-decoration: none;
  color: white;
}
a:hover {
  color: rgba(0, 0, 0, 0.500);
}
@media only screen and (min-width: 992px) {
  #navbarNav {
    display: flex;
    justify-content: space-evenly;
  }
}
</style>
