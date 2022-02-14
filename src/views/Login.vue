<template>
  <div class="login-container">
    <div class="login-container">
      <div class="login-box">
        <div class="left"></div>
        <div class="right">
          <img
            class="login-top-left"
            src="../assets/login-left-top.png"
            alt=""
          />
          <img
            class="login-code-img"
            src="../assets/login-code-img.png"
            alt=""
          />
          <div class="login-bottom-bgImg"></div>
          <div class="login-panel">
            <p>账号登录</p>
            <el-form :model="ruleForm" :rules="rules">
              <el-form-item prop="accountNum"
                ><el-input
                  placeholder="账号、手机号
                "
                  v-model.number="ruleForm.accountNum"
                ></el-input>
              </el-form-item>
              <el-form-item prop="password"
                ><el-input
                  placeholder="请输入密码
                "
                  v-model.number="ruleForm.password"
                ></el-input>
              </el-form-item>
            </el-form>

            <a href="#">忘记密码</a>
            <div class="login">登录</div>
            <div class="login-bottom">
              <button>其他方式登录</button>
              <button @click="changePathToRegister">立即注册</button>
            </div>

            <!-- <el-input
              placeholder="账号、手机号"
              v-model="telephoneNum"
              maxlength="11"
              minlength="11"
            ></el-input>
            <el-input
              placeholder="请输入密码"
              v-model="password"
              show-password
            ></el-input>
            <a href="#">忘记密码</a>
            <div class="login">登录</div>
            <div class="login-bottom">
              <button>其他方式登录</button>
              <button @click="changePathToRegister">立即注册</button>
            </div> -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      ruleForm: {
        accountNum: '',
        password: ''
      },
      rules: {
        accountNum: [
          { required: true, message: '请输入账户名称', trigger: 'blur' },
          { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        ],
        password: [{ required: true, message: '请输入密码', trigger: 'change' }]
      }
    }
  },
  methods: {
    changePathToRegister() {
      this.$router.push('/home/register')
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
  .login-container {
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
        display: flex;
        align-items: center;
        justify-content: center;
        img {
          position: absolute;
        }
        .login-top-left {
          top: 0px;
          left: 0px;
        }
        .login-code-img {
          right: 15px;
          top: 15px;
          cursor: pointer;
        }
        .login-bottom-bgImg {
          position: absolute;
          width: 100%;
          height: 100px;
          bottom: 0;
          left: 0;
          background: url('../assets/login-bottom.png');
        }
        .login-panel {
          width: 380px;
          height: 450px;
          padding: 0 20px;
          p {
            width: 88px;
            height: 33px;
            margin: 30px auto;

            color: #1fa2f8;
            font-size: 22px;
            font-weight: 700;
          }
          .el-input {
            // width: 200px;
            // margin-left: 50px;
            height: 45px;
            margin-bottom: 15px;
          }
          a {
            display: block;
            color: #bbbbaa;
            font-size: 14px;
            margin-bottom: 15px;
            text-align: end;
            &:hover {
              color: @primary-color;
            }
          }
          .login {
            height: 43px;
            line-height: 43px;
            color: white;
            margin-bottom: 20px;
            font-size: 20px;
            font-weight: 600;
            text-align: center;
            letter-spacing: 5px;
            background-color: #1fa2fb;
            border-radius: 20px;
            cursor: pointer;
          }
          .login-bottom {
            z-index: 100000000000;
            display: flex;
            justify-content: space-between;
            font-size: 14px;

            button {
              background-color: transparent;
              border: none;
              cursor: pointer;

              &:first-child {
                color: #bbbbaa;
              }
              &:last-child {
                color: #1fa2fb;
              }
            }
          }
        }
      }
    }
  }
}
</style>
