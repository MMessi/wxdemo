// pages/main/main.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    addrlist:[
      { id: "1",  name: "中国苏州科达上海会议室01",  type: 0,  online:0, isChecked: false},
      { id: "2", name: "中国苏州科达上海会议室02", type: 1, online: 0, isChecked: false},
      { id: "3", name: "中国苏州科达上海会议室03", type: 2, online: 0, isChecked: false},
      { id: "4", name: "中国苏州科达上海会议室04", type: 0, online: 0, isChecked: false},
      { id: "5", name: "中国苏州科达上海会议室05", type: 1, online: 1, isChecked: false},
      { id: "6", name: "中国苏州科达上海会议室06", type: 0, online: 0, isChecked: false},
      { id: "7", name: "中国苏州科达上海会议室07", type: 2, online: 1, isChecked: false},
      { id: "8", name: "中国苏州科达上海会议室08", type: 1, online: 0, isChecked: false},
      { id: "9", name: "中国苏州科达上海会议室11", type: 0, online: 1, isChecked: false},
      { id: "10", name: "中国苏州科达上海会议室12", type: 0, online: 1, isChecked: false},
      { id: "11", name: "中国苏州科达上海会议室13", type: 0, online: 0, isChecked: false},
      { id: "12", name: "中国苏州科达上海会议室14", type: 0, online: 1, isChecked: false},
      { id: "13", name: "中国苏州科达上海会议室15", type: 0, online: 0, isChecked: false},
      { id: "14", name: "中国苏州科达上海会议室16", type: 0, online: 1, isChecked: false}]
     }, /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function (res) {
    console.log(123);
    return {
      title: "keda会议控制平台",
      path: '/pages/main/main',
      success: function (res) {
        console.log(res);
        // 转发成功
      },
      fail: function (res) {
        console.log(res);
        // 转发失败
      }
    }
  },
  getAddrInfo:function(e){
    console.log(e);
  },
  addrEdit:function(e){
    var id = e.currentTarget.dataset.id;
    if(!id){
      return;
    }else{
      var addrinfo = JSON.stringify(this.getInfoById(id));
      wx.navigateTo({
        url: '/pages/editAddinfo/editAddinfo?addrStr =' + addrinfo
      })
    }
  },
  getInfoById:function(id){
    var that = this;
    for(var index = 0; index < that.data.addrlist.length; index++){
      var addInfo = that.data.addrlist[index];
      if(addInfo.id == id){
        return addInfo;
      }
    }
    return null;
  }
})