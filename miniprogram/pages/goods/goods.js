// miniprogram/pages/classify/classify_tee/classify_tee.js
const db = wx.cloud.database();
const todosCollection = db.collection('shoppingCart')
var a = 1;
Page({
  /**
   * 页面的初始数据
   */
  data: {
    _id:'',
    goods_show:[],
    activeNames: ['1'],
    buy_sum:1,
    actions_title:' ',
    // 下拉菜单
    specification:'S码',
    actions: [{name: ' ',subname:' '}],
    menu: '',
    condition: 'disabled',
    //传递过来的数值
    goodsData:[],
    //数量，价格，标题，
    num: '', price: '', title: '', cover: '', salesVolume: '', originPrice: '',fare:'',
    //商品轮播图
    slideshow: [],
    // 选择的商品尺寸
    select_sizi: 'S码',
    // 商品尺寸
    cloth_sizi: [
      { size: 'S码', checked: 'true'},
      { size: 'M码' },
      { size: 'L码' }
      ],
    goods_info: false,
    shopping_button:'加入购物车',
    goods_arr:1
  },
  onChange(event) {
    this.setData({
      activeNames: event.detail
    });
  },
  // 点击商品数量减少
  less: function () {
    var buy_sum = this.data.buy_sum;
    if (buy_sum > 1) {
      buy_sum--;
    }
    var condition = buy_sum <= 1 ? 'disabled' : 'normal';
    this.setData({
      buy_sum: buy_sum,
      condition: condition
    })
  },
  //点击商品数量增加
  plus: function () {
    var buy_sum = this.data.buy_sum;
    buy_sum++;
    var condition = buy_sum < 1 ? 'disabled' : 'normal';
    this.setData({
      buy_sum: buy_sum,
      condition: condition
    })
  },
  //客服
  onClickIcon() {
    wx.showToast({
      title:'该功能还未开放',
      icon:'none'
    })
  },
  /*
  点击后取得与所点击的商品名称相同的商品尺寸
  然后判断是否与所选择的尺寸相同
  如果没有便上传商品数据到购物车
  */
  onClickButton:function() {
      let name = this.data.title
      db.collection('shoppingCart').where({
        title: name
      })
        .get()
        .then(res => {
          let goods = res.data
          let sizi = this.data.select_sizi
          let goods_sizi = []
          for (let i = 0; i < goods.length; i++) {
            goods_sizi.push(goods[i].select_sizi);
          };
          console.log('sizi:', goods_sizi)
          if (goods_sizi.indexOf(sizi) >= 0) {
            console.log(goods_sizi.indexOf(sizi))
            wx.showToast({
              title: '商品已在购物车中',
              icon: 'none',
            })
          } else {
            db.collection('shoppingCart').add({
              data: {
                price: this.data.price,
                title: this.data.title,
                cover: this.data.cover,
                select_sizi: this.data.select_sizi,
                buy_sum: this.data.buy_sum,
                checked: false
              },
              success: res => {
                wx.showToast({
                  title: '加入购物车成功',
                  icon: 'none'
                })
              },
              fail: err => {
                console.log(err);
              }
            })
          }
        }).catch(err => {
          console.log(err)
        })
     },
  onClickLeft() {
    wx.showToast({ title: '点击返回', icon: 'none' });
    success: res =>{
    wx.navigateBack({
      delta: 1
    })
    }
  },
  // 衣服尺寸
  radio_change: function (e) {
    console.log('选择了'+e.detail.value+'尺寸')
    this.setData({
      specification: e.detail.value,
      select_sizi: e.detail.value
    })
    console.log('选择中的尺寸'+this.data.select_sizi)
  },
  shopping_goods(){
    let goods = [{title:this.data.title,}]
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //转换接受到的数据
    this.data.goodsData = JSON.parse(options.goods_data)
    console.log('商品数据:', this.data.goodsData);
    this.setData({
      num: this.data.goodsData.num,
      title: this.data.goodsData.title,
      price: this.data.goodsData.price,
      slideshow: [this.data.goodsData.slideshow1, this.data.goodsData.slideshow2, this.data.goodsData.slideshow3],
      cover: this.data.goodsData.cover,
      salesVolume: this.data.goodsData.salesVolume,
      originPrice: this.data.goodsData.originPrice,
      goods_show: [{ img: this.data.goodsData.detail1 }, { img: this.data.goodsData.detail2 }, { img: this.data.goodsData.detail3}],
      _id: this.data.goodsData._id,
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