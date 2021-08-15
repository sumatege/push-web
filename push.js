var push = require("web-push");

let vapidKeys = {
  publicKey:
    "BLgnb8oJVd4cYkYZRUfeFHCGI2WCLP1KDqZNF9eGmFwpuFbHskuM2CvBVBQF7m11lBHS7CW_F19f_hujCXSdzHk",
  privateKey: "mb1GkR244-2umshfX7FlgxkxJM_e60wNUhGhJ04RRZM",
};

push.setVapidDetails(
  "mailto:test@code.com",
  vapidKeys.publicKey,
  vapidKeys.privateKey
);

let sub = {
  endpoint:
    "https://wns2-sg2p.notify.windows.com/w/?token=BQYAAAAkJnwXFlSS7N9SOadRvH2vucvwDNTLmUpdpW9UpFoZj5xF6qhaafFEHXpOiFuhHMxT8fO5oFSJAuTCDyNJ%2b1gpRm6uU4MoyfofM9SSMnNOEa2XtZceSsVxanjkv4hfACg%2bTid7Uf%2frrqp8Rnsku%2fXH2sUx9oaxM97%2fdFMSytaXGr5kkLYLrw6p3atjeVxFxsMDuYycgQAZSSm%2bV4yl4hhQSsSIpo6orp92MspIAFwSOXylz%2bZZ7fJDCcHMbrGLCvo7DCg6OKQSryvVSCMIPZDgPIcRncGemLVl%2b88fmOrJcA%2fPnelj8u3RWe6G8Dy%2fpZ9b7ogbJqh202cu23fSKCN8",
  expirationTime: null,
  keys: {
    p256dh:
      "BAv67-LfSiX1tBP1C5J1w1wLHTTcjcSVQ3kcgJ7PSb44BQvLYDk_6vrdl2M9PNPTpUELsGvMU1MYlXyW4eiGlps",
    auth: "YzTUbnlD4u7e64MMqDtmVg",
  },
};

push.sendNotification(sub, "test message");
