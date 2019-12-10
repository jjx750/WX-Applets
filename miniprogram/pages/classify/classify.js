// pages/classify/classify.js
const db =wx.cloud.database();
const cont = db.collection('tee');
const cont1 = db.collection('dress');
const cont2 = db.collection('pants');
const cont3 = db.collection('shirt');
Page({
  /**
   * 页面的初始数据
   */
  data: {
    active: 0,
    teeData:[],
    dressData:[],
    coatData:[],
    pantsData:[],
    shirtData:[]
  },

  /* get_dress: function (e) {
    var that = this;
    console.log(e.target.dataset.index);
    console.log(this.data.dressData[e.target.dataset.index])
  },*/
 get_tee: function(e){
   let goods_data  = JSON.stringify(this.data.teeData[e.target.dataset.index])
    wx.navigateTo({
      url: '../goods/goods?goods_data=' + goods_data,
    })
   console.log(goods_data)
  },
  get_dress:function(e){
    let goods_data = JSON.stringify(this.data.dressData[e.target.dataset.index])
    wx.navigateTo({
      url: '../goods/goods?goods_data=' + goods_data,
    })
    console.log(goods_data)
  },
  get_coat: function (e) {
    let goods_data = JSON.stringify(this.data.coatData[e.target.dataset.index])
    wx.navigateTo({
      url: '../goods/goods?goods_data=' + goods_data
    })
  },
  get_pantsData: function (e) {
    let goods_data = JSON.stringify(this.data.pantsData[e.target.dataset.index])
    wx.navigateTo({
      url: '../goods/goods?goods_data=' + goods_data,
    })
    console.log(goods_data)
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //获取数据库集合的数据并赋值到数组
    db.collection('tee').get({
      success:res=>{
        console.log(res.data[0]);
        this.setData({
          teeData:res.data
        })
      }
    }),
    //获取数据库集合的数据并赋值到数组
    db.collection('dress').get({
      success: res => {
        console.log(res.data[0]);
        this.setData({
          dressData: res.data
        })
      }
    }),
      //获取数据库集合的数据并赋值到数组
      db.collection('coat').get({
      success: res => {
        console.log(res.data[0]);
        this.setData({
          coatData: res.data
        })
      }
    }),
      db.collection('pants').get({
        success: res => {
          console.log(res.data[0]);
          this.setData({
            pantsData: res.data
          })
        }
      }),
      db.collection('shirt').get({
        success: res => {
          console.log(res.data[0]);
          this.setData({
            shirtData: res.data
          })
        }
      })
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