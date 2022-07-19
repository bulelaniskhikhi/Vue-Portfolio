<template>

<div
    id="carouselExampleCaptions"
    class="carousel slide"
    data-bs-ride="carousel" 
  >

    <div class="carousel-indicators">

      <button
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide-to="0"
        class="active"
        aria-current="true"
        aria-label="Slide 1"
      ></button>

      <button
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide-to="1"
        aria-label="Slide 2"
      ></button>

      <button
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide-to="2"
        aria-label="Slide 3"
      ></button>

    </div>

    <div class="carousel-inner">

      <div class="carousel-item active">

        <img src="https://picsum.photos/200/300?random=2" class="d-block w-100 img-fluid" alt="..." />

        <div class="carousel-caption d-none d-md-block">
          <h5>First slide label</h5>
          <p>Some representative placeholder content for the first slide.</p>
        </div>

      </div>

      <div class="carousel-item">

        <img src="https://picsum.photos/200/300?random=3" class="d-block w-100 img-fluid" alt="..." />

        <div class="carousel-caption d-none d-md-block">
          <h5>Second slide label</h5>
          <p>Some representative placeholder content for the second slide.</p>
        </div>

      </div>

      <div class="carousel-item">

        <img src="https://picsum.photos/200/300?random=1" class="d-block w-100 img-fluid" alt="..." />

        <div class="carousel-caption d-none d-md-block">
          <h5>Third slide label</h5>
          <p>Some representative placeholder content for the third slide.</p>
        </div>

      </div>

    </div>

    <button
      class="carousel-control-prev"
      type="button"
      data-bs-target="#carouselExampleCaptions"
      data-bs-slide="prev"
    >
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>

    </button>
    
    <button
      class="carousel-control-next"
      type="button"
      data-bs-target="#carouselExampleCaptions"
      data-bs-slide="next"
    >
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>

</template>
    
<script >

// import { Carousel3d, Slide } from 'vue-carousel-3d';

// import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel';

// import { Carousel3d, Slide } from 'vue3-carousel-3d';

export default {

components: {
    
  },
 
};

</script>

<style>

/* .carousel-3d-slide{
  height:unset !important;
}

.carousel-3d-slide{
      box-shadow: 0 6px 6px 0 rgb(0 0 0 / 16%), 0 2px 10px 0 rgb(0 0 0 / 12%);
}
.prev[data-v-05517ad0]{
  left: 244px !important;
    top: 0px  !important;
}
.next[data-v-05517ad0]{
  right: 225px !important;
    top: 0px  !important;
}
.Next slide span{
  font-size:20px;
}
.carousel-3d-container .next span{
  font-size:40px;
}
.carousel-3d-container .prev  span{
  font-size:40px;
}
.carousel-3d-slide{
	width:400px !important;
} */

img{
  height: 70vh !important;
}

</style>