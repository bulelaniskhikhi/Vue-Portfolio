<template>
<div id="projects" class="container" style="padding-top: 10rem">
  <h3 style="padding-bottom: 3rem; font-family: 'Roboto', sans-serif; font-size: 3rem;">PROJECTS</h3>
  <div id="carouselExampleCaptions" class="carousel slide carousel-fade" data-bs-ride="carousel" data-interval="false"  >
 

  <div class="carousel-inner" style="border-radius: 20px">

    <div class="carousel-item active">

      <div class="card" style="width: 100%;">

<h5 style="color: #ffa2b2; text-align: center; margin-top: 1rem;" class="card-title">Magica</h5>

<img src="https://i.postimg.cc/xCvxS39M/product-list.gif" class="d-block img-fluid" >

<div class="card-body overflow-auto" style="height: 30vh;">

<div style="color: #ffa2b2;">
  <div class="mx-auto" style="display: flex; justify-content: center; width: 80%; text-align: center;">
    <h5 class="fs-5 fw-light card-text" >
      This was a project I did while at the Life Choices Academy and I had to use Javascript to display the products. I decided to use Magical Weapons as my products to sell. It was a homage to the 90s anime magical girl aesthetic, taking alot of inspiration from Sailor moon and Cardcaptor Sakura
  </h5>
  </div>
  

  <br/>

  <div class="d-flex justify-content-evenly">
    <a href="https://github.com/bulelaniskhikhi/Practical_1--Property-listing-" target="_blank">
            <i class="fa-brands fa-github" style="font-size: 2rem; color: #ffa2b2;"></i>
  </a>

  <a href="https://sunny-lolly-e4b289.netlify.app/" target="_blank">
    <i class="fa-solid fa-globe" style="font-size: 2rem; color: #ffa2b2;"></i> 
  </a>

  </div>
  
</div>
</div>

</div>
    </div>

    <div class="carousel-item" v-for="project in projects" :key="project.id">
      <div class="card" style="width: 100%;">

        <h5 style="color: #ffa2b2; text-align: center; margin-top: 1rem;" class="card-title">{{project.name}}</h5>

        <img :src="project.img_URL" :alt="project.name" class="d-block img-fluid" >

      <div class="card-body overflow-auto" style="height: 25vh;">
        
        <div style="color: #ffa2b2;">
          <div class="mx-auto" style="display: flex; justify-content: center; width: 80%; text-align: center;">
            <h5 class="fs-5 fw-light card-text" >
            {{project.project_DESC}}
          </h5>
          </div>
          

          <br/>

          <div class="d-flex justify-content-evenly">
            <a :href="project.project_GithubLink" target="_blank">
            <i class="fa-brands fa-github" style="font-size: 2rem; color: #ffa2b2;"></i>
          </a>

          <a :href="project.project_LiveLink" target="_blank">
            <i class="fa-solid fa-globe" style="font-size: 2rem; color: #ffa2b2;"></i> 
          </a>

          </div>
          
        </div>
      </div>

    </div>
    </div>

  </div>

  

  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">

    
    <i class="fa-solid fa-caret-left" style="color: #ffa2b2; font-size: 5rem"></i>
    <span class="visually-hidden">Previous</span>

  </button>

  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">

    <i class="fa-solid fa-caret-right" style="color: #ffa2b2; font-size: 5rem"></i>
    <span class="visually-hidden">Next</span>

  </button>

</div>
</div>

  
</template>
    
<script >

export default {
  data (){
    return{
      projects:[
      {
        id: 1,
        name: 'Chaos Emeralds',
        img_URL: 'https://i.postimg.cc/3JyvZ9fn/chaos-crystal.gif',
        project_DESC: 'This is a personal project inspired by the Sonic series. I decided to create a 3D carousel from Chaos emeralds',
        project_GithubLink: 'https://github.com/bulelaniskhikhi/Choas-Emeralds-3d-Carousel',
        project_LiveLink: "https://starlit-lokum-0f1d72.netlify.app/",
      },
      {
        id: 2,
        name: 'JS Calculator',
        img_URL: "https://i.postimg.cc/FsW73VPp/js-calculator.gif",
        project_DESC: "This was a project given to use by Life Choices Academy were we had to make a functional Javascript Calculator",
        project_GithubLink: "https://github.com/bulelaniskhikhi/Exercise-2-Calculator",
        project_LiveLink: "https://preeminent-starburst-2a35ec.netlify.app/",
      },
      {
        id: 3,
        name: "Interest Calculator",
        img_URL: "https://i.postimg.cc/WzLqhG78/ezgif-4-1e4015c703.gif",
        project_DESC:"This was a project given by Life Choices Academy were we had to make a functional JavaScript interest calculator",
        project_GithubLink:"https://github.com/bulelaniskhikhi/Exercise_14--Interest-Amount-",
        project_LiveLink: "https://fascinating-crostata-8ab8ed.netlify.app/",
      },
      {
        id: 4,
        name: "Hex to RGB Converter",
        img_URL:"https://i.postimg.cc/J7gFqGsY/hex-to-RGB.gif",
        project_DESC:"This is a project given to us by Life Choices Academy were we had to type in a number and it must convert it from hex to rgb and show a preview of the colour ",
        project_GithubLink:"https://github.com/bulelaniskhikhi/Exercise_12--Hex-to-RGB-",
        project_LiveLink:"https://glistening-sherbet-4b2f75.netlify.app/",
      },
      {
        id: 5,
        name: "Mahou Shoujo site",
        img_URL: "https://i.postimg.cc/B60XKxDW/ezgif-4-1002d57936.gif",
        project_DESC: "This is personal project where i took inspiration from an Manga/anime i was one of my favourite projects and i still continue to work on it",
        project_GithubLink: "https://github.com/bulelaniskhikhi/Mahou-Shoujo-site",
        project_LiveLink: "https://mahou-shoujo-site.netlify.app/",
      }
        
      ]
    }
  }
}
</script>

<style scoped>
/* .card{
  height: 70vh;
} */

img {
  height: 70vh !important;
  width: 625px !important;
  margin-left: auto;
  margin-right: auto;
}

#carouselExampleCaptions{
box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
border-radius: 20px;
}

</style>