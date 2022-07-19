<template>

  <nav class="sticky-top" style="background-color: #ffc2cc; height: 10vh;">
    <div class="container">
      <span>
        <a href="#landing" class="links">Home</a>
      <a href="#skills" class="links">Skills</a> 
      <a href="#projects" class="links">Projects</a>
      </span>
      
    </div>
  </nav>

  <div class="landing" id="landing">
    <section style="height: 90vh">
      <div
        class="container-fluid d-flex justifty-content-center vh-100"
        style="margin-left: 6rem"
      >
        <div class="d-flex justify-content-center flex-column h-100">
          <h1 style="color: white">Hi my name is Xena</h1>

          <p class="fw-light" style="width: 500px">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus
            tempore praesentium veniam eaque eos sunt consequuntur architecto
            adipisci ad vitae laudantium quia laborum, veritatis, aut voluptatum
            quo consectetur aliquam aperiam?
          </p>
        </div>
      </div>

      <div class="wave wave1"></div>
      <div class="wave wave2"></div>
      <div class="wave wave3"></div>
      <div class="wave wave4"></div>
    </section>
  </div>
</template>

<script>
</script>

<style >
p {
  color: white;
}
* {
  margin: 0;
  padding: 0;
}
section {
  position: relative;
  width: 100%;
  height: 100vh;
  background: #ffc2cc;
  overflow: hidden;
}
section .wave {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100px;
  background: url(https://i.postimg.cc/YqcvK11W/wave.png);
  background-size: 1000px 100px;
}
section .wave.wave1 {
  animation: animate 30s linear infinite;
  z-index: 1000;
  opacity: 1;
  animation-delay: 0s;
  bottom: 0;
}
section .wave.wave2 {
  animation: animate2 15s linear infinite;
  z-index: 999;
  opacity: 0.5;
  animation-delay: -5s;
  bottom: 10px;
}
section .wave.wave3 {
  animation: animate3 30s linear infinite;
  z-index: 998;
  opacity: 0.2;
  animation-delay: 2s;
  bottom: 15px;
}
section .wave.wave4 {
  animation: animate2 5s linear infinite;
  z-index: 997;
  opacity: 0.7;
  animation-delay: -5s;
  bottom: 10px;
}

@keyframes animate {
  0% {
    background-position-x: 0;
  }
  100% {
    background-position-x: 1000px;
  }
}
@keyframes animate2 {
  0% {
    background-position-x: 0;
  }
  100% {
    background-position-x: -1000px;
  }
}

.links {
  text-decoration: none;
  color: white;
}

.links:hover {
  color: black;
}

nav{
  /* border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px; */
  background-color: #ffc2cc;
}

span{
  display: flex;
  justify-content: center;
  
}

a{
margin: 20px
}

</style>