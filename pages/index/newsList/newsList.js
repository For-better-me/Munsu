// pages/index/newsList/newsList.js
var news = require('../../../data/news-data.js');
Page({

  data: {
    List:[],
    title:''
  },

  onLoad: function (options) {
    let title = options.tit;
    let sort = options.sort;
     let _list = news[sort];
     this.setData({
       List:_list,
       title:title
     })
  },
  onShow:function(){
    let self = this;
    wx.setNavigationBarTitle({
      title: self.data.title
    })
  },
  toDetail:function(event){
    let id = event.currentTarget.dataset.id;
    if(this.data.title == '纹绣那些事'){
      wx.navigateTo({
        url: '../detail/detail?id=' + id
      })
    }
    else{
      wx.navigateTo({
        url: '../detailnews/news?id=' + id
      })
    }
    
  }
})