<template>
    <div class="login-form">
        <el-input v-model="id" placeholder="아이디" clearable class="id-input" />
        <el-input v-model="pw" placeholder="비밀번호" show-password class="pw-input" @keyup.enter.native="handleLogin" />
        <Button type="primary" class="login-btn" @click="handleLogin">로그인</Button>
        <nuxt-link to="/register">
            <Button type="primary" class="login-btn">회원가입</Button>
        </nuxt-link>
    </div> 
</template>

<script>
import { mapActions, mapState } from "vuex"
import { saveTokenToSessionStorage } from "~/util/authToken"

export default {
    data() {
        return {
            /* form binding을 위한 state */
            id: "",
            pw: "",
            authToken: ""
        }
    },
    ...mapState("auth", ["authToken"]),

    methods: {
        ...mapActions("auth", ["loginRequest", "loginStatusRequest"]),

        handleLogin(){
            const { id, pw } = this
            // console.log(this.id);
            // console.log(this.pw);

            this.loginRequest({ id, pw })
                /* 로그인에 성공한 경우 */
                .then((token) => {
                    /* 세션에 토큰 저장 */
                    saveTokenToSessionStorage(token)
                })

                /* 저장한 토큰으로 유저 상태 불러오기 */
                .then(() => this.loginStatusRequest())

                /* 쿼리 스트링에 refUrl이 있으면 refUrl로 이동하고, 그렇지 않다면 랜딩 페이지로 이동 */
                .then(() => {
                    this.$router.replace("/landing")
                })
                .catch((err) => {
                    alert(err)
                    this.$router.replace("/")
                })
        }

    },
}

</script>

<style>
.login-form {
  width: 512px;
  border: 1px solid #ccc;
  padding: 64px 40px;
  border-radius: 4px;
  height: auto;
  margin: auto;
  /* display: flex; */
  align-items: center;
  justify-content: center;

}
</style>