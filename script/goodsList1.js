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
