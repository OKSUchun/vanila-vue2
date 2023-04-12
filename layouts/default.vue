<template>
    <div>
      <MainHeader/>
       <Nuxt/>
      <MainFooter/>
    </div>
</template>

<script>
import MainHeader from '~/components/main/MainHeader.vue'
import MainFooter from '~/components/main/MainFooter.vue'

export default {
    components: { MainHeader, MainFooter }
}
</script>

<style>

</style>