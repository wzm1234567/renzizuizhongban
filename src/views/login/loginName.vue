<template>
  <div class="boss">
    <header>
      <h1>iHRM 后台登录系统</h1>
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm" class="demo-ruleForm">
        <el-form-item prop="mobile">
          <el-input placeholder="请输入您手机号" v-model="ruleForm.mobile">
            <i slot="prefix" class="el-icon-user-solid"></i>
          </el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input placeholder="请输入您的密码" v-model="ruleForm.password" show-password>
            <i slot="prefix" class="el-icon-s-goods" style="margin-top: 5px"></i>
          </el-input>
        </el-form-item>
        <el-form-item>
          <el-button
            style="width: 100%; height: 60px; background-color: #0090ff; font-size: 20px"
            type="primary"
            @click="submitForm('ruleForm')"
            >登录</el-button
          >
        </el-form-item>
      </el-form>
    </header>
  </div>
</template>
<script>
import { loginapi } from "@/api/api"
import { settoken } from "@/utils/auth"
export default {
  data() {
    return {
      ruleForm: {
        mobile: "13800000002",
        password: "888itcast.CN764%..."
      },
      rules: {
        mobile: [{ required: true, message: "手机号不能为空", trigger: "blur" }],
        password: [{ required: true, message: "密码不能为空", trigger: "blur" }]
      }
    }
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          loginapi(this.ruleForm).then((res) => {
            console.log(res)
            if (res.data.code == 10000) {
              this.$router.push("/index")
              settoken(res.data.data)
            }
          })
        } else {
          console.log("error submit!!")
          return false
        }
      })
    },
    resetForm(formName) {
      this.$refs[formName].resetFields()
    }
  }
}
</script>
<style lang="scss" scoped>
.boss {
  width: 100vw;
  height: 100vh;
  // background-color: #009dff;
  background-image: url(https://ihrm.itheima.net/static/img/login.c75bab6d.jpg);
  display: flex;
  justify-content: center;

  text-align: center;
  header {
    width: 470px;
    margin-top: 115px;
    h1 {
      font-size: 40px;
      font-weight: 400;
      color: #fff;
      margin: 20px 0;
    }
  }
}
::v-deep .el-input__inner {
  height: 60px !important;
  background-color: #cde5ff;
}
::v-deep .el-input__prefix {
  padding-top: 8px;
}
::v-deep .el-form-item__error {
  color: #fff;
}
</style>
