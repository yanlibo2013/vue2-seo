<template>
  <div id="app">
  	<!-- 这里是为了去除chrome自动填写账号密码造成的屎黄色输入框bug -->
		<input type="text" style="display:none"/>
		<input type="password" style="display:none"/>
		
    <div class="header">
      <cyheader v-show="showHeader"></cyheader>
    </div>
    <transition name="slide" mode="out-in">
      <router-view class="view"></router-view>
    </transition>
  	<div class="footer">
      <cyfooter></cyfooter>
    </div>
  </div>    
</template>

<style scoped>
 	@import './assets/css/global.css';
</style>
<script>

  import cyheader from './components/headandfoot/CyHeader.vue'
  import cyfooter from './components/headandfoot/CyFooter.vue'
   
	export default {
		computed: {
			showHeader: function() {
				let showHeader = true;
				// 首页不显示头
				if(this.$route.path == "/index.html" || (this.$route.path == "/")) {
					showHeader = false;
				}

				// 产品预览页面不显示头
				if(!!this.$route.path.match (/\/preview\//)) {
					showHeader = false;
				}
				return showHeader;
			}
		},
		components: {
			cyfooter,
			cyheader
		}
	}
</script>

