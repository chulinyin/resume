<template>
  <div class="main">
    <project-experiences :project-experiences="resumeData.projectExperiences"></project-experiences>
    <school-experiences :school-experiences="resumeData.schoolExperiences"></school-experiences>
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


<style lang="sass">

.main {
  height: 100%;
  padding-left: 25px;
  padding-right: 30px;
  padding-top: 25px;

  padding-bottom: 30px;

  .title{
    // margin-top: 22px;
    margin-bottom: 14px;
    padding-bottom: 6px;
    border-bottom: 1px solid #a6c02a;
    color:#a6c02a;
    font-size: 14px;
    font-weight: bold;
  }
  .itemTitle{
    margin-top: 14px;
    margin-bottom: 10px;
    color: #606060;
    font-size:12px;
  }

  .description{
    margin-top: 7px;
    padding-left: 13px;
    background: url( "https://img.alicdn.com/imgextra/i3/1086204413/TB2sXogaqi5V1BjSspnXXa.3XXa_!!1086204413.png" ) 0 3px no-repeat;
    line-height: 1.5em; 
  }
  
}

</style>