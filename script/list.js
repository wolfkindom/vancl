console.log("加载成功");


require.config({
  paths: {
    "jquery": "jquery-1.8.3",
    "goodsList": "goodsList"
  }
})

require(['goodsList'],function (goodsList){

  //加载商品数据
  goodsList.download();
})
