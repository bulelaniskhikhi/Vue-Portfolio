<template>
<div id="carouselExampleCaptions" class="carousel slide carousel-fade" data-bs-ride="carousel" data-interval="false"  >
 

  <div class="carousel-inner" style="border-radius: 20px">

    <div class="carousel-item active">

      <h3 style="color: #ffa2b2; text-align: center; margin-top: 1rem;" >Chaos Emeralds</h3>

      <img src="https://i.postimg.cc/3JyvZ9fn/chaos-crystal.gif" class="d-block w-100" alt="...">
      <div class="carousel-caption d-none d-md-block">
        <div style="color: #ffa2b2;">
          
          <h5 class="fs-5 fw-light" style="padding-left: 20px; padding-right: 20px;">
            This is a personal project inspired by the Sonic series. I decided to create a 3D carousel from Chaos emeralds
          </h5>

          <br/>

          <div class="d-flex justify-content-evenly">
            <a href="https://github.com/bulelaniskhikhi/Choas-Emeralds-3d-Carousel" target="_blank">
            <i class="fa-brands fa-github" style="font-size: 2rem; color: #ffa2b2;"></i>
          </a>

          <a href="https://starlit-lokum-0f1d72.netlify.app/" target="_blank">
            <i class="fa-solid fa-globe" style="font-size: 2rem; color: #ffa2b2;"></i> 
          </a>

          </div>
          
        </div>
      </div>

    </div>

    <div class="carousel-item" v-for="projects in projects" :key="project">

    <h3 style="color: #ffa2b2; text-align: center; margin-top: 1rem;" >{{projects.name}}</h3>

    <img :src="projects.img_URL" class="d-block w-100" alt="..." style="width: 1200px">

    <div class="carousel-caption d-none d-md-block" style="background-color: white; border-radius: 20px;">
        <div style="color: #ffa2b2;">
          
          <h5 class="fs-5 fw-light" style="padding-left: 20px; padding-right: 20px;">
            {{projects.project_DESC}}
          </h5>

          <br/>

          <div class="d-flex justify-content-evenly">
            <a :href="projects.project_GithubLink" target="_blank">
            <i class="fa-brands fa-github" style="font-size: 2rem; color: #ffa2b2;"></i>
          </a>

          <a :href="projects.project_LiveLink" target="_blank">
            <i class="fa-solid fa-globe" style="font-size: 2rem; color: #ffa2b2;"></i> 
          </a>

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
  
</template>
    
<script >

export default {
  data (){
    return{
      projects:[
      {
        id: 1,
        name: 'Magica',
        img_URL: 'https://i.postimg.cc/xCvxS39M/product-list.gif',
        project_DESC: 'This was a project I did while at the Life Choices Academy and I had to use Javascript to display the products. I decided to use Magical Weapons as my products to sell. It was a homage to the 90s anime magical girl aesthetic, taking alot of inspiration from Sailor moon and Cardcaptor Sakura',
        project_GithubLink: 'https://github.com/bulelaniskhikhi/Practical_1--Property-listing-',
        project_LiveLink: "https://sunny-lolly-e4b289.netlify.app/",
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
  width: 1200px;
}

#carouselExampleCaptions{
box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
border-radius: 20px;
}

</style>