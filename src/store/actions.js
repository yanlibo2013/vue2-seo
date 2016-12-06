

import * as types from './mutation-types';
import ajax from 'src/common/ajax'

export const getDevicetype = ({ commit }) => {
  var userAgentInfo = navigator.userAgent;
  var Agents = new Array("Android", "iPhone", "SymbianOS", "Windows Phone", "iPad", "iPod");
  var flag = true;
  for (var i = 0; i < Agents.length; i++) {
    if (userAgentInfo.indexOf(Agents[i]) > 0) {
      flag = false;
      break;
    }
  }
  var dev = flag ? "PC" : "MOBILE";
  commit(types.GET_DEVICE_TYPE, {
    device: dev
  })
};


export const getList = ({ commit }) => {

  /*ajax({
    url: '/qm/api/banner/list',
    success: (result)=>{
      commit(types.GET_LIST,{result:result.list})
    }
  })*/

  ajax({
    url:'/ffcloud-evipManager/queryEpharVipCard',
    success: (result)=>{
      console.log(result);
    }
  })
};

/**
 * 更新全局加载提示状态方法(loading)
 * @param  {Function} options.dispatch store对象解构出来的函数，无需手动提供
 */
export const updateLoading = ({ commit},loading) => {
  commit(types.UPDATE_LOADING,loading)
}



