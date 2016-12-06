/*
 * @Author: henry yan
 * @Date:   2016-10-21 10:20:39
 * @Desc: ajax 统一封装
 * @Last Modified by:   henry yan
 * @Last Modified time: 2016-10-21 10:20:39
 */

import reqwest from 'reqwest'

export default function(opt){
    let call_succ = opt.success;
    opt.method = opt.type || 'post';
    //opt.type = opt.dataType || 'json';
    opt = {
        cache: 'false',
        ...opt
    };
    opt.success = (result)=> {
        if(this && this.isMounted) {
            if(this.isMounted()) {
                call_succ && call_succ.call(this, result);
            }
        } else {
            call_succ && call_succ.call(this, result);
        }
    };
    reqwest(opt);
}

