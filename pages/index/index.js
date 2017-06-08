var news=require('../../data/news-data.js');
var app = getApp()
Page({
  data: {
    newsList:[],
    caseList:[]
  },
  onLoad: function () {
   let newsList = news.newList.slice(0,3);
   let caseList = news.caseList.slice(0, 3);
   this.setData({
     newsList:newsList,
     caseList:caseList
   });
   app.getUserInfo(function(){
     
   })

  },
  toDetail:function(event){
    let id = event.currentTarget.dataset.id;
    wx.navigateTo({
      url: 'detail/detail?id='+id
    })
  },
  toDetail2: function (event) {
    let id = event.currentTarget.dataset.id;
    wx.navigateTo({
      url: 'detailnews/news?id=' + id
    })
  },
  toList:function(event){
    let title = event.currentTarget.dataset.tit;
    let sort = event.currentTarget.dataset.sort;
    wx.navigateTo({
      url: 'newsList/newsList?tit='+title +'&&sort='+sort,
    })
  }
})
