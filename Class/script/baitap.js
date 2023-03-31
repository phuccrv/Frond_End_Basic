// khai báo function
const checkbox = document.getElementsByClassName('checkbox');
var result = "";

function clickme(){
    // khai báo để lấy giá trị tên và họ
    let first = document.getElementById("first");
    let last = document.getElementById("last");
    let fullName = document.getElementById("fullName"); //tạo biến fullName để nối 2 giá trị họ và tên
    // khai báo lấy value chon
    let chon = document.getElementById('form').elements["chon"];

  

    // nối tên
    document.getElementById('fullName').innerHTML = first.value + last.value;
    // log chon ra 
    console.log(chon.value);

// lấy giá trị comment
    const comments = document.getElementById('comments');
    console.log("comment:" + comments.value);

// vòng lặp lấy giá trị checkbox

for (let index = 0; index < checkbox.length; index++) {
    if(checkbox [index].checked === true){
        result += checkbox[index].value + ' ';
    }
    
}

console.log(result);

 }
// khai báo function lấy giá trị renge
function change(){

    const prrogress = document.getElementById('prrogress').value;

    console.log("giá trị:" + prrogress)

}




