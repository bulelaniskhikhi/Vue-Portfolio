<template>
  
    <LandingView />
  
    <div class="container min-vh-100">
      <H1>My skills</H1>
    </div>

    <div class="container min-vh-100" >
      <H1>My projects</H1>
    </div>

    <div class="container min-vh-100">
      <H1>My footer</H1>
    </div>

  <div>
    <FooterView />
  </div>
    

  <router-view/>

</template>

<script>
import LandingView from './views/LandingView.vue'
import FooterView from './views/FooterView.vue'

export default {
  components: { LandingView, FooterView },

  
}
</script>

<!-- styles -->
<style>

</style>
