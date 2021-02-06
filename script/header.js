define(function (){
  function header(){
    $('#header').load('header.html')
  }
  function footer(){
    $('#footer').load('footer.html')
  }

  return{
    fn: header,
    fn1: footer
  }
})