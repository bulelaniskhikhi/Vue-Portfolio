<template>
  
    <!-- <NavBar/> -->

    <!-- <LandingView /> -->
  
    

      <!-- <h1 id="header" class="effect-underline fs-1 fw-light">
        Skills
      </h1> -->

      <SkillsView/>
    

    <!-- <div id="projects" style="height: 10rem"></div>
    <div class="container min-vh-100" >
      <h1 id="header" class="effect-underline fs-1 fw-light">Projects</H1>
      <ProjectsView/>
    </div> -->
    
    <!-- <div id="testimonals" style="height: 10rem" class="container">

    <h1 id="header" class="effect-underline fs-1 fw-light">
          Testimonals
        </h1>
        
        </div>
    <div class="container min-vh-100">
        <div class="row">
          <TestimonalsView/>
        </div>
    </div> -->

    <!-- <div id="contact" style="height: 5rem"></div>
    <div class="container min-vh-100" style="margin-bottom: 3rem">
      <div>
        <h1 id="header" class="effect-underline fs-1 fw-light">
          Contact
        </h1>
      </div>
      <div>
        <ContactsView/>
      </div>
    </div> -->

  <!-- <div>
    <FooterView/>
  </div>
  <div id="footer">
  </div> -->
    

</template>

<script>
import NavBar from '@/components/NavBarComponent.vue'

import LandingView from '@/views/LandingView.vue'
import FooterView from './views/FooterView.vue'
import ProjectsView from '@/views/ProjectsView.vue'
import SkillsView from '@/views/SkillsView.vue'
import ContactsView from './views/ContactsView.vue'
import TestimonalsView from './views/TestimonalsView'

export default {
  components: { LandingView, FooterView, ProjectsView, SkillsView, ContactsView, TestimonalsView, NavBar },

  
}
</script>

<!-- styles -->
<style>

</style>
