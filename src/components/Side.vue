<template>
  <div class="side">
    <person :person="resumeData.person"></person>
    <informations :infors="resumeData.infors"></informations>
    <skills :skills="resumeData.skills"></skills>
    <hobbies :hobbies="resumeData.hobbies"></hobbies>
  </div>
</template>

<script>
  import resumeData from '../resumeData.json'

  import Person from './side_components/Person.vue'
  import Informations from './side_components/Informations.vue'
  import Skills from './side_components/Skills.vue'
   import Hobbies from './side_components/Hobbies.vue'
  
  export default {
    data () {
      return {resumeData};
    },
    components:{
      Person,
      Informations,
      Skills,
      Hobbies
    }
  }
</script>

<style lang="scss" >

.side {
  width: 3.25rem;
  padding-left: 0.26rem;
  padding-right: 0.26rem;
  padding-top: 1.09rem;
  color: #fff;
  background-color: #9DAEB2;
}

</style>