// pages/meetCtrl/meetCtrl.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    epList: [
      { id: "1", name: "中国苏州科达上海会议室01", type: 0, online: 0, isChecked: false },
      { id: "2", name: "中国苏州科达上海会议室02", type: 1, online: 0, isChecked: false },
      { id: "3", name: "中国苏州科达上海会议室03", type: 2, online: 0, isChecked: false },
      { id: "4", name: "中国苏州科达上海会议室04", type: 0, online: 0, isChecked: false },
      { id: "5", name: "中国苏州科达上海会议室05", type: 1, online: 1, isChecked: false },
      { id: "6", name: "中国苏州科达上海会议室06", type: 0, online: 0, isChecked: false },
      { id: "7", name: "中国苏州科达上海会议室07", type: 2, online: 1, isChecked: false },
      { id: "8", name: "中国苏州科达上海会议室08", type: 1, online: 0, isChecked: false },
      { id: "9", name: "中国苏州科达上海会议室11", type: 0, online: 1, isChecked: false },
      { id: "10", name: "中国苏州科达上海会议室12", type: 0, online: 1, isChecked: false },
      { id: "11", name: "中国苏州科达上海会议室13", type: 0, online: 0, isChecked: false },
      { id: "12", name: "中国苏州科达上海会议室14", type: 0, online: 1, isChecked: false },
      { id: "13", name: "中国苏州科达上海会议室15", type: 0, online: 0, isChecked: false },
      { id: "14", name: "中国苏州科达上海会议室16", type: 0, online: 1, isChecked: false }],

    activeMeetCtrlId : 0,
    meetCtrlIcon:[
      { index: 0, id: "quit", name: "静音", picUrl: "/images/kedacom/meetctrl/icon_unquiet_normal.png"},
      { index: 1, id: "mute", name: "哑音", picUrl: "/images/kedacom/meetctrl/icon_mute_normal.png" },
      { index: 2, id: "sel", name: "选看", picUrl: "/images/kedacom/meetctrl/icon_selview_normal.png" },
      { index: 3, id: "dual", name: "双流", picUrl: "/images/kedacom/meetctrl/icon_dual_normal.png" },
      { index: 4, id: "speak", name: "发言人", picUrl: "/images/kedacom/meetctrl/icon_speaker_normal.png" },
      { index: 5, id: "camera", name: "远遥", picUrl: "/images/kedacom/meetctrl/icon_camera_normal.png" },
      { index: 6, id: "call", name: "呼叫", picUrl: "/images/kedacom/meetctrl/icon_call_normal.png" },
      { index: 7, id: "hangup", name: "挂断", picUrl: "/images/kedacom/meetctrl/icon_hangoff_normal.png" }
    ]
  }, 

  /**
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
    wx.setNavigationBarTitle({
      title: '天下第一武道会',
    })
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
  onShareAppMessage: function () {

  },
  tabClick: function (e) {
    this.setData({
      activeMeetCtrlId: e.currentTarget.id,
    });
    console.log(e)
  },
})