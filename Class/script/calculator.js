
// thêm các hàm 
// lấy giá trị cũ và giá trị xuất 

function Lay_gia_tri_cu(){
    return document.getElementById("gia_tri_cu").innerText;
}
function In_gia_tri_cu(so) {
    document.getElementById("gia_tri_cu").innerText = so;
}
function Lay_ket_qua() {
    return document.getElementById("gia_tri_xuat").innerText;
}
function In_Ket_qua(so) {
    document.getElementById("gia_tri_xuat").innerText = so;
}

// thử gọi hai hàm là In_Ket_qua(9999) và In_gia_tri_cu(81)

function Dinh_dang_chuoi(so) {
    var n = Number(so);
    var gia_tri = n.toLocaleString("en"); // hàm n.toLocaleString("en") chuyển đổi số thành dạng chuỗi
    return gia_tri;
}

// 

function Xoa_Dinh_dang_chuoi(so) {
    return Number(so.replace(/,/g, '')) //đảo ngược lại định dạng từ chuỗi sang số
}

// làm cho các nút hoạt động khi nhấn vào sẽ hiện thị lên màn hình máy tính

var con_so = document.getElementsByClassName('con_so'); // lựa chọn ra những thành phần chứa class có tên là con_so
 for(var i=0; i<con_so.length; i++) {
     con_so[i].addEventListener('click', function() {
         var ket_qua = Xoa_Dinh_dang_chuoi(Lay_ket_qua())
         if(ket_qua != NaN) { //nếu nhập SỐ quá nhiều thì kết quả sẽ là NaN
             ket_qua = ket_qua + this.id;
             In_Ket_qua(ket_qua)
         }
     })
 }

// loại bỏ xố đầu tiên khi nhấn nút

 function In_Ket_qua(so) {
    if(so=="") {
        document.getElementById("gia_tri_xuat").innerText = so;
    } else {
        document.getElementById("gia_tri_xuat").innerText = Dinh_dang_chuoi(so);
    }
}

// vòng lặp bỏ qua các phần tử con gắn sự kiện lắng nghe 
// cho điều kiện nút xoá khi bấm nút xoá thì trên màn hình 2 giá trị In_Ket_qua(""); In_gia_tri_cu(""); sẽ mất

var he_thong = document.getElementsByClassName('he_thong'); 
 for(var i=0; i < he_thong.length; i++) { 
     he_thong[i].addEventListener('click', function() { 
         if(this.id == "xoa_tat_ca") { 
             In_Ket_qua(""); 
             In_gia_tri_cu(""); 
         } 
         else if(this.id == "xoa_tung_so") { 
             let ket_qua = Xoa_Dinh_dang_chuoi(Lay_ket_qua()).toString(); //đổi dạng số sang dạng chuỗi
             if(ket_qua) { 
                 ket_qua = ket_qua.substr(0, ket_qua.length -1) 
                 In_Ket_qua(ket_qua) 
             } 
         } 
         else { 
             var ket_qua = Lay_ket_qua(); 
             var ket_qua_cu = Lay_gia_tri_cu(); 
             if(ket_qua != "" ) { 
                 ket_qua = Xoa_Dinh_dang_chuoi(ket_qua); 
                 ket_qua_cu =ket_qua_cu + ket_qua; 
                 if(this.id == "=") { 
                     var ket_qua_cuoi = eval(ket_qua_cu); 
                     In_Ket_qua(ket_qua_cuoi) 
                     In_gia_tri_cu("") 
                 } else { 
                     ket_qua_cu = ket_qua_cu + this.id; 
                     In_gia_tri_cu(ket_qua_cu) 
                     In_Ket_qua("") 
                 } 
             } 
         } 
     }) 
 } 