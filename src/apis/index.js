import * as services from '../services'
import { json2param, param2json } from '../rdap-utils'
// 设置是否debug模式，debug模式时，会使用mock数据
services.setDebug(false)

export const FindTmplTable = {
    url: `/config/template/find`,
    method: 'POST',
    loading: true,
    debug: false
}

