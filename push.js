var push = require('web-push')

let vapidKeys = {
    publicKey: 'BLgnb8oJVd4cYkYZRUfeFHCGI2WCLP1KDqZNF9eGmFwpuFbHskuM2CvBVBQF7m11lBHS7CW_F19f_hujCXSdzHk',
    privateKey: 'mb1GkR244-2umshfX7FlgxkxJM_e60wNUhGhJ04RRZM'
}

push.setVapidDetails('mailto:test@code.com', vapidKeys.publicKey, vapidKeys.privateKey)

let sub = {};

push.sendNotification(sub, 'test message')