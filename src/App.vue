<template>
  
    <LandingView />
  
    <div id="skills" style="height: 0rem"></div>
    <div class="container"  style='margin-top: 10rem; min-height: 0vh; '>

      <h1 id="header" class="effect-underline fs-1 fw-light">
        Skills
      </h1>

      <SkillsView/>
    </div>


    <div id="projects" style="height: 10rem"></div>
    <div class="container min-vh-100" >
      <h1 id="header" class="effect-underline fs-1 fw-light">Projects</H1>
      <ProjectsView/>
    </div>

    <div style="height: 10rem">

    </div>
    
    <div id="testimonals" style="height: 10rem" class="container">
    <h1 id="header" class="effect-underline fs-1 fw-light">
          Testimonals
        </h1></div>
    <div class="container min-vh-100">
        <div class="row">
          <TestimonalsView/>
        </div>
    </div>

    <div id="contact" style="height: 5rem"></div>
    <div class="container min-vh-100" style="margin-bottom: 3rem">
      <div>
        <h1 id="header" class="effect-underline fs-1 fw-light">
          Contact
        </h1>
      </div>
      <div>
        <ContactsView/>
      </div>
    </div>

  <div>
    <FooterView/>
  </div>
  <div id="footer">
  </div>
    

</template>

<script>
import LandingView from '@/views/LandingView.vue'
import FooterView from './views/FooterView.vue'
import ProjectsView from '@/views/ProjectsView.vue'
import SkillsView from '@/views/SkillsView.vue'
import ContactsView from './views/ContactsView.vue'
import TestimonalsView from './views/TestimonalsView'

export default {
  components: { LandingView, FooterView, ProjectsView, SkillsView, ContactsView, TestimonalsView },

  
}
</script>

<!-- styles -->
<style>
.container{
  min-width: fit-content;
}

#header{
  color: black;
  font-size: 4rem !important;
  text-decoration: none;
  display: inline-block;
  position: relative;
  margin-bottom: 3rem;
}

.effect-underline:after {
	content: '';
  position: absolute;
  left: 0;
  display: inline-block;
  height: 2em;
  width: 100%;
  border-bottom: 5px solid;
  margin-top: 10px;
  opacity: 0;
	-webkit-transition: opacity 0.35s, -webkit-transform 0.35s;
	transition: opacity 0.35s, transform 0.35s;
	-webkit-transform: scale(0,1);
	transform: scale(0,1);
  color: #ffc2cc;
  font-size: 2rem;
}

.effect-underline:hover:after {
  opacity: 1;
	-webkit-transform: scale(1);
	transform: scale(1);
}
</style>
