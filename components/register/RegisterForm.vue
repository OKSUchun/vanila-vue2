<template>
  <div>
    <el-form ref="infoFormRef" class="form-wrap" :model="infoForm" label-position="top" >
       <el-form-item label="ID" prop="user_id">
        <el-input
          v-model="infoForm.user_id"
          placeholder="ID를 입력하세요."
          show-word-limit
          :minlength="4"
          :maxlength="18"
          data-cy="user_id"
        />
     </el-form-item>

    <el-form-item label="비밀번호" prop="user_pw">
        <el-input
          v-model="infoForm.user_pw"
          placeholder="비밀번호를 입력하세요."
          show-word-limit
          :minlength="7"
          :maxlength="20"
          data-cy="user_pw"
        />
       </el-form-item> 
    <el-form-item label="이름" prop="user_nm">
        <el-input
          v-model="infoForm.user_nm"
          placeholder="이름을 입력하세요."
          show-word-limit
          :minlength="7"
          :maxlength="20"
          data-cy="user_nm"
        />
       </el-form-item> 
    </el-form>
     
    <button @click="handleRegister">등록</button>
  </div>
</template>

<script>
import { mapActions } from "vuex"
import { generateHashedPassword } from "~/util/encryption"
import authAPI from "~/oksu_api/auth"
export default {
    data() {
        const FIELD = {
            USER_ID: "user_id",
            USER_PW: "user_pw",
            USER_NM: "user_nm",
        }

        return {
            FIELD,

            /* form에 bind된 state */
            infoForm: {
                [FIELD.USER_ID]: null,
                [FIELD.USER_PW]: null,
                [FIELD.USER_NM]: null,
                
            },

            // rules: {
            //     [FIELD.USER_ID]: [
            //         {
            //             required: true,
            //             message: "아이디를 입력하세요.",
            //             trigger: "blur",
            //         },
            //         {
            //             validator: this.idValidator,
            //             trigger: "blur",
            //         },
            //     ],

            //     [FIELD.USER_PW]: [
            //         {
            //             required: true,
            //             min: 7,
            //             max: 20,
            //             message: "비밀번호는 7글자에서 20글자 사이로 입력하세요.",
            //             trigger: "blur",
            //         },
            //     ],
        }
    },

methods: {
    ...mapActions("auth", ["loginRequest", "loginStatusRequest"]),
    handleRegister(){
        const encryptedInfoForm ={
            ...this.infoForm,
            user_pw: generateHashedPassword(this.infoForm.user_pw),
        }
        try {authAPI.postRegister(encryptedInfoForm)
            .then(()=>{
                this.$router.replace("/landing")
            }) 
        }
        catch(err) {
            alert(err)
            }
        }
}
}
</script>

<style>
.help-label {
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;

  font-size: 14px;
  line-height: 25px;
  padding-left: 16px;


}
.form-wrap{
  width: 512px;
  border: 1px solid #ccc;
  padding: 64px 40px;
  border-radius: 4px;
  /* display: flex; */
  /* align-items: center; */
  justify-content: center;
}
</style>