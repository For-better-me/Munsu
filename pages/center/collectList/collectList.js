// pages/center/collectList/collectList.js
Page({

  data: {
    collectList:[]
  },

  onLoad: function (options) {
    let collect_list = wx.getStorageSync('collectList');
    if (collect_list) {
      this.setData({
        collectList:collect_list
      })
    }
    else{
      var collectList = [];
      wx.setStorageSync('collectList', collectList)
    }
    wx.setNavigationBarTitle({
      title: '收藏列表',
    })
  }, 
  toDetail: function (event) {
    let id = event.currentTarget.dataset.id;
    wx.navigateTo({
      url: '/pages/index/detail/detail?id=' + id
    })
  },
  onShow:function(){
    let collect_list = wx.getStorageSync('collectList');
    this.setData({
      collectList: collect_list
    })
  }
})