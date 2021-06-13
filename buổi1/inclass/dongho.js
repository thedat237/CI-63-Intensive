let gio=document.getElementById('gio');
let phut=document.getElementById('phut');
let giay=document.getElementById('giay');

function Dong_ho(){
    let gio_hien_tai=new Date().getHours();
    let phut_hien_tai=new Date().getMinutes();
    let giay_hien_tai=new Date().getSeconds();
    gio.innerHTML=gio_hien_tai;
    phut.innerHTML=phut_hien_tai;
    giay.innerHTML=giay_hien_tai;

}
setInterval(Dong_ho, 1000)