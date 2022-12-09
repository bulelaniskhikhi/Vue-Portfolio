<template>
  <div class="container" id="skills" style="padding-top: 5rem">
    <h3
      style="
        padding-bottom: 3rem;
        font-family: 'Roboto', sans-serif;
        font-size: 2.6rem;
        text-align: center;
      "
    >
      SKILLS
    </h3>
    
    <div class="table" id="Skillinfo">
      <div class="row">
        <div class="col-lg-6 col-md-12 col-sm-12">
          <img
            class="floating cover img-fluid"
            src="https://i.postimg.cc/MpPkdFJn/Bulelani-1.jpg"
            alt=""
            style="width: 100%; margin-bottom: 3rem; height: 87%;"
          />
        </div>

        <div class="col-lg-6 col-md-12 col-sm-12">
          <div class="row">
            <div class="col-lg-12 col-md-12 col-sm-12">
              <h2 style="color: #ffa2b2">About me</h2>

              <br />

              <p>
                Hello, my name is Xena Skhikhi. I'm a 19 year old trans woman who is hightly ambitious
                about front-end developement. I learned design and art in highschool and have always
                seeked ways to flex my creative vision weather it's through drawing or coding. 
                I love coding and designing websites and want to continue and hopefully turn it into my career. 
                I feel that my passion for these areas drives me to make something really special and unique.
              </p>
              <br />
              <h2 style="color: #ffa2b2">Resume</h2>
              <br />
              <h5 style="color: #ffa2b2">
                <a
                  href="https://muizenberghigh.org/"
                  target="_blank"
                  style="
                    text-decoration: underline;
                    text-decoration-style: dotted;
                    color: #ffa2b2;
                  "
                  >Muizenberg High School</a
                >
                | 2017 - 2021
              </h5>
              <br />
              <p>
                I attended Muizenberg High School where i studied Fine Arts and Visual
                Design. I plan to use these skills to better build
                websites and create innovative web designs.
              </p>
              <br />

              <h5 style="color: #ffa2b2">
                <a
                  href="https://www.lifechoices.co.za/academy"
                  target="_blank"
                  style="
                    text-decoration: underline;
                    text-decoration-style: dotted;
                    color: #ffa2b2;
                  "
                >
                  Life Choices Academy</a
                >
                | 2022 - present
              </h5>

              <br />
              <p>
                I am currently working and studying at the Life Choices Academy
                to improve on my web design and better understand GUI and user friendly sites.
              </p>
              <br />
              <a
              id="cvbtn"
                href="https://drive.google.com/uc?export=download&id=1Gj1EvvKWGgfeaNABgqG0Gb6qKN4Evhbm"
                download
              >
                <button
                  style="padding-right: 20px; padding-left: 20px; padding: 10px"
                >
                  download Cv
                </button>
              </a>
            </div>
          </div>
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
#cvbtn{
  display: flex; justify-content: center; text-decoration: none;
}

i {
  font-size: 50px;
  display: flex;
  justify-content: center;
  color: #ffa2b2;
}

img {
  display: flex;
  justify-content: center;
  border-radius: 20px;

  /* width: 50%; */

  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
    rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
  padding: 0;
  height: 100%;
}

.floating {
  animation-name: floating;
  animation-duration: 3s;
  animation-iteration-count: infinite;
  animation-timing-function: ease-in-out;
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

button {
  background-color: #ffa2b2;
  border-radius: 20px;
  color: white;
  border: none;
}
</style>
