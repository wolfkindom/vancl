    // 原生js
    // var decs = document.querySelector('.cartProduct tbody .num .decrease')
    // var incs = document.querySelector('.cartProduct tbody .num .increase')
    // var nums = document.querySelector('.cartProduct tbody .num input')

    // for ( var i = 0, len = decs.length; i < len; i++ ) {
    //   decs[i].index = i
    //   decs[i].onclick = function (){
    //     nums[this.index].value -=1
    //     if (num.value <= 0){
    //       alert('亲，商品数量不能少于1哟！')
    //     }
    //   }
    // }

    // for ( var i = 0, len = incs.length; i < len; i++ ) {
    //   incs[i].index = i
    //   incs[i].onclick = function (){
    //     nums[this.index].value +=1
    //     if (num.value >5){
    //       alert('老子只卖5件，呵呵哒')
    //     }
    //   }
    // }


    
  // } else {

  //   var newLi = `<li>购物车空空如也，快去加购商品吧！</li>`
  //   $('.list').html(newLi)
  // }


$(function (){
  
  // if (localStorage.getItem('goods')) {
  //   var goodsArr = JSON.parse(localStorage.getItem('goods'))

  //   $.ajax({
  //     url: '../data/goodsDetail.json',
  //     type: 'get',
  //     dataType: 'json',
  //     cache: false,
  //     success: function (json){
  //       var domStr = ''
  //       $.each(json,function (index,item){
  //         $.each(goodsArr,function (i,obj){
  //           if (item.id === obj.id){
  //             domStr += 
  //             `
  //             <tr class="selected">
  //               <td class="white-space-w"></td>
  //               <td class="choose"><input type="checkbox"></td>
  //               <td class="photo"><img src="../image/cart1.jpg" alt=""></td>
  //               <td class="goodsInfo">针织衫圆领 棉线可机洗 男款 姜黄	</td>
  //               <td class="size">L</td>
  //               <td class="price">￥178</td>
  //               <td class="num"><div><a class="decrease">-</a><input type="text" value="1"><a class="increase">+</a></div></td>
  //               <td class="cheap">-</td>
  //               <td class="subtotal">￥178</td>
  //               <td class="operate">删除</td>
  //               <td class="white-space-w"></td>
  //             </tr>
  //             `
  //           }           
  //         }) 
  //       })
  //       $('tbody').append(domStr)
  //     }
  //   })
    
    // 全选1(四种方式拿到checked属性)-----(三种方式设置设置checked属性)
    $('.cartProduct').on('click','thead .theadAll',function (){
      if ($('.cartProduct thead .theadAll').prop('checked')) {
      // if ($('.cartProduct thead .theadAll').get(0).checked) {
      // if ($('.cartProduct thead .theadAll').is(':checked')){
      // if (document.querySelector('.cartProduct thead .theadAll').checked){

      // $('tbody tr .choose input').attr('checked',true)
      // $('tbody tr .choose input').get(0).checked = true ----此处设置的是所有商品复选框的 第一个 复选框
      // document.querySelectorAll('.tbody tr .choose input').checked = true ------原生API不可直接 同时操作 多个元素 只能遍历设置！！！
      $('tbody tr .choose input').prop('checked',true)
      $('.summary .bar input').prop('checked',true)
      var $subtotal = $('tbody .subtotal')
      var $num = $('tbody .num input')
      var totalPrice = 0 
      var totalNum = 0
      // 全选1与金额总计的关联
      $.each($subtotal, function (index, item){
        // totalPrice += Number(item.innerText.slice(1)) ---方法1
        totalPrice += parseInt($(item).text().slice(1)) // ---方法2
      })
      $('.summary .total em').text('￥'+totalPrice)
      // 全选1与数量总计的关联
      $.each($num, function (index, item){
        // totalNum += item.value
        totalNum += parseInt($(item).val())
      })
      $('.summary .bar span em').text(totalNum)
    } else {
      $('tbody tr .choose input').removeAttr('checked')  
      $('.summary .bar input').removeAttr('checked')  
      $('.summary .total em').text('￥'+'0.00')
      $('.summary .bar span em').text(0)
    }     
  })

  //全选2
  $('.cartProduct').on('click','.summary .bar input',function (){
    if ($('.summary .bar input').prop('checked')) {
      $('tbody tr .choose input').prop('checked',true)
      $('.cartProduct thead .theadAll').prop('checked',true)
      var $subtotal = $('tbody .subtotal')
      var $num = $('tbody .num input')
      var totalPrice = 0 
      var totalNum = 0
      // 全选2与金额总计的关联
      $.each($subtotal, function (index,item){
        totalPrice += Number(item.innerText.slice(1))
      })
      $('.summary .total em').text('￥'+totalPrice)
      // 全选2与数量总计的关联
      $.each($num, function (index, item){
        // totalNum += item.value
        totalNum += parseInt($(item).val())
      })
      $('.summary .bar span em').text(totalNum)
    } else {
      $('tbody tr .choose input').removeAttr('checked')  
      $('.cartProduct thead .theadAll').removeAttr('checked') 
      $('.summary .total em').text('￥'+'0.00')   
      $('.summary .bar span em').text(0)
    }     
  })

  // 商品数量减1
  $('.cartProduct table').on('click','tbody .num .decrease',function (){
    if ($(this).siblings('input').val() <= 0){
      alert('商品数量为1，不能再减少了！')
    } else {
      var num = Number($(this).siblings('input').val()) - 1
      // console.log(num);
      var eachPrice = $(this).closest('.num').siblings('.price').text().slice(1)
      // console.log(eachPrice);
      var subtotal = num * eachPrice
      $(this).siblings('input').val(num)
      $(this).closest('.num').siblings('.subtotal').text('￥'+subtotal) 

      // var id = $(this).siblings('em').attr('data-id')
     
      // $.each(goodsArr,function (index,item){
      //   if (item.id == id){
      //     item.num--
      //     return false
      //   }  
      // })

      // localStorage.setItem('goods',JSON.stringify(goodsArr))
    }
  })

  // 商品数量加1
  $('.cartProduct table').on('click','tbody .num .increase',function (){
    var num = Number($(this).siblings('input').val()) + 1
    var eachPrice = $(this).closest('.num').siblings('.price').text().slice(1)
    var subtotal = num * eachPrice
    $(this).siblings('input').val(num)
    $(this).closest('.num').siblings('.subtotal').text('￥'+subtotal) 

    // var id = $(this).siblings('em').attr('data-id')
    
    // json数据遍历
    // $.each(goodsArr,function (index,item){
    //   if (item.id == id){
    //     item.num++
    //     return false
    //   }  
    // })

    // localStorage.setItem('goods',JSON.stringify(goodsArr))
  })


  // 1.单行复选框和全选1、全选2的对应关系 
  // 2.单行复选框和数量总计与金额总计的对应关系
  $('.cartProduct').on('click','tbody .choose input',function (){
    // 遍历其他所有单选框是否都是选中，选中则让全选1、全选2都选中
    if ($(this).prop('checked')){
      var $checks = $('tbody .choose input')
      var $subtotal = $('tbody .subtotal')
      var $num = $('tbody .num input')
      var totalPrice = 0 
      var totalNum = 0
      // 关联单行复选框和全选1、全选2
      $.each($checks,function (index,item){
        // console.log($(item).is(':checked'));
        // console.log(item.checked)
        if (!item.checked){
          $('.cartProduct thead .theadAll').prop('checked',false)
          $('.summary .bar input').prop('checked',false)
        } else {
          $('.cartProduct thead .theadAll').prop('checked',true)
          $('.summary .bar input').prop('checked',true)
        }  
      })  
      
      // 关联单行复选框和金额总计
      $.each($subtotal, function (index, item){
        // totalPrice += Number(item.innerText.slice(1)) ---方法1
        totalPrice += parseInt($(item).text().slice(1)) // ---方法2
      })
      $('.summary .total em').text('￥'+totalPrice)
      // 关联单行复选框和数量总计
      $.each($num, function (index, item){
        // totalNum += item.value
        totalNum += parseInt($(item).val())
      })
      $('.summary .bar span em').text(totalNum)
    } else {
      $('.cartProduct thead .theadAll').removeAttr('checked')
      $('.summary .bar input').removeAttr('checked')
    }
  })

  // 删除1
  $('.cartProduct').on('click','tbody tr td.operate',function (){
    // 删除1移除商品
    $(this).parent().remove()
    // 关联删除1和金额总计

    // 关联删除1和数量总计
    
  })

  // 结算框数量总计
  $allNumber = $('.bar span em')
  var num = 0
  numInput = $('tbody .num .decrease').siblings('input')
  // console.log(numInput);
  // console.log($allnumver);
    $.each(numInput,function (index,item){
      // console.log($allNumber);
      console.log($(item).val());

      num += Number($(item).val())
      $allNumber.html(num)
    }) 
  

  // 结算框金额总计(先找所有选中的复选框，然后累加小计)





  // 结算框支付跳转
  $('.cartProduct').on('click','.calculate .goPay',function (){
    var $checks = $('tbody tr .choose input')
    var $eachPrice = $('tbody td.price')
    var $num = $('tbody td.num input')
    var count = 0
    $.each($checks,function (index,item){       
      if ($(item).prop('checked')){
        count += parseFloat($eachPrice[index].outerText.slice(1)) * parseFloat($num[index].value)
      }
    })
    alert('正在跳转支付页面，亲，您即将消费 '+count+' 元，小店概不赊账，如实在想买，可提供特别滴等价交换服务哟~~详情联系客服')
  })
  

  // } 
  // else {

  //   var newLi = `<li>购物车空空如也，快去加购商品吧！</li>`
  //   $('.list').html(newLi)
    
  // }
})