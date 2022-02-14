<template>
  <div class="login-container">
    <div class="login-main-container">
      <div class="login-box">
        <div class="left"></div>
        <div class="right">
          <img
            class="login-top-left"
            src="../assets/login-left-top.png"
            alt=""
          />
          <div class="to-login-box" @click="changePathToLogin">去登录</div>

          <img class="login-bottom" src="../assets/login-bottom.png" alt="" />
          <div class="login-panel">
            <p>注册账号</p>
            <el-form
              :model="ruleForm"
              :rules="rules"
              status-icon
              ref="ruleForm"
              label-width="100px"
              class="demo-ruleForm"
            >
              <el-form-item label="手机号" prop="phoneNum">
                <el-input
                  v-model="ruleForm.phoneNum"
                  placeholder="请输入手机号"
                ></el-input>
              </el-form-item>
              <el-form-item label="短信验证码" prop="messageValidateCode">
                <el-input
                  placeholder="请输入验证码"
                  v-model="ruleForm.messageValidateCode"
                ></el-input>
                <button class="get-check-code">获取验证码</button>
              </el-form-item>
              <el-form-item label="密码" prop="pass">
                <el-input
                  type="password"
                  placeholder="请输入密码"
                  v-model="ruleForm.pass"
                ></el-input>
              </el-form-item>
              <el-form-item label="确认密码" prop="checkPass">
                <el-input
                  type="password"
                  placeholder="请确认密码"
                  v-model="ruleForm.checkPass"
                ></el-input>
              </el-form-item>
            </el-form>

            <div class="login">注册</div>
          </div>
        </div>
      </div>
    </div>
    <p class="login-bottom">常见问题&nbsp;|&nbsp;隐私政策</p>
    <p class="login-bottom">
      Copyright2021 西尔环境教育（CEI）版权所有
      主办单位：北京西尔云教育科技有限公司 承办单位：
      辽宁省两山科技有限公司提供技术开发和技术维护 京ICP备19011394号
      出版物经营许可证：新出发京零字第海180213号
    </p>
  </div>
</template>

<script>
export default {
  data() {
    var validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'))
      } else {
        if (this.ruleForm.checkPass !== '') {
          this.$refs.ruleForm.validateField('checkPass')
        }
        callback()
      }
    }
    var validatePass2 = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请再次输入密码'))
      } else if (value !== this.ruleForm.pass) {
        callback(new Error('两次输入密码不一致!'))
      } else {
        callback()
      }
    }
    return {
      ruleForm: {
        phoneNum: '',
        messageValidateCode: '',
        pass: '',
        checkPass: ''
      },
      rules: {
        phoneNum: [
          { required: true, message: '请输入手机号', trigger: 'blur' }
        ],
        messageValidateCode: [
          { required: true, message: '请输入验证码', trigger: 'change' }
        ],
        pass: [{ validator: validatePass, trigger: 'blur' }],
        checkPass: [{ validator: validatePass2, trigger: 'blur' }]
      }
    }
  },
  methods: {
    changePathToRegister() {
      this.$router.push('/home/register')
    },
    changePathToLogin() {
      this.$router.push('/home/login')
    }
  }
}
</script>

<style lang="less" scoped>
@primary-color: #4aa1f0;
a {
  text-decoration: none;
}
.login-container {
  padding-bottom: 25px;
  .login-main-container {
    height: 730px;
    background: url('../assets/login-bg.png');
    background-size: 100% 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    .login-box {
      width: 914px;
      height: 500px;
      border-radius: 20px;
      background-color: white;
      display: flex;
      overflow: hidden;
      .left {
        width: 390px;
        height: 100%;
        padding: 27px 23px;
        background: url('../assets/login-box-bg.png');
        background-size: 100% 100%;
      }
      .right {
        flex-grow: 1;
        position: relative;
        // display: flex;
        // align-items: center;
        // justify-content: center;
        img {
          position: absolute;
        }
        .login-left-top {
          top: 0px;
          left: 0px;
        }
        .login-bottom {
          bottom: 0;
          left: 0;
        }
        .to-login-box {
          position: absolute;
          width: 60px;
          height: 50px;
          top: 15px;
          right: 20px;
          color: #4aa1f0;
          cursor: pointer;

          &:hover {
            color: hsl(203, 100%, 67%);
          }
        }

        .login-panel {
          padding-left: 10px;
          // width: 380px;
          height: 450px;
          p {
            width: 88px;
            height: 33px;
            margin: 30px auto;

            color: #1fa2f8;
            font-size: 22px;
            font-weight: 700;
          }
          .el-input {
            margin-left: 25px;
            width: 250px;
            height: 30px;
          }
          .get-check-code {
            height: 38px;
            width: 102px;
            padding: 0 15px;
            border-radius: 5px;
            border: none;
            background-color: #1fa2f8;
            color: white;
            margin-left: 15px;
            margin-top: 1px;
            &:hover {
              cursor: pointer;
              background-color: hsl(203, 100%, 67%);
            }
          }
          .register-row {
            display: flex;
            height: 50px;
            margin-bottom: 10px;
            span {
              width: 130px;
              height: 35px;
              padding: 0 8px;
              text-align: end;
              line-height: 40px;
            }
            .el-input {
              margin-left: 8px;
              width: 240px;
              height: 30px;
            }
            .get-check-code {
              height: 38px;
              width: 102px;
              padding: 0 15px;
              border-radius: 5px;
              border: none;
              background-color: #1fa2f8;
              color: white;
              margin-left: 15px;
              margin-top: 1px;
              &:hover {
                cursor: pointer;
                background-color: hsl(203, 100%, 67%);
              }
            }
          }

          a {
            display: block;
            color: #bbbbaa;
            font-size: 14px;
            margin-bottom: 15px;
            text-align: end;
            &:hover {
              cursor: pointer;
              color: hsl(203, 100%, 67%);
            }
          }
          .login {
            height: 33px;
            width: 240px;
            line-height: 33px;
            color: white;
            margin-bottom: 20px;
            margin-left: 130px;
            margin-top: 12px;
            font-size: 20px;
            font-weight: 400;
            text-align: center;
            letter-spacing: 5px;
            background-color: #1fa2fb;
            border-radius: 20px;
            cursor: pointer;
            &:hover {
              cursor: pointer;
              background-color: hsl(203, 100%, 67%);
            }
          }
        }
      }
    }
  }
  .login-bottom {
    text-align: center;
    color: black;
    font-size: 15px;
    margin-top: 20px;
  }
}
</style>
