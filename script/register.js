
//验证码请求
function code() {
    $.ajax({
    type: "get",
    url: "https://www.mxnzp.com/api/verifycode/code?",
    // url: "https://www.mxnzp.com/api/verifycode/code?len=5&type=0&app_id=cgdhozkmnhjnpdsm&app_secret=cVBDWnBaalM2ajZaajNEVFgvRExPQT09" 
    data: {len: 5, type: 0, app_id: "nttxhsqjojeennjq", app_secret: "TEVZWHdqMy9kN1lUcHlkZUR0RGt3dz09"},
    dataType: "json",
    timeout: 5000,
    success: function (json) {
    verifyCode.str = json.data.verifyCode//验证文本
    verifyCode.imgUrl = json.data.verifyCodeImgUrl
    $('.img').attr("src", verifyCode.imgUrl)
    },
    error: function (err) {
        console.log(err.status)
    }
    })
}



