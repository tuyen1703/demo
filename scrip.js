const btn = document.querySelectorAll('section .row .col .card .card-body button')
// console.log(btn)
btn.forEach(function(_button, _index) {
    // console.log(_button, _index)
    _button.addEventListener("click",function(_event){
        var btnItem = _event.target
        var product = btnItem.parentElement
        var full = product.parentElement
        var productImg = full.querySelector("img").src
        var productName = full.querySelector("H5").innerText
        var productPrice = full.querySelector("span").innerText
        addCart(productImg,productName,productPrice)
        
    })
})
function addCart(_productImg,_productName,_productPrice) {
    var addRow = document.createElement("row")
    var rowcontent = '<hr style="width:1208px; margin-top: 0px; margin-left: -12px;"><div style="font-size:14px; height:120px; border-bottom: 1px solid rgba(136, 136, 136, 0.365); margin-top: -15px; background-color: #fff;" class="row"><div style="margin-left: 10px; margin-top: 50px;" class="col-1"><div class="form-check"><input style="background-color:#ee4d2d;" class="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked><label class="form-check-label" for="flexCheckChecked"></label></div></div><div class="col"><img style="width:60%; margin-top: 20px; margin-left: -73px;" src="'+_productImg+'"></div><div class="col-4"><p style="margin-left: -140px; margin-top:40px;">'+_productName+'</p></div><div class="col"><p style="margin-top: 35px; margin-left:-295px;" class="text-muted">Phân loại hàng:<br> Trắng, M</p></div><div class="col"><p style="margin-top:40px; margin-left: -275px;">'+_productPrice+'</p></div><div class="col"><input style="width:70px; margin-top:30px; margin-left: -215px;" type="number" class="form-control" id="inputnumber" placeholder="1"></div><div class="col"><p style="color:#ee4d2d; margin-top:40px; margin-left: -150px;">'+_productPrice+'</p></div><div style="margin-top: 20px; margin-left:-150px;" class="col text-center"><a style="font-size: 14px;" href="#">Xoá</a><p style="color: #ee4d2d; margin-top: 10px;">Tìm sản phẩm tương tự</p></div>'
    addRow.innerHTML = rowcontent
    var cardBuy = document.querySelector(".sp")
    // console.log(cardBuy)
    cardBuy.append(addRow)

    // carttotal()
}
// function carttotal() {
//      var cardItem = document.querySelectorAll(".sp row col")
//      console.log(cardItem)
//      for (var i = 0; i < cardItem.length; i++) {
//        var inputValue = cardItem[i].querySelector("input").value
//         var productPrice = cardItem[i].querySelector(".price p").innerHTML
//          totalA = totalC + totalA
//          totalD = totalC.toLocaleString('de-DE')
//      }
//     var carttotalA = document.querySelector(".voucher .row .price p")
//     carttotalA.innerHTML = totalD
//  }


//-----------------------------Xoa san pham------------------------------
function deleteCart() {
    
}