const basePath = 'http://www.hducc.top/ljj'
const wsIp = 'ws://192.168.2.120:9998'
const AjaxUrl = {
    upload: basePath + '/user/getQRCode',
    cloud: basePath + '/topic/list'
}

export { base64, basePath, wsIp, AjaxUrl }