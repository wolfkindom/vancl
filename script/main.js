console.log('加载成功');


require.config({
  paths: {
    "jquery": ["https://cdn.bootcdn.net/ajax/libs/jquery/3.5.1/jquery","./jquery-1.8.3"],
    "header": "header", 
    "footer": "footer"
  }
  
})

require(['jquery','header'],function ($, header){
header.fn();
header.fn1()

})