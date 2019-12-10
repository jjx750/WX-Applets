const db = wx.cloud.database();
const cont = db.collection('tee');
import Toast from 'vant-weapp/toast/toast';
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tag: '',
    price: ' ',
    num:' ',
    title:' ',
    active: 1,
    mo: 'Hello World!!',
    userid: '1234',
    // input默认是1
    num: 1,
    // 使用data数据对象设置样式名
    minusStatus: 'disabled',
    arr:[1,2,3,4],
    languageList: [
      {
        id: 0,
        name: "菏泽"
      }
    ]
  },
  select:function(){
    console.log(this.data.languageList)
  },
a:function(e){
  var that = this;
  console.log(e);
},
  /* 点击减号 */
  bindMinus: function () {
    var num = this.data.num;
    // 如果大于1时，才可以减
    if (num > 1) {
      num--;
    }
    // 只有大于一件的时候，才能normal状态，否则disable状态
    var minusStatus = num <= 1 ? 'false' : 'normal';
    // 将数值与状态写回
    this.setData({
      num: num,
      minusStatus: minusStatus
    });
  },
  /* 点击加号 */
  bindPlus: function () {
    var num = this.data.num;
    // 不作过多考虑自增1
    num++;
    // 只有大于一件的时候，才能normal状态，否则disable状态
    var minusStatus = num < 1 ? 'false' : 'normal';
    // 将数值与状态写回
    this.setData({
      num: num,
      minusStatus: minusStatus
    });
  },
  pressView: function (e) {
    var viewId = e.target.id;
    var viewDataSet = e.target.dataset;
    var viewText = viewDataSet.text;
    console.log(viewId); //输出点击的view的id，第二种情况就不重复写了
    console.log(viewText); //输出该文本
  },
  tapMessage: function (event) {
    console.log(event.target.id);       // 可获得
    console.log(event.target.name);     // 无法获得, 通过target只能直接获取id
    console.log(event.target.dataset);  // 要获得其它属性, 需要从dataset(数据集)中获取
    console.log(event.target.dataset.userxxx);  // userxxx为自定义的属性名, 但命名方式为:data-userxxx

    // 这里还原使用userXxx
    console.log(event.target.dataset.userXxx);
  },
  getOpenId: function () {
    wx.cloud.callFunction({
      name: 'login',
    }).then(res => {
      console.log(res);
    }).catch(err => {
      console.log(err);
    })
  },
  // 上传图片
  upload: function () {
    wx.navigateTo({
      url: '../order/order'
    })
  },

  // 上传商品获取的数据(T恤)
  tee_price: function (e) {
    this.setData({
      price: e.detail.value
    })
  },
  tee_tag: function (e) {
    this.setData({
      tag: e.detail.value
    })
  },
  tee_num: function (e) {
    this.setData({
      num: e.detail.value
    })
  },
  tee_title: function (e) {
    this.setData({
      title: e.detail.value
    })
  },
  //T恤上传按钮
  up_teeData: function () {
    db.collection('tee').add({
      data:{
        price: this.data.price,
        tag: this.data.tag,
        num: this.data.num,
        title: this.data.title
      },
      success:res=>{
        console.log(res);
      },
      fail:err=>{
        console.log(err);
      }
    })
  },

  //连衣裙
  dress_price: function (e) {
    this.setData({
      price: e.detail.value
    })
  },
  dress_tag: function (e) {
    this.setData({
      tag: e.detail.value
    })
  },
  dress_num: function (e) {
    this.setData({
      num: e.detail.value
    })
  },
  dress_title: function (e) {
    this.setData({
      title: e.detail.value
    })
  },

  //连衣裙上传按钮
  up_dressData: function (e) {
    db.collection('dress').add({
      data: {
        price: this.data.price,//获取商品数值并赋值数组
        tag: this.data.tag,
        num: this.data.num,
        title: this.data.title
      },
      success: res => {
        console.log(res);
      },
      fail: err => {
        console.log(err);
      }
    })
  },

  // 外套
  coat_price: function (e) {
    this.setData({
      price: e.detail.value
    })
  },
  coat_tag: function (e) {
    this.setData({
      tag: e.detail.value
    })
  },
  coat_num: function (e) {
    this.setData({
      num: e.detail.value
    })
  },
  coat_title: function (e) {
    this.setData({
      title: e.detail.value
    })
  },
  //外套上传按钮
  up_coatData: function (e) {
    db.collection('coat').add({
      data: {
        price: this.data.price,
        tag: this.data.tag,
        num: this.data.num,
        title: this.data.title
      },
      success: res => {
        console.log(res);
      },
      fail: err => {
        console.log(err);
      }
    })
  },

  // 裤子
  pants_price: function (e) {
    this.setData({
      price: e.detail.value
    })
  },
  pants_tag: function (e) {
    this.setData({
      tag: e.detail.value
    })
  },
  pants_num: function (e) {
    this.setData({
      num: e.detail.value
    })
  },
  pants_title: function (e) {
    this.setData({
      title: e.detail.value
    })
  },
  //裤子上传按钮
  up_pantsData: function (e) {
    db.collection('pants').add({
      data: {
        price: this.data.price,
        tag: this.data.tag,
        num: this.data.num,
        title: this.data.title
      },
      success: res => {
        console.log(res);
      },
      fail: err => {
        console.log(err);
      }
    })
  },

  // 衬衫
  shirt_price: function (e) {
    this.setData({
      price: e.detail.value
    })
  },
  shirt_tag: function (e) {
    this.setData({
      tag: e.detail.value
    })
  },
  shirt_num: function (e) {
    this.setData({
      num: e.detail.value
    })
  },
  shirt_title: function (e) {
    this.setData({
      title: e.detail.value
    })
  },
  //衬衫上传按钮
  up_shirtData: function (e) {
    db.collection('shirt').add({
      data: {
        price: this.data.price,
        tag: this.data.tag,
        num: this.data.num,
        title: this.data.title
      },
      success: res => {
        console.log(res);
      },
      fail: err => {
        console.log(err);
      }
    })
  },

  // 上传商品的tab标签页
  onChange(event) {
    wx.showToast({
      title: `切换到 ${event.detail.title}`,
      icon: 'none'
    });
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