// pages/center/apply/apply.js
Page({

  data: {
    imgSrc:[]
  },

  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: '我要申请',
    })
  },
  onAdd:function(){
    let self = this;
    wx.chooseImage({
      count:3,
      sizeType: 'compressed',
      success: function(res) {
        let imgArr = self.data.imgSrc;
        res.tempFilePaths.forEach((item) => {
          imgArr.push(item);
        });
        self.setData({
          imgSrc:imgArr
        })
      },
    })
  },
  onSubmit:function(event){
    let self = this;
    console.log(event.detail.value.username.length && event.detail.value.phone.length)
    if(event.detail.value.username.length && event.detail.value.phone.length){
      wx.requestPayment({
        timeStamp: '',
        nonceStr: '',
        package: '',
        signType: 'MD5',
        paySign: '',
        success: function (res) {
          console.log('pay id success', res);
        },
        complete: function () {
          let formInfo = event.detail.value;
          formInfo.picture = self.data.imgSrc;
          console.log(formInfo);
        },
        fail: function (res) {
          console.log('pay is fail', res);
        }
      })
    }
    else{
      wx.showModal({
        title: '提示',
        content: '请完善信息',
        showCancel:false
      })
    }
    
      
  },
  onPreview:function(event){
    let url = event.currentTarget.dataset.url;
    let self = this;
    wx.previewImage({
      current: url,
      urls:this.data.imgSrc
    })
  }
})