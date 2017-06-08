// pages/center/center.js
var app = getApp();
Page({

  data: {
    userInfo:{}
  },

  
  onLoad: function (options) {
      wx.setNavigationBarTitle({
        title: '个人中心',
      })
      console.log(app.globalData.userInfo);
      this.setData({
        userInfo: app.globalData.userInfo
      });
  },
  toCollect:function(){
    wx.navigateTo({
      url: 'collectList/collectList',
    })
  },
  toApply:function(){
    wx.navigateTo({
      url: 'apply/apply',
    })
  }
})