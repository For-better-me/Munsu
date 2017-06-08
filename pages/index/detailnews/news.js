// pages/index/detailnews/news.js
var news = require('../../../data/news-data.js');
Page({

  data: {
    case:{}
  },

  onLoad: function (options) {
    let id = options.id;
    let caseDetail = news.caseList[id];
    this.setData({
      case:caseDetail
    });
  }
})