

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

  $('#header').on('mouseenter', '.wechat', function(){        
    $qrcode = $('.qrcode')
    $qrcode.show(); 
  });

  $('#header').on('mouseleave', '.wechat', function(){
    $qrcode = $('.qrcode')
    $qrcode.hide();  
  })
})();

// 购物车hover
(function(){
  
  $('#header').on('mouseenter', '.shopCart', function(){        
    $cartGoods = $('.cartGoods')
    $cartGoods.show(); 
  });

  $('#header').on('mouseleave', '.shopCart', function(){
    $cartGoods = $('.cartGoods')
    $cartGoods.hide();  
  })
})();



// 导航栏hover
(function(){
  $('#header').on('mouseenter', '.navList>li', function(e){  
    $target = $(e.target)
    $target.children().show()  // 或者是 $target.find('ul').show()
  });
  $('#header').on('mouseleave', '.navList>li', function(e){  
    $target = $(e.target)
    $target.find('ul').hide()
  })

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