<template>
  <div class="container">
    <div id="Skillinfo" class="d-flex flex-wrap justify-content-between">
      <div
        class="d-flex"
        style="
          width: 500px;
          display: flex;
          height: 70vh;
          justify-content: center;
        "
      >
        <img
          class="floating cover img-fluid"
          src="https://i.postimg.cc/MpPkdFJn/Bulelani-1.jpg"
          alt=""
          style="width: 100%"
        />
      </div>


      <div style="width: 500px; height: 70vh" class="d-flex">
        <div style="margin-right: 50px">
          <h2 style="color: #ffa2b2">About me</h2>

          <br />

          <p>
            Hello, my name is Xena Skhikhi. I am an ambitious front-end developer. I learned design and art. I love coding and designing websites and want to continue my career as a web developer. My passion for these areas drives me to make something special.
          </p>
            <br/>
            <h2 style="color: #ffa2b2">Resume</h2>
            <br/>
            <h5 style="color: #ffa2b2"> <a href="https://muizenberghigh.org/" target="_blank" style="text-decoration:underline;
text-decoration-style: dotted; color: #ffa2b2">Muizenberg High School</a>  | 2017 - 2021</h5>
            <br/>
          <p>
            I attended Muizenberg High School and studied art and visual arts. I plan  to use it to improve our skills, build better websites and create better web designs.
          </p>
            <br/>

            <h5 style="color: #ffa2b2"><a href="https://www.lifechoices.co.za/academy" target="_blank" style="text-decoration:underline;
text-decoration-style: dotted; color: #ffa2b2">Life Choices Academy</a> | 2022 - present</h5>
            <br/>
            <p>
            I am currently working and studying at the Life Choices Academy to  improve my coding  skills
            </p>
            <br>
            <a href="https://drive.google.com/drive/folders/1Mu3Q84aQArzv5GbQGQO48iMKUeIxIyeh?usp=sharing"  download="">
              <button>download Cv</button>
            </a>
            
        </div>
        
        <div
          class="flex-column d-flex justify-content-evenly"
          style="width: 100px;"
        >
          <i
            class="fa-brands fa-html5"
            data-aos="fade-left"
            data-aos-easing="linear"
            data-aos-duration="500"
          > 
          </i>
          

          <i
            class="fa-brands fa-css3-alt"
            data-aos="fade-left"
            data-aos-easing="linear"
            data-aos-duration="550"
          ></i>

          <i
            class="fa-brands fa-bootstrap"
            data-aos="fade-left"
            data-aos-easing="linear"
            data-aos-duration="600"
          ></i>

          <i
            class="fa-brands fa-js-square"
            data-aos="fade-left"
            data-aos-easing="linear"
            data-aos-duration="650"
          ></i>

          <i
            class="fa-brands fa-vuejs"
            data-aos="fade-left"
            data-aos-easing="linear"
            data-aos-duration="700"
          ></i>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    AOS.init();
  },
};
</script>

<style scoped>
* {
  padding: 0;
  margin: 0;
}

i {
  font-size: 50px;
  display: flex;
  justify-content: center;
  color: #ffa2b2;
}

#Skillinfo {
  gap: 100px;
}

img {
  display: flex;
  justify-content: center;
  border-radius: 20px;

  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
    rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
}

.floating {
  animation-name: floating;
  animation-duration: 3s;
  animation-iteration-count: infinite;
  animation-timing-function: ease-in-out;
  /* margin-left: 30px;
    margin-top: 5px; */
}

@keyframes floating {
  from {
    transform: translate(0, 0px);
  }
  65% {
    transform: translate(0, 15px);
  }
  to {
    transform: translate(0, -0px);
  }
}

@media screen and (min-width: 768px) {
}

.cover {
  object-fit: cover;
  height: 70vh;
  object-position: 0px 0px;
}

button{
  background-color: #ffa2b2;
    border-radius: 20px;
    color: white;
    padding-left: 20px !important;
    padding-right: 20px !important;
    border: none;
    padding: 10px;
}
</style>

