/*
  接口注册与接口事件监听
 */
import * as services from './services'
import {global, debounce} from './rdap-utils'
import {message} from 'antd'

function hideLoading() {
    if (global.loading) {
        global.loading.hide()
    }
}
// 注册接口
services.registApi('index', require('./apis/index'))


// 请求前监听
services.on('willRequest', (option) => {
    if (option.loading && global.loading) {
        global.loading.show()
    }
})

// 请求后监听，不管失败或者成功
services.on('requested', (option) => {
    debounce(hideLoading, option)
})

// 请求失败
services.on('error', (e) => {
    if (e && e.success === false && e.body && e.body.message) {
        message.error(e.body.message)
    } else {
        console.error(e)
    }
})
