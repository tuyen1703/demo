//--------------Them vao gio hang-----------
const btn = document.querySelectorAll('section .row .col .card .card-body button')
// console.log(btn)
btn.forEach(function(_button, _giohang) {
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
    var rowcontent = '<hr style="width:1208px; margin-top: 0px; margin-left: -12px;"><div style="font-size:14px; height:120px; border-bottom: 1px solid rgba(136, 136, 136, 0.365); margin-top: -15px; background-color: #fff;" class="row"><div style="margin-left: 15px; margin-top: 50px;" class="col-1"><div class="form-check"><input style="background-color:#ee4d2d;" class="form-check-input" type="checkbox" value="1" id="flexCheckChecked" checked><label class="form-check-label" for="flexCheckChecked"></label></div></div><div class="col"><img style="width:60%; margin-top: 20px; margin-left: -75px;" src="'+_productImg+'"></div><div class="col-4"><p style="margin-left: -145px; margin-top:40px;">'+_productName+'</p></div><div class="col"><p style="margin-top: 35px; margin-left:-300px;" class="text-muted">Phân loại hàng:<br> Trắng, M</p></div><div class="col"><p style="margin-top:40px; margin-left: -280px;">₫<span>'+_productPrice+'</span></p></div><div class="col"><input style="width:70px; margin-top:30px; margin-left: -220px;" type="number" class="form-control" id="inputnumber" placeholder="1"></div><div class="col"><p style="color:#ee4d2d; margin-top:40px; margin-left: -155px;">₫<span>'+_productPrice+'</span></p></div><div style="margin-top: 20px; margin-left:-155px;" class="col text-center"><a style="font-size: 14px;" href="#">Xoá</a><p style="color: #ee4d2d; margin-top: 10px;">Tìm sản phẩm tương tự</p></div>'
    addRow.innerHTML = rowcontent
    var cardBuy = document.querySelector(".card-s")
    // console.log(cardBuy)
    cardBuy.append(addRow)

    cardtotal()
}

//------------------Tinh tong tien---------------
function cardtotal() {
    var cardItem = document.querySelectorAll(".card-s .row")
    var totalC = 0
    // console.log(cardItem.length)
    for (var i = 0; i < cardItem.length; i++) {
        // console.log(i)
        var inputValue = cardItem[i].querySelector("input").value
        // console.log(inputValue)
        var productPrice = cardItem[i].querySelector("span").innerHTML
        // console.log(productPrice)
        totalA = productPrice
        // totalB = totalA.toLocaleString('de-DE')
        // console.log(totalB)
        totalC = totalC + totalA
        console.log(totalC)
    }
}
//-----------------Xoa san pham------------------