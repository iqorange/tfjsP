<template>
  <div id="app">
    <div class="layui-container layui-form-pane">
      <form class="layui-form" action="">
        <div class="layui-form-item" :class="{'form-group--error':$v.name.$error}">
          <label class="layui-form-label">用户名</label>
          <div class="layui-input-block">
            <input type="text" name="title" v-model="name" required  lay-verify="required" placeholder="请输入用户名" autocomplete="off" class="layui-input">
          </div>
        </div>
        <div class="layui-form-item">
          <label class="layui-form-label">密码</label>
          <div class="layui-input-block">
            <input type="password" name="title" v-model="password" required  lay-verify="required" placeholder="请输入密码" autocomplete="off" class="layui-input">
          </div>
        </div>
        <div class="layui-form-item">
          <label class="layui-form-label">验证码</label>
          <div class="layui-input-inline">
            <input type="text" name="title" v-model="code" required  lay-verify="required" placeholder="请输入验证码" autocomplete="off" class="layui-input">
          </div>
          <div class="layui-form-mid svg" @click="getCaptcha()" v-html="svg"></div>
        </div>
        <button type="button" class="layui-btn" @click="checkForm">点击登录</button>
        <a class="m-link" href="http://www.layui.com" >忘记密码</a>
      </form>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import {required, email} from 'vuelidate/lib/validators/'
export default {
  name: 'app',
  data () {
    return {
      svg: '',
      name: '',
      password: '',
      code: '',
      errorMsg: []
    }
  },
  validations: {
    name: {
      required,
      email
    },
    password: {
      required
    },
    code: {
      required
    }
  },
  mounted () {
    this.getCaptcha()
  },
  methods: {
    getCaptcha () {
      axios.get('http://localhost:3000/getcaptcha').then((res) => {
        if (res.status === 200) {
          const obj = res.data
          if (obj.code === 200) {
            this.svg = obj.data
          }
        }
      })
    },
    checkForm () {
      this.errorMsg = []
      if (!this.name) {
        this.errorMsg.push("登录名为空～")
      }
      if (!this.password) {
        this.errorMsg.push("密码名为空～")
      }
      if (!this.code) {
        this.errorMsg.push("验证码为空～")
      }
    }
  }
}
</script>

<style lang="scss" scoped>
#app{
  background-color: #fff;
}

.layui-container{
  box-shadow: 0px 0px 45px #dcdcdc;
  margin: 32px auto;
  padding: 32px;
  border-radius: 6px;
  overflow: hidden;
}

input{
  width: 190px;
}

.m-link{
  margin-left: 16px;
  &:hover{
    color: #009688;
  }
}

.svg{
  position: relative;
  top: -15px;
}
</style>
