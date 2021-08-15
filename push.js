var push = require('web-push')

let vapidKeys = {
    publicKey: 'BLgnb8oJVd4cYkYZRUfeFHCGI2WCLP1KDqZNF9eGmFwpuFbHskuM2CvBVBQF7m11lBHS7CW_F19f_hujCXSdzHk',
    privateKey: 'mb1GkR244-2umshfX7FlgxkxJM_e60wNUhGhJ04RRZM'
}

push.setVapidDetails('mailto:test@code.com', vapidKeys.publicKey, vapidKeys.privateKey)

let sub = { 
    endpoint: 
    "https://fcm.googleapis.com/fcm/send/f9J3G3Jcsu8:APA91bHsMdIERY0E51Hm_WrNUwRhoI26FPVzHWHXWaPcpZHqBqa5WEyoVeHchAsd6ap0xpisZBdiE1KGZb3VbwGbGxL0iyAenA6a6q1y5HXHQNow4Wo3kWSiBsIUmrW_5-dDyxYDgpa6",
    expirationTime: null,
    keys: { 
        p256dh: "BJzF01NsdsDH4QWF7NtwGJ2C8WRQXue1tn8fsfUEFjQPt_GYcSnhrhCNBi82iJOFtRWfzaxgOtshWJKb62NhG4g", 
        auth: "LaKgIMKno0bKVXWLF4JayQ" 
    } 
};

push.sendNotification(sub, 'test message')