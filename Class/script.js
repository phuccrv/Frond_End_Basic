// vòng lặp

// nhập vào N chữ số tìm số lớn nhất.

// lặp 10 lần

// for(let i=1; i <=10; i = i + 1 ){
//     console.log("lặp lần thứ:", i);
// }

// vòng lặp white

// let j = 0
// while(j <= 10){
//     console.log("check j thứ:", j);
// }do{
//     j++;
//     console.log("check lần lặp thứ:", j);
// }while(j <=0)

// let max = a1;

// for (let i = 0; i <= navigator ;i++) {

//     if(ai >= a1){
//         max = ai
//     }
// }console.log("số lớn nhất trong chuỗi," ,max);

// mô ta 2

// let number = prompt("nhập số nguyên tố N");

// if (number >= 2) {
//     let isPrime = true;
//     for (let i = 2; i < number; i++) {
//         if (number % i == 0) {
//         isPrime = false;
//         break;
//         }
//   }
//   if(isPrime) {
//     alert("số đã nhaoaj ko phải là số nguyên");
//   }else{
//       alert("số nhập ko phải là số nguyên tố");
//   }
// } else{
//     alert("số nhập ko phải là số nguyên tố")
// }

// tìm ước của số

var result = document.getElementById("result");


function Divisor() {
  var total = 0;
  var input_Divisor = document.getElementById("input_nhapso");
  var number = Number(input_Divisor.value);

  for (let i = 1; i < number; i++) {
    if (number % i == 0) {
      
      result.innerHTML = "ước chung của:" + " " + number + " " + " " + "là" + " " + i;
    //   console.log(i);
      total += i;
    }
  }if(number == total){
    console.log("số này là số hoàn hảo");
  }else{
    console.log("ko phải số hoàn hảo");
  }
}


// tính tổng 30 số chia hết cho 7 trong dãy số tự nhiên.
