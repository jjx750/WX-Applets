// miniprogram/pages/home/home.js
const db = wx.cloud.database();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    slideshow: [
      { img: 'cloud://xy-test.7879-xy-test-1300071332/hone/coat.jpg', type: 'coat', _id:'3c4c6d855d6e5cd110dc46b00e9f1c03'},
      { img: 'cloud://xy-test.7879-xy-test-1300071332/hone/dress.png', type: 'dress', _id:'5d262bd45d6e5ac610deb84c5f11c815'},
      { img: 'cloud://xy-test.7879-xy-test-1300071332/hone/tee.jpg', type: 'tee', _id: 'efdeb2615d75395415d3ec1a37f5702b'}
      ],
    left_img:'cloud://xy-test.7879-xy-test/hone/left_mini_ico.png',
    right_img:'cloud://xy-test.7879-xy-test/hone/right.jpg',
    second_left_img:'cloud://xy-test.7879-xy-test/hone/second_left.jpg',
    second_left_img01:'cloud://xy-test.7879-xy-test/hone/second_ico_01.png',
    second_left_img02: 'cloud://xy-test.7879-xy-test/hone/second_ico_02.png',
    second_left_img03: 'cloud://xy-test.7879-xy-test/hone/second_ico_03.png',
    second_left_img04: 'cloud://xy-test.7879-xy-test/hone/second_ico_04.png',
    goods_data: []
    },
  jumpPage:function(e){
    let img = this.data.slideshow
    let index = e.target.dataset.index;
    for(let i = 0;i<img.length;i++){
      if(img[i].type == img[index].type){
        console.log(img[i].type)
        let type = img[i].type
        let id = img[i]._id
        // 获取数据
        db.collection(type).doc(id).get({
          success: res => {
            this.setData({
              goods_data: res.data
            })
            console.log(this.data.goods_data);
            //跳转页面并传值
            let goods_data = JSON.stringify(this.data.goods_data)
            wx.navigateTo({
              url: '../goods/goods?goods_data=' + goods_data
            })
          }
        })
      }
    }
  },
  tee(){
    let goods_data = JSON.stringify(this.data.goods_data)
    wx.navigateTo({
      url: '../goods/goods?goods_data=' + goods_data,
    })
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

  }
})