<template>

    <div class="icons">
      <a href="#"><i class="fa-brands fa-html5"></i></a>

      <a href="#"><i class="fa-brands fa-css3"></i></a>

      <a href="#"><i class="fa-brands fa-bootstrap"></i></a>
      
      <a href="#"><i class="fa-brands fa-vuejs"></i></a>
      
      <a href="#"><i class="fa-brands fa-square-js"></i></a>
      
      <a href="#"><i "></i></a>
      <a href="#"><i class="fa fa-linkedin"></i></a>
    </div>

</template>
<style lang="scss" scoped>
$i: 0;
$icons: 7;
@keyframes float {
  0% {
       transform: translate(0px, 0px);
   }

   50% {
       transform: translate(0px,16px);
   }

   100% {
       transform: translate(0px, 0px);
   }
}

@while $i <= $icons {
    a:nth-child(#{$i}) { 
      display: inline-block;
      animation: float 4s infinite ease-in-out;
      animation-delay: #{$i/2}s;
    }
    $i: $i + 1;
  }

.icons {
  margin-top: 40px;
  text-align: center;
}
a {
  font-size: 50px;
  color: #ffc2cc;
  padding: 3px 50px;
  margin: 2px 3px;
  transition: all 0.3s ease;
 
  &:hover {
    color: black;
  }
}
</style>