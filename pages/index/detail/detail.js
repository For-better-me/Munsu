var news=require('../../../data/news-data.js');
Page({
  data: {
    detail:{},
    collect:false
  },

  onLoad: function (options) {
    //获取文章序列号
    let id = options.id;
    console.log(options);
     this.setData({
       detail:news.newList[id],
       id:id
     })
     //判断内存是否有收藏列表
     var collect_list = wx.getStorageSync('collectList');
     if (collect_list) {
       this.setData({
         collectList: collect_list
       })
     }
     else {
       var collectList = [];
       wx.setStorageSync('collectList', collectList)
     }
      //判断内存是否有收藏标识
     var newCollects = wx.getStorageSync('newCollects');
     if (newCollects) {
       var newcollect = newCollects[id];
       this.setData({
         collect:newcollect
       });
     }
     else{
       var newCollects={};
       newCollects[id] = false;
       wx.setStorageSync('newCollects', newCollects);
     }
  },
  //收藏点击事件
  collectTap:function(){
    let newCollects = wx.getStorageSync('newCollects');
    let currentCollect = newCollects[this.data.id];
    newCollects[this.data.id]= !currentCollect;
    wx.setStorageSync('newCollects', newCollects);
    this.setData({
      collect:!currentCollect
    });
    wx.showToast({
      title: currentCollect ? '取消收藏' :'收藏成功',
      icon:'success',
      duration:1000
    });
    let collect_list = wx.getStorageSync('collectList');
    let item = news.newList[this.data.id];
    if(!currentCollect)
    {
      collect_list.push(item)
    }
    else{
      let self = this;
      for(let i = 0;i<collect_list.length;i++){
          if(collect_list[i].postId == self.data.id){
            var index=i;
            break;
          }
      }
      collect_list.splice(index,1);
    }
    wx.setStorageSync('collectList', collect_list);
  }
})