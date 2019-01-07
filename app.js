//app.js
App({
  onLaunch: function () {
    var that = this;
    /**
   * 初次加载判断网络情况
   * 无网络状态下根据实际情况进行调整
   */
    wx.getNetworkType({
      success(res) {
        const networkType = res.networkType
        if (networkType === 'none') {
          that.globalData.isConnected = false
          wx.showToast({
            title: '当前无网络',
            icon: 'loading',
            duration: 2000
          })
        }
      }
    });

    wx.onNetworkStatusChange(function (res) {
      if (!res.isConnected) {
        that.globalData.isConnected = false
        wx.showToast({
          title: '网络已断开',
          icon: 'loading',
          duration: 2000,
          complete: function () {
            that.goStartIndexPage()
          }
        })
      } else {
        that.globalData.isConnected = true
        wx.hideToast()
      }
    });

    wx.getSetting({
      success(res) {
        if (!res.authSetting['scope.userInfo']) {
          wx.authorize({
            scope: 'scope.userInfo',
            success(res) {
              console.log("用户授权成功");
              wx.getUserInfo({
                  success:function(res){
                    that.globalData.userInfo=res.userInfo;
                    wx.setStorageSync('userInfo', res.userInfo)
                  },
                  fail:function(res){
                    //
                  }
              })

            },
            fail:function(res){
              console.log("用户授权失败")
            }
          })
        }else{
          wx.getUserInfo({
            success: function (res) {
              that.globalData.userInfo = res.userInfo;
              wx.setStorageSync('userInfo', res.userInfo)
            },
            fail: function (res) {
              //
            }
          })
        }
      }
    })
  },
  goStartIndexPage: function () {
    setTimeout(function () {
      wx.redirectTo({
        url: "pages/index/index"
      })
    }, 1000)
  },
  globalData: {
    userInfo:null,
    version: "4.1.0",
    isConnected: true // 网络是否连接
  }
})
