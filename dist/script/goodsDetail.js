

// 头部悬浮栏
(function topFloat(){
  $navsCon = $('.navsContainer') 
  $(window).scroll( function(e){
    if($(window).scrollTop() >= 850){
      $navsCon.css('display','block')
    }   
  });
  $(window).scroll( function(){
    if($(window).scrollTop() < 850){
      $navsCon.css('display','none')
    } 
  });
})();


// 右侧悬浮栏
(function rightFloat(){
  $rightFloat = $('.rightFloat')
  $tab = $('.tab')
  // 保存当前坐标状态
  var $flag = 0 
  $tab.click( ()=>{
    var leftValue = $rightFloat.offset().left
    // 判断已改变坐标
    if( $flag != 0 ){
      $rightFloat.animate( {right: '-276px'}, 'slow')
      $flag = 0           
    }else if( leftValue = '1595px'){  // 悬浮栏隐藏状态，执行以下函数
      $rightFloat.animate( {right: '0px'}, 'slow' )
      $flag = 1
    }
    // 给外面返回最新坐标
    return $flag
  });
  // 简易实现：enter+click
  // $tab.mouseenter( ()=>{
  //     $rightFloat.animate( {right: '0px'}, 'slow' )    
  // });
  // $tab.click( ()=>{
  //     $rightFloat.animate( {right: '-276px'}, 'slow')   
  // });
})();

// 微信hover
(function(){
  $wechat = $('.wechat')
  $qrcode = $('.qrcode')
  $wechat.hover(
    function () {
      $qrcode.show();
    },
    function () {
      $qrcode.hide();
    }
  )
})();


// 购物车hover
(function(){
  $shopCart = $('.shopCart')
  $cartGoods = $('.cartGoods')
  $shopCart.mouseenter( ()=>{
      $cartGoods.show();
    }
  )

  $cartGoods.mousemove( (e)=>{
    var $target = $(e.target)
    if ( $target.is($shopCart) || $target.is($cartGoods) ){
      $cartGoods.show();
    }
  })
  $cartGoods.mouseleave( ()=>{
    $cartGoods.hide();
    }
  )
  $shopCart.mouseleave( ()=>{
    $cartGoods.hide();
    }
  )
})();

// 摇粒绒hover
(function(){
  $fleece1 = $('.fleece1')
  $fleece = $('.fleece')
  $fleece1.hover(
    function () {
      $fleece.show();
    },
    function () {
      $fleece.hide();
    }
  )
})();

// 商务衬衫hover
(function(){
  $business1 = $('.business1')
  $business = $('.business')
  $business1.hover(
    function () {
      $business.show();
    },
    function () {
      $business.hide();
    }
  )
})();

// 休闲衬衫hover
(function(){
  $relax1 = $('.relax1')
  $relax = $('.relax')
  $relax1.hover(
    function () {
      $relax.show();
    },
    function () {
      $relax.hide();
    }
  )
})();

// 卫衣hover
(function(){
  $sweater1 = $('.sweater1')
  $sweater = $('.sweater')
  $sweater1.hover(
    function () {
      $sweater.show();
    },
    function () {
      $sweater.hide();
    }
  )
})();

// 外套hover
(function(){
  $coat1 = $('.coat1')
  $coat = $('.coat')
  $coat1.hover(
    function () {
      $coat.show();
    },
    function () {
      $coat.hide();
    }
  )
})();

// 针织衫hover
(function(){
  $knitwear1 = $('.knitwear1')
  $knitwear = $('.knitwear')
  $knitwear1.hover(
    function () {
      $knitwear.show();
    },
    function () {
      $knitwear.hide();
    }
  )
})();

// 裤装hover
(function(){
  $pants1 = $('.pants1')
  $pants = $('.pants')
  $pants1.hover(
    function () {
      $pants.show();
    },
    function () {
      $pants.hide();
    }
  )
})();

// 鞋hover
(function(){
  $shoe1 = $('.shoe1')
  $shoe = $('.shoe')
  $shoe1.hover(
    function () {
      $shoe.show();
    },
    function () {
      $shoe.hide();
    }
  )
})();

// 家具配饰hover
(function(){
  $furniture1 = $('.furniture1')
  $furniture = $('.furniture')
  $furniture1.hover(
    function () {
      $furniture.show();
    },
    function () {
      $furniture.hide();
    }
  )
})();


(function(){

$pic = $('.pic')
$mask = $('.mask')
$bigPic= $('.bigPic')
$img= $('.bigPic img')

$pic.mouseenter(()=>{
  $mask.css( 'display','block');
  $bigPic.css('display','block');
})

$pic.mouseleave(()=>{
  $mask.css('display','none');
  $bigPic.css('display','none');
})

$pic.mousemove( (e)=>{
 
  var mask_left = e.pageX - $pic.offset().left - $mask.width() /2
  var mask_top = e.pageY - $pic.offset().top - $mask.height() /2

  if (mask_left <= 0){
    mask_left = 0
  }
  if (mask_left >= ($pic.width() - $mask.width())){
    mask_left = ($pic.width() - $mask.width())
  }
  if (mask_top <= 0){
    mask_top = 0
  }
  if ( mask_top >= ($pic.height() - $mask.height() ) ){
    mask_top = ( $pic.height() - $mask.height() )
  }

  $mask.css({'left': mask_left + 'px', 'top': mask_top + 'px' })
  
  var scaleX = mask_left/($pic.width() - $mask.width() )
  var scaleY = mask_top/($pic.height() - $mask.height() )

  var img_left = ($img.width() - $bigPic.width())*scaleX
  var img_top = ($img.height() - $bigPic.height())*scaleY

  $img.css({'left': -img_left + 'px', 'top': -img_top + 'px' })
  
})

})();