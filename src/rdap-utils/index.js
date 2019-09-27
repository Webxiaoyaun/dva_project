export {parseExcel, exportExcel} from './excel'

export {string2Date, formatDate} from './date'

export {base64ToBlob} from './byte'

export {trim, uuid} from './string'
export {random, randomArr} from './array'

export {
    request, json2param,
    param2json, getUrlParam,
    renderTemplate, promiseAll
} from './request'

export const global = {}

export function debounce(fn, ...args) {
    clearTimeout(fn.timer)
    fn.timer = setTimeout(() => {
        fn.apply(null, args)
    }, 500)
}
