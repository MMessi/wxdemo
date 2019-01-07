//login.js
//获取应用实例
var app = getApp();
Page({
  data: {
    remind: '加载中',
    angle: 0,
    userInfo: {}
  },
  goToMain: function () {
    if (app.globalData.isConnected) {
      wx.switchTab({
        url: '/pages/main/main',
      });
    } else {
      wx.showToast({
        title: '当前无网络',
        icon: 'none',
      })
    }
  },
  onLoad: function () {
    var that = this
    wx.setNavigationBarTitle({
      title: "keda会议控制平台"
    })
  },
  onShow: function () {
    let that = this
    let userInfo = wx.getStorageSync('userInfo')
    if (!userInfo) {
      wx.showToast({
        title:"当前用户没有获取权限",
        icon:	 "success",
			  duration : 2000
      }) 
    } else {
      that.setData({
        userInfo: userInfo
      })
    }
  },
  onReady: function () {
    var that = this;
    setTimeout(function () {
      that.setData({
        remind: ''
      });
    }, 1000);
    wx.onAccelerometerChange(function (res) {
      var angle = -(res.x * 30).toFixed(1);
      if (angle > 14) { angle = 14; }
      else if (angle < -14) { angle = -14; }
      if (that.data.angle !== angle) {
        that.setData({
          angle: angle
        });
      }
    });
  }
});