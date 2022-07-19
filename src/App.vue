<template>
  
    <LandingView />
  
    <div id="skills" style="height: 0rem"></div>
    <div class="container"  style='margin-top: 10rem;'>
      <h1 style="margin-bottom: 3rem;">My skills</h1>
      <SkillsView/>
    </div>


    <div id="projects" style="height: 10rem"></div>
    <div class="container min-vh-100" >
      <h1>My projects</H1>
      <ProjectsView/>
    </div>

    <div class="container min-vh-100">
      <h1>My resume </h1>
    </div>

  <div>
    <FooterView />
  </div>
    

</template>

<script>
import LandingView from './views/LandingView.vue'
import FooterView from './views/FooterView.vue'
import ProjectsView from './views/ProjectsView.vue'
import SkillsView from './views/SkillsView.vue'

export default {
  components: { LandingView, FooterView, ProjectsView, SkillsView },

  
}
</script>

<!-- styles -->
<style>
.container{
  min-width: fit-content;
}
</style>
