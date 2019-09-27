/**
 * 去除前后空格
 * @param str 字符串
 * @returns {string}
 */
export function trim(str) {
    if (typeof str === 'string') {
        return str.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '')
    } else {
        return str
    }
}

/**
 * 生成uuid
 * @param format xxxxyyyxxxyyyyxyxyxyx
 * @returns {string}
 */
export function uuid(format) {
    const str1 = format || (new Array(32)).join('x')
    return str1.replace(/[xy]/g, function (c) {
        let r = Math.random() * 16 | 0
        let v = (c === 'x' ? r : (r & 0x3 | 0x8))
        let isu = Math.random() > 0.5
        if (isu) {
            return v.toString(16).toUpperCase()
        } else {
            return v.toString(16)
        }
    })
}

//限制小数点
export function validityOnlyNumber(input, length){
    var loop = true;
    var reg = eval("/^(\\-|\\+)?\\d*\\.?\\d{0," + length + "}$/");
    while (loop && input.length > 0) {
        if (reg.test(input)) {
            loop = false;
        } else {
            input = input.substring(0, input.length - 1);
        }
    }
    return input;
}

