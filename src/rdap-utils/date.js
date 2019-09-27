export function isValidDate(date) {
    return date instanceof Date && !isNaN(date.getTime())
}

/**
 * 字符串转Date，如果失败返回当前日期
 * @param str
 * @returns {Date}
 */
export function string2Date(str) {
    const d = new Date(str)
    if (isValidDate(d)) return d

    str = str.replace(/-/ig, '/').replace('T', ' ')
    if (str.indexOf('.') > 0) {
        str = str.substring(0, str.indexOf('.'))
    }
    const d2 = new Date(str)
    if (isValidDate(d)) return d2

    return null
}

/**
 * 将字符串或Date实例格式化成日期字符串
 * @param d 日期字符串或Date对象
 * @param fmt 格式化类型，默认yyyy-MM-dd
 * @returns {string}
 */
export function formatDate(d, fmt = 'yyyy-MM-dd') {
    if (!d) return ''
    if (typeof d === 'string') d = string2Date(d)
    if (!d) return ''
    var o = {
        'M+': d.getMonth() + 1, // 月份
        'd+': d.getDate(), // 日
        'h+': d.getHours(), // 小时
        'm+': d.getMinutes(), // 分
        's+': d.getSeconds(), // 秒
        'q+': Math.floor((d.getMonth() + 3) / 3), // 季度
        'S': d.getMilliseconds() // 毫秒
    }
    if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (d.getFullYear() + '').substr(4 - RegExp.$1.length))
    for (var k in o) {
        if (new RegExp('(' + k + ')').test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? (o[k]) : (('00' + o[k]).substr(('' + o[k]).length)))
    }
    return fmt
}
