const basePath = 'http://www.hducc.top/ljj'
const wsIp = 'ws://127.0.0.1'
const AjaxUrl = {
    upload: basePath + '/user/getQRCode',
    cloud: basePath + '/topic/list'
}

export { base64, basePath, wsIp, AjaxUrl }