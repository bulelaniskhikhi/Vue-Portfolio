<template>

  

  <div class="landing" id="landing">
    <section >

      <div class="container " id="landingtext" style="display: flex; justify-content: start; align-items: end; width: 100%">

        <div style=" display: flex; justify-content: end; margin-bottom: 10rem; margin-right: 2rem">
        <div>
          <h1 style="color: white">Hi my name is Xena</h1>
          <p id="landingdesc" class="fw-light" style="width: 80%">
            Hi, I'm an ambitious Front end developer based in Cape Town, South Africa. I seek every possible means to expand my abilities. If you can't tell pink is my favorite colour ♥
          </p>
          <br>
          <a href="#footer">
            <button id="Contactbtn">
            contact me
          </button>
          </a>
        </div>
          

          
          
        </div>

      </div>

      <div class="footer" >
        <div class="wave wave1"></div>
      <div class="wave wave2"></div>
      <div class="wave wave3"></div>
      <div class="wave wave4"></div>
      </div>
      

    </section>

    
  </div>

  <!-- <section>
    <div class="landing" id="landing">

    </div>
  </section> -->
</template>

<script>
</script>

<style scoped>

p {
  color: white;
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
  background-color: #ffc2cc;
}

span{
  display: flex;
  justify-content: center;
  
}

#Contactbtn{
  width: 50%;
  border-radius: 20px;
  border: none;
  padding: 10px;
  background-color: #ffa2b2;
  color: white;
}

button{

  cursor: pointer;
  overflow: hidden;
  
  transition: all .2s ease;

  

}

button:after{
  content: '';
    position: absolute;
    top: 0;
    transform: skewX(-20deg);
    background-image: linear-gradient(to right,transparent,rgba(#fff,.3),transparent); 
}
       
button:hover {
  animation: shine 1.6s ease;
}
    
button:active{
  transform: translateY(5px);
}
 
@media only screen and (min-width : 320px) {
  #landingtext{
    height: 575px;
  }
}

/* @media only screen and (min-width : 992px) {
  #landingtext{
    height: 753px
  }
} */

@media only screen and (max-width: 1200px){
  #landingtext{
    height: 579px;
  }
}
</style>

