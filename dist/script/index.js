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




// 摇粒绒hover

// (function(){
  
//   $('#header').on('mouseenter', '.fleece1', function(){        
//     $fleece = $('.fleece')
//     $fleece.show(); 
//   });

//   $('#header').on('mouseleave', '.fleece1', function(){
//     $fleece = $('.fleece')
//     $fleece.hide();  
//   })
// })();

// 所有导航栏hover
(function(){
  
  $('#header').on('mouseenter', '.navList>li', function(){  
    $('.navList>li').each(function(){   
      // console.log($(this));   
      $_this = $(this)
      $_this.each(function(){
        console.log( $(this) );
      })
      // $('.navList>li ul').each(function(){
      //   // $(this).show();
      //   console.log($(this));
      // })
    })  
  });

  $('#header').on('mouseleave', '.navList>li', function(){
    $('.navList>li ul').each(function(){
      $(this).hide();
    })
  })
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


// 轮播图
(function(){
  var swiper = new Swiper('.swiper-container', {
    loop: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
})();


// 回到顶部
(function(){
$toTop = $('.toTop')
$timer = null
$toTop.click(()=>{
    $timer = setInterval(() => {
        var backTop = getTop()
        var speedTop = backTop / 10
        setTop(backTop - speedTop)
        $(window).on( 'mousewheel',(delta)=>{
          if(delta != 0){
            clearInterval($timer)
          }
        })
        if(backTop == 0){
          clearInterval($timer)
        }
    }, 20);
}) 
var getTop = ()=>{
    getScrollTop = document.documentElement.scrollTop == 0
    ? document.body.scrollTop
    : document.documentElement.scrollTop
    return getScrollTop
}
var setTop = (top)=>{
    document.documentElement.scrollTop == 0
    ? document.body.scrollTop = top
    : document.documentElement.scrollTop = top
}
})();




// 底部删除悬浮栏
(function(){
  $del = $('.del')
  $scan = $('.scan')
  $del.on('click',function(){
    $scan.remove()
  })
})();
