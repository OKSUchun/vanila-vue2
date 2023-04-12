<template>
  <div class="header">
    <NuxtLink to="/">
        <img src="~/assets/logo_oksu.png" class="main-bi" />
    </NuxtLink>
    <div>
        <NuxtLink to="/login">
          <button class="sml-btn">로그인 / 회원가입</button>
        </NuxtLink>
    </div>
  </div>
</template>

<script>

export default {
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
  background-color: #222;
  /* z-index: 999; */
}
.main-bi {
  height: 100px;
}
.sml-btn {
  font-size: 16px;
  font-weight: 600;
  color: #222;
  border-radius: 4px;
  background-color: #ffbc05;
  padding: 12px 16px;

}

</style>