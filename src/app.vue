/*
* @Author: henry yan
* @Date:   2016-10-19 16:47:00
* @Last Modified by:   henry yan
* @Last Modified time: 2016-10-19 16:47:00
* @describe
* 根组件，主要用于引入全局的css和js
*/
<template>
  <div>
    <transition name="fade" mode="out-in">
      <router-view></router-view>
    </transition>
    <cloading v-show='getLoading'></cloading>
  </div>
</template>

<script>
 /* import '../static/style/reset.css'*/
  /*import store from 'src/store/index';*/
  import {mapGetters, mapActions } from 'vuex';
  import attachFastclick from 'fastclick';
  import cloading from 'components/common/index'

  export default {
    components: {
      cloading
    },
    created () {
      this.$store.dispatch('getDevicetype');
      this.updateLoading(false);
    },
    mounted () {
      attachFastclick.attach(window.document.body);
    },
    computed: mapGetters([
      'getLoading'
    ]),
    methods: mapActions([
      'updateLoading'
    ]),
    /*store*/
  }

</script>
<style>
  @import './assets/style/reset.scss';
  .fade-enter-active, .fade-leave-active {
    transition: all .5s ease;
  }
  .fade-enter {
    opacity: 0;
    transform:translate(20px, 0);
  }
  .fade-leave-active {
    opacity: 0;
    transform:translate(20px, 0);
  }
</style>


