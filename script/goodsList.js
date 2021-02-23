
define(['jquery'], function($){

  //数据下载
  function download(){
    $.ajax({
      type: 'get',
      url: './data/goodsList.json',
      success: function(arr){
        for ( var i = 0, len = arr.length; i < len; i++ ) {
          $(`
            <li class="listItem">
              <a href="javascript:void(0);"><div class="img"><img src="${arr[i].imgurl}" alt=""><div class="addGoods" data-id="${arr[i].id}">加入购物车</div></div></a>
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
        console.log(msg)
      }
    })

    // 数据加载完成后点击加入购物车添加事件
    $('.list').on('click','.listItem .addGoods',function (){
      // 存储商品id和数量
      // "goods"=>"[{'id':'abc4','num':2},{'id':'abc2','num':1}]"
      var id = $(this).attr('data-id') //当前点击商品的id
      var goodsArr = [] //购物车数据的数组
      if (localStorage.getItem('goods')) {
        goodsArr = JSON.parse( localStorage.getItem('goods') )
      }
      var flag = false
     
      $.each(goodsArr, function(index, item){
        if (item.id === id){
        item.num++
        flag = true
        }
      })  
      if (!flag) {
        goodsArr.push({"id":id,"num":1})
      }
      // 数据更新到本地存储
      localStorage.setItem('goods', JSON.stringify(goodsArr))
      alert('加入购物车成功！')

    })

  }
  // 头部添加
  function header(){
    $(`
      <div id="title">
        <div class="tit-main">
          <div class="content">
            <span class="welcome">您好，欢迎光临凡客诚品！</span>
            <span class="login">登录</span>
            <span>|</span>
            <span class="register">注册</span>
            <span class="myOrder">我的订单</span>
            <span class="notice">网站公告</span>
            <a href="#" class="weibo"></a>
            <a href="#" class="wechat"></a>
            <img src="../image/weixin.png" alt="" class="qrcode">
          </div>
        </div>
      </div>

      <div id="search">
        <div class="srh-main">
          <div class="content">
            <div class="srh-btn">
              <input type="text" placeholder="搜“休闲裤”，体验与众不同">
              <button class="seek">搜索</button>
              <button class="shopCart">购物车（1）</button> 
            </div>      
            <div class="hot-srh">
              <ul>
                <li>热门搜索：</li>
                <li>免烫衬衫</li>
                <li>外套</li>
                <li>针织衫</li>
                <li>卫衣</li>
                <li>休闲裤</li>
                <li>帆布鞋</li>
                <li>羽绒服</li>
              </ul>
            </div> 
            <div class="cartGoods">
              <div class="content">
                <h3>最近加入的商品：</h3>
                <div class="goods-detail">
                  <img src="./image/36x36.jpg" alt="">
                  <div>
                    <span>休闲衬衫 法兰绒 男款 藏青色</span> <br>
                    <span>￥158.00 X 1</span>
                  </div>
                  <p>删除</p>
                </div>
                <div class="total">
                  <div>
                    <span>共计(未计算促销折扣)</span> <br>
                    <span>￥158</span>
                  </div>
                  <button>查看购物车(1件)</button>
                </div>
              </div>
            </div>   
          </div>
        </div>
      </div>

      <div id="nav">
        <div class="nav-main">
          <a href="./index.html"></a>
          <ul class="navList">
            <li>首页 </li>

            <li class="fleece1">摇粒绒 
              <ul class="class2 fleece">
                <li>摇粒绒</li>
                <li>防羊羔绒</li>
              </ul>
            </li>
            <li class="business1">商务衬衫 
              <ul class="class2 business">
                <li>长袖免烫</li>
                <li>舒适商务</li>
                <li>高支衬衫</li>
                <li>短袖免烫</li>
                <li>短袖桑蚕丝</li>
              </ul>
            </li>
            <li class="relax1">休闲衬衫 
              <ul class="class2 relax">
                <li>牛津纺</li>
                <li>法兰绒</li>
                <li>灯芯绒</li>
                <li>水洗棉</li>
                <li>易打理</li>
                <li>麻棉系列</li>
                <li>复古风系列</li>
                <li>女款</li>
                <li>短袖休闲衬衫</li>
              </ul>
            </li>
            <li class="sweater1">卫衣 
              <ul class="class2 sweater">
                <li>时尚款</li>
                <li>开衫</li>
                <li>圆领</li>
                <li>连帽</li>
              </ul>
            </li>
            <li class="coat1">外套 
              <ul class="class2 coat">
                <li>羽绒服</li>
                <li>大衣</li>
                <li>夹克</li>
                <li>西服</li>
                <li>摇粒绒</li>
                <li>冲锋衣</li>
              </ul>
            </li>
            <li class="knitwear1">针织衫 
              <ul class="class2 knitwear">
                <li>圆领</li>
                <li>V领开衫</li>
                <li>polo领</li>
                <li>高领</li>
                <li>开衫</li>
              </ul>
            </li>
            <li class="pants1">裤装 
              <ul class="class2 pants">
                <li>牛仔裤</li>
                <li>休闲裤</li>
                <li>针织裤</li>
                <li>运动系列</li>
                <li>沙滩裤</li>
                <li>短裤</li>
                <li>半裙</li>
              </ul>
            </li>
            <li class="shoe1">鞋 
              <ul class="class2 shoe">
                <li>帆布鞋</li>
                <li>休闲鞋</li>
                <li>运动鞋</li>
                <li>凉鞋</li>
                <li>皮鞋</li>
                <li>靴子</li>
                <li>女鞋</li>
              </ul>
            </li>
            <li class="furniture1">家具配饰 
              <ul class="class2 furniture">
                <li>袜品</li>
                <li>内衣</li>
                <li>家居服</li>
                <li>连裤袜</li>
                <li>家居鞋</li>
                <li>床品件套</li>
                <li>毯</li>
                <li>被</li>
                <li>围巾</li>
                <li>枕</li>
                <li>抱枕 </li>
                <li>手机壳</li>
                <li>箱包</li>
                <li>裙装</li>
                <li>马甲</li>
              </ul>
            </li>
          </ul>
        </div>
      </div> 
    `).appendTo('#header')

    var lis = document.querySelectorAll('#nav .class2 li')
    var liIndex = document.querySelector('.navList li:nth-child(1)')
    liIndex.onclick = function (){
      location.href = './index.html'
    }
    for (var i = 0, len = lis.length; i < len; i++){
      lis[i].onclick = function (){
        location.href = './goodsList.html'
      }
    }
  }
  // 尾部添加
  function footer(){
    $(`
      <div id="help">
        <div class="help-main">
          <div class="helpTop">
              <div class="helpTop1">
                <img src="./image/onlinecustomer.png" alt=""> <br>
                <button> 7X9小时在线客服 </button>
              </div>
              <div class="helpTop2">
                <img src="./image/seven.png" alt=""> <br>
                <span>7天内退货</span> <br>
                <span>购物满199元免运费</span>
              </div>
              <div class="helpTop3">
                <img src="./image/fkqrcode.jpg" alt=""> <br>
                <span>扫描下载凡客客户端</span>
              </div>
          </div>
          <div class="helpBottom">
            <ul>
              <li>关于凡客</li>
              <li>新手指南</li>
              <li>配送范围及时间</li>
              <li>支付</li>
              <li>售后服务</li>
              <li>帮助中心</li>
            </ul>
          </div>
        </div>
      </div> 
      <div id="copyright">
        <div class="copy-main">
          <div class="copyContent">
            <span>Copyright 2007 - 2020 vancl.com All Rights Reserved京ICP备08000757号 京公网安备11011502002400号 出版物经营许可证新出发京批字第直110138号</span> <br>
            <span>凡客诚品（北京）科技有限公司</span>
          </div>
          <div class="copyLogo">
            <span class="logo1"></span>
            <span class="logo2"></span>
            <span class="logo3"></span>
          </div>
        </div>
      </div>
    `).appendTo('#footer')
  }

  return{
    download: download,
    footer: footer,
    header: header
  }
});





