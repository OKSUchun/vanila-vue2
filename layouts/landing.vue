<template>
  <div>
    
    <LandingHeader/>
    <!-- <MainSidebar/> -->
    <Nuxt/>
    <MainFooter/>
  </div>
</template>

<script>
import LandingHeader from '~/components/main/LandingHeader.vue'
import MainFooter from '~/components/main/MainFooter.vue'
// import MainSidebar from '~/components/main/MainSidebar.vue'
export default {
  components: { MainFooter, LandingHeader },
    
}
</script>

<style>

</style>