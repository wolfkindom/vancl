define(['jquery'], function($){

  //数据下载
  function download(){
    $.ajax({
      type: 'get',
      url: '../data/goodsList.json',
      success: function(arr){
        console.log(arr)
        for ( var i = 0, len = arr.length; i < len; i++ ) {
          $(`
          <li class="listItem">
            <a href="./goodsDetail.html?${arr[i].id}"><img src="${arr[i].imgurl}" alt=""></a>
            <h3><a href="#">${arr[i].title}</a></h3>
            <div class="itemPrice">
              <span>售价￥${arr[i].originPrice}</span>
              <span>充值购买相当于￥${arr[i].salePrice}</span>
            </div>
          </li>
          `).appendTo('.list')
        }
      },
      error: function(msg){
        console.log(msg);
      }
    })
  }
  return{
    download: download
  }
});





