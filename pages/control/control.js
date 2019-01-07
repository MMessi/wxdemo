Page({

  /**
   * 页面的初始数据
   */
  data: {
    isEmpty: false,
    indicatorDots: true,
    autoplay: true,
    interval: 3000,
    duration: 1000,
    swiperCurrent:0,
    banners:[
      {id : 1, picUrl : "/images/kedacom/image172.png"},
      { id: 2, picUrl: "/images/kedacom/image174.png" },
      { id: 3, picUrl: "/images/kedacom/image216.png" },
      { id: 4, picUrl: "/images/kedacom/image230.png" },

    ],
    meetList:[
      { meetId: 1, meetName: "网呈会议1", meetType: 1, meetState: 1, time : "2018 1-1 12:00", epList: [
        { epId: 1, epName: "lol会议室1" }, { epId: 2, epName: "lol会议室1a" }
      ]},
      {
        meetId: 2, meetName: "网呈会议2", meetType: 2, meetState: 0, time: "2018 1-1 12:00", epList: [
          { epId: 1, epName: "lol会议室2" }, { epId: 2, epName: "lol会议室1a" }
      ]},
      {
        meetId: 3, meetName: "网呈会议3", meetType: 1, meetState: 1, time: "2018 1-1 12:00", epList: [
          { epId: 1, epName: "lol会议室1" }, { epId: 2, epName: "lol会议室1a" }
        ]
      },
      {
        meetId: 4, meetName: "网呈会议4", meetType: 1, meetState: 1, time: "2018 1-1 12:00", epList: [
          { epId: 1, epName: "lol会议室1" }
        ]
      },
      {
        meetId: 5, meetName: "网呈会议5", meetType: 1, meetState: 1, time: "2018 1-1 12:00", epList: [
          { epId: 1, epName: "lol会议室1" }
        ]
      }
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
    if (this.data.meetList.length == 0){
        this.setData({
          isEmpty : true
        })
    }else{
      this.setData({
        isEmpty: false
      })
    }
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
  meetEnd : function(e){
    var that = this;
    var meetList=[];
    if(!e.currentTarget.dataset.id){
      wx.showModal({
        title: '提示',
        content: '会议信息不全',
        success(res) {
          if (res.confirm) {
            console.log('用户点击确定')
          } else if (res.cancel) {
            console.log('用户点击取消')
          }
        }
      })
    }else{
      let id = e.currentTarget.dataset.id;
      for (var index = 0; index < that.data.meetList.length; index ++){
        if (id == that.data.meetList[index].meetId){
           that.data.meetList.splice(index,1);
           that.setData({
             meetList: that.data.meetList,
             isEmpty: that.data.meetList.length == 0 ? true : false
          })
          return ;
        }
      }
    }
  },
  meetCtrl : function(e){
    let id = e.currentTarget.dataset.id;
    wx.navigateTo({
      url: '/pages/meetCtrl/meetCtrl',
    })
  },
})