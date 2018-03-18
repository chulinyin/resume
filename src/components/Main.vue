<template>
  <div class="main">
    <project-experiences :project-experiences="resumeData.projectExperiences"></project-experiences>
    <!-- <school-experiences :school-experiences="resumeData.schoolExperiences"></school-experiences> -->
    <education-backgrounds :education-backgrounds="resumeData.educationBackgrounds"></education-backgrounds>
    <personal-introductions :personal-introductions="resumeData.personalIntroductions"></personal-introductions>
  </div>
</template>

<script>
  import resumeData from '../resumeData.json'

  import ProjectExperiences from './main_components/ProjectExperiences.vue'
  import SchoolExperiences from './main_components/SchoolExperiences.vue'
  import EducationBackgrounds from './main_components/EducationBackgrounds.vue'
  import personalIntroductions from './main_components/personalIntroductions.vue'
  
  export default {
    data () {
      return {resumeData};
    },
    components:{
      ProjectExperiences,
      SchoolExperiences,
      EducationBackgrounds,
      personalIntroductions
    }
  }
</script>


<style lang="scss">

.main {
  height: 100%;
  padding: 0.29rem 0.43rem 0.43rem 0.36rem;

  .title{
    margin-bottom: 0.2rem;
    padding-bottom: 0.09rem;
    border-bottom: 1px solid #658b95;
    color: #658b95;
    font-weight: bold;
  }

  .itemTitle{
    margin-top: 0.2rem;
    margin-bottom: 0.14rem;
    color: #787878;
  }

  .description{
    margin-top: 0.1rem;
    padding-left: 0.9em;
    background: url( "https://img.alicdn.com/imgextra/i2/1086204413/TB2b1LDap6AQeBjSZFIXXctXpXa_!!1086204413.png" ) 0 0.25em/0.8em 0.8em no-repeat;
    line-height: 1.4em; 
  }
  
}

</style>