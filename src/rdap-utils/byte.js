/**
 * base64字符串转Blob
 * @param base64Data
 * @returns {Blob}
 */
export function base64ToBlob(base64Data) {
    let format = 'image/jpeg'
    let base64 = base64Data
    let code = window.atob(base64.split(',')[1])
    let aBuffer = new window.ArrayBuffer(code.length)
    let uBuffer = new window.Uint8Array(aBuffer)
    for (var i = 0; i < code.length; i++) {
        uBuffer[i] = code.charCodeAt(i) & 0xff
    }

    let blob = null
    try {
        blob = new window.Blob([uBuffer], {type: format})
    } catch (e) {
        window.BlobBuilder = window.BlobBuilder ||
            window.WebKitBlobBuilder ||
            window.MozBlobBuilder ||
            window.MSBlobBuilder
        if (e.name === 'TypeError' && window.BlobBuilder) {
            let bb = new window.BlobBuilder()
            bb.append(uBuffer.buffer)
            blob = bb.getBlob('image/jpeg')
        } else if (e.name === 'InvalidStateError') {
            blob = new window.Blob([aBuffer], {type: format})
        } else {
        }
    }
    return blob
}
