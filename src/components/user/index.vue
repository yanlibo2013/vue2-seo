/*
* @Author: henry yan
* @Date:   2016-10-19 16:47:00
* @Last Modified by:   henry yan
* @Last Modified time: 2016-10-19 16:47:00
*/
<template>
   <div class="div-app">
      <h1>user!!!</h1>
     <cloading v-show='getLoading'></cloading>

     <div id="userDiv"></div>
   </div>
</template>
<style>
  .div-user{
      background-color: #36996e;
  }
</style>
<script>
  import {mapGetters, mapActions } from 'vuex';
  import cloading from 'components/common/index';
  import {setTitle} from 'src/plugins/util';

  export default {
    components: {
      cloading
    },
    created () {
      this.updateLoading(false);
    },
    mounted(){
      setTitle("fsfs");
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
