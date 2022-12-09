<template>
  
    <NavBar/>

    <LandingView />

    <SkillsView/>
    
    <SkillsIcons/>
    
    <ProjectsView/>
        
    <TestimonalsView/>
        
    <ContactsView/>
     
    <FooterView/>

  
    

</template>

<script>
import NavBar from '@/components/NavBarComponent.vue'
import SkillsIcons from '@/components/SkillsIconsComponent.vue'

import LandingView from '@/views/LandingView.vue'
import FooterView from './views/FooterView.vue'
import ProjectsView from '@/views/ProjectsView.vue'
import SkillsView from '@/views/SkillsView.vue'
import ContactsView from './views/ContactsView.vue'
import TestimonalsView from './views/TestimonalsView'

export default {
  components: { 
    LandingView, 
    FooterView, 
    ProjectsView, 
    SkillsView, 
    ContactsView, 
    TestimonalsView, 
    NavBar,
    SkillsIcons 
  },
}
</script>

<style>

</style>
