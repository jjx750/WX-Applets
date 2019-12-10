// miniprogram/pages/shoppingCart/shoppingCart.js
const db = wx.cloud.database();
const cont12 = db.collection('shoppingCart');
var that = this;
Page({
  /**
   * 页面的初始数据
   */
  data: {
    goods:[],
    less: ' ',
    sum:[],
    total: 0.00.toFixed(2),
    prompt: 1,
    edit:false,
    arr1: []
  },
  // 删除商品功能,index是商品下标,delnum是要删除的商品数量
  // 循环获取商品列表后,
  goods_delete:function(){
    let goods = this.data.goods;
    let index = -1;
    let delnum = 0;
    let goods_arr = [];
    for(let i = 0;i<goods.length;i++){
      if(goods[i].checked == false){
        goods_arr.push(goods[i])
        console.log('符合判断', goods[i].checked = false)
      } else if (goods[i].checked == true){
        console.log(goods[i]._id)
        let id = goods[i]._id
        db.collection('shoppingCart').doc(id)
        .remove()
        .then(res => {
          console.log(res);
        }).catch(err => {
          console.log(err);
        });
      }
        delnum++;
    }
    goods.splice(index,delnum);
    this.setData({
      total: 0.00.toFixed(2),
      goods: goods_arr
    })
  },
  //编辑
  edit:function(){
    let edit = this.data.edit;
    edit = !edit
    this.setData({
      edit:edit
    });
    console.log('点击了编辑,开关状态为',edit)
  },
  // 商品选择
  checkboxChange: function (e) {
    let index = e.target.dataset.index;
    let goods = this.data.goods;
    let checked = goods[index].checked;
    let value = String(e.detail.value);
    let arr = this.data.arr1
    console.log('选中了下标为',index,'的商品')
    arr.push(index)
    goods[index].checked = !checked;
    this.setData({
      goods:goods
    })
    this.calculate_total();
  },
  //再逛逛
  back_classify:function(){
    wx.switchTab({
      url: '../../pages/classify/classify',
    })
  },
  //减号
  less: function (e) {
    const index = e.currentTarget.dataset.index;
    let commodit = this.data.goods;
    if (commodit[index].buy_sum>1){
      commodit[index].buy_sum--;
      }
    console.log('商品数为', commodit[index].buy_sum)
    this.setData({
      goods: commodit,
    });
    this.calculate_total();
  },
  //点击加号
  plus:function(e){
    const index = e.currentTarget.dataset.index;
    let commodit = this.data.goods;
    commodit[index].buy_sum ++;
    console.log('商品数为',commodit[index].buy_sum)
    this.setData({
      goods: commodit
    });
    this.calculate_total();
  },
  onChange(event) {
    this.setData({
      result: event.detail
    });
  },
  /* 
  遍历购物车里的商品
  判断是否已经选中该商品
  然后进行价格运算
  */
  calculate_total(){
    let comm = this.data.goods;
    let total1 = 0;
    for(let i = 0;i<comm.length;i++){
      let comm_sum = comm[i];
      if (comm_sum.checked){
        total1 += comm_sum.buy_sum * comm_sum.price
      }
    }
    this.setData({
      total: total1.toFixed(2)
    })
  },
  // 当购物车里有商品时隐藏tips
  prompt(){
    let comm = this.data.goods
    if(comm.length > 0 ){
      this.setData({
        prompt:0
      })
    }
  },
 updateData(){

 },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.switchTab({
      url: '../shoppingCart/shoppingCart'
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
  //获取集合的数据并赋值到数组
  onShow: function () {
    db.collection('shoppingCart').get({
      success: res => {
        this.setData({
          goods: res.data
        })
      }
    });
    this.prompt();
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