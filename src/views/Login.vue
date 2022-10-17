<template>
   <img src="@/assets/imgs/logo2.png" class="mLogin">
  <img src="@/assets/imgs/appBgc.jpg" class="loginBgc">
  <div class="backLeft" @click="$router.push('/')">
    <svg class="icon" aria-hidden="true">
      <use xlink:href="#icon-zhixiangzuo-copy"></use>
    </svg>
  </div>
  <div class="loginPage">
    <svg class="userName_icon" aria-hidden="true">
      <use xlink:href="#icon-userName"></use>
    </svg>
    <svg class="passWord_icon" aria-hidden="true">
      <use xlink:href="#icon-login-copy"></use>
    </svg>
    <input type="text" class="username" v-model="user.phone" placeholder="Username">
    <input type="password" class="password" v-model="user.password" placeholder="Password">
    <!-- 自动登录 忘记密码  验证码登录 -->
    <div class="doSomethingEsle">
      <div class="autoLogin">
        <input type="checkbox">
        <span>自动登录</span>
      </div>
      <div class="forgetPassword">
        <span>忘记密码</span>
          &nbsp;<i>|</i>&nbsp;
        <span>验证码登录</span>
      </div>
    </div>
    <button class="loginBtn" @click="login">登录</button>
    <div class="register">注册</div>
  </div>
</template>

<script>
import { setItem } from '@/utils/storage'

export default {
  name: 'loginIndex',
  data () {
    return {
      user: {
        phone: '',
        password: ''
      }
    }
  },
  methods: {
    async login () {
      const { phone, password } = this.user
      if (!phone || !password) {
        this.$toast('手机号或密码内容不准为空')
        return
      }
      const phoneValidate = /^(13[0-9]|14[01456879]|15[0-35-9]|16[2567]|17[0-8]|18[0-9]|19[0-35-9])\d{8}$/
      if (!phoneValidate.test(phone)) {
        // 手机号格式不对
        this.$toast('您输入的手机号码不正确')
        return
      }
      // 校验用户名 密码(前端)
      // 派发action请求登录
      try {
        this.$toast.loading({
          message: '加载中...',
          forbidClick: true,
          loadingType: 'spinner'
        })
        const res = await this.$store.dispatch('login', this.user)
        if (res.code === 200) {
          this.$toast.success('登录成功')
          // 跳转页面到个人中心
          this.$router.push('/myInfo')
          // 登录成功 拿到数据 将token保存到本地
          setItem('_USER_TOKEN', res.token)
        } else if (res.code === 502) {
          this.$toast.fail('账户或密码错误')
          return
        }
      } catch (error) {
        this.$toast.fail('登录失败!')
      }
    }
  }
}
</script>

<style lang="less" scoped>
.backLeft{
  position: absolute;
  padding: .2rem;
}
.mLogin{
  position: absolute;
  left: .4rem;
  top:1rem;
  width: 6.6rem;
  height: 4rem;
}
  .loginBgc{
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
  }
  .doSomethingEsle{
    display: flex;
    margin-top: .2rem;
    align-items: center;
    color: #fff;
    justify-content: space-between;
  }
  .loginPage{
    position: relative;
    height: 6rem;
    width: 80%;
    text-align: center;
    margin: 0 auto;
    margin-top: 5rem;
    .userName_icon,
    .passWord_icon{
      position: absolute;
  }
  input::-webkit-input-placeholder {
    color: rgb(245, 245, 245);
  }
    .userName_icon{
      width: .5rem;
      height: .5rem;
      top: .4rem;
    }
    .passWord_icon{
      width: .5rem;
      height: .5rem;
      top: 1.95rem;
    }
    .username,
    .password{
      background-color: transparent;
      border: none;
      height: .5rem;
      padding-left: .8rem;
      color: #fff;
      width: 100%;
      border-bottom: 1px solid #fff;
    }
    .username {
      margin-top: .5rem;
    }
    .password{
      margin-top: 1rem;
    }
    .loginBtn{
      width: 5rem;
      height: .8rem;
      margin-top: .8rem;
      line-height: .8rem;
      border-radius: .2rem;
      background-color: #f0f;
      color: #fff;
      border: none;
    }
    .register{
      margin-top: .1rem;
      color: #fff;
      text-decoration: underline;
    }
  }

</style>
