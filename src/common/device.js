/*
 * @Author: henry yan
 * @Date:   2016-10-31 15:21:59
 * @Last Modified by:   henry yan
 * @Last Modified time: 2016-10-31 15:21:59
 */

import store from '../store/index'

/**
 * [judge 判断设备类型，返回对应组件]
 * @param  {[type]} pc     [pc端展示组件]
 * @param  {[type]} mobile [mobile展示组件]
 * @return {[type]}        [所需组件]
 */
function judge(pc,mobile){
    if(store.state.common.device == 'PC'){
        return pc;
    }else{
        return mobile;
    }
}

/**
 * [inPc 只在PC展示]
 * @param  {[type]} el [description]
 * @return {[type]}    [description]
 */
function inPc(el){
    if(store.state.common.device== 'PC'){
        return el;
    }
}

/**
 * [inMobile 只在手机展示]
 * @param  {[type]} el [description]
 * @return {[type]}    [description]
 */
function inMobile(el){
    if(store.state.common.device== 'MOBILE'){
        return el;
    }
}

export default {
    judge,
    inPc,
    inMobile
}
