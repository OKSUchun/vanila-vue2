<template>
  <div class="header">
    <NuxtLink to="/">
        <img src="~/assets/logo_oksu.png" class="main-bi" />
    </NuxtLink>
    
    <NuxtLink to="/login">
      <div class="user_info">{{ currentUser['USER_NM'] }}</div>
    </NuxtLink>
  </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
  computed: {
    // ...mapGetters("auth", ["currentUser"]),
    ...mapState("auth", ["currentUser"]),
  },
  created() {
    // console.log(this.currentUser.USER_NM);
  },
}

</script>

<style>
.header {
  position: fixed;
  margin-left: 0%;
  display: flex;
  align-items: center;
  /* justify-content: space-between; */

  width: 100%;
  height: 60px;
  /* padding: 0 240px; */
  background-color: #222;
  /* z-index: 999; */
}
.main-bi {
  height: 100px;
  /* position : absolute; */
  /* align-self: ; */
}
.user_info {
  color: white;
  font-size: 30px;
  line-height: 100%;
  vertical-align: top;
  letter-spacing: -0.3px;
  font-weight: bold;
  margin-right: 6px;
  text-align: right;
  
}

</style>