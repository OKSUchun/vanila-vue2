<template>
    <span>
        <button class="sml-btn" @click="logoutRequest">로그아웃</button>
    </span>
</template>

<script>
import { mapActions } from "vuex"
export default {
    methods: {
        ...mapActions("auth", ["logoutRequest"])
    }
}
</script>

<style>
.sml-btn {
  font-size: 16px;
  font-weight: 600;
  color: #222;
  border-radius: 4px;
  background-color: #ffbc05;
  padding: 12px 16px;

}
</style>