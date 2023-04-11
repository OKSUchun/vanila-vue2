<template>
    <body class="wrapper" >
      <p>안녕하세요 {{ currentUser['USER_NM'] }}님</p>
    </body>
</template>

<script>
import { mapState } from 'vuex';
export default {
  computed:{
    // ...mapGetters("auth", ["currentUser"]),
    ...mapState("auth", ["currentUser"]),
  },
  created(){
    // console.log(this.currentUser.USER_NM);
  },
}
</script>

<style>
.wrapper {
  width: auto;
  border: 1px solid #ccc;
  padding: 64px 40px;
  border-radius: 4px;
  height: auto;
  margin: auto;
  /* display: flex; */
  align-items: center;
  justify-content: center;
  /* z-index: 999; */
}


</style>