/*
* @Author: henry yan
* @Date:   2016-10-19 16:47:00
* @Last Modified by:   henry yan
* @Last Modified time: 2016-10-19 16:47:00
*/
<template>
  <div v-if="device=='MOBILE'"><mobile></mobile></div>
  <div v-else><pc></pc></div>
</template>
<style>
</style>

<script>
  import {mapGetters, mapActions } from 'vuex';
  import pc from './pc/index'
  import mobile from './mobile/index_mobile'
  export default {
    components: {mobile,pc},
    mounted () {
      //console.log(this.$store.state.common.device);

    },
    computed: mapGetters({
      device: 'getDeviceStatus'
    }),
    created () {
      this.$store.dispatch('getList')
    }


  }
</script>


