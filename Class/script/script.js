// bài 1

function bai_1(){
    
    const mathMark = Number(prompt('vui long nhap diem toan'));
    const chemMark = Number(prompt('vui long nhap diem ly'));
    const physMark = Number(prompt('vui long nhap diem hoa'));

    const averageMark = (mathMark + chemMark + physMark)/3;

    console.log('diem TB 3 mon', averageMark);
    console.log('Tong diem 3 mon la:', averageMark *3);
    // document.writeln('Tong diem 3 mon Toan, Ly, Hoa' + averageMark *3)
    // document.writeln('Diem trung binh 3 mon la:' +averageMark)

}

// chuyển đổi qua độ F

function bai_2(){

    const C =(prompt("nhap do C"));

    const F = (C * 9) / 5 + 32;
    console.log(C + " do C bang " + F + " do F");
}

// tính diện tích hình tròn

function bai_3(){
    const r = prompt("Nhập bán kính hình tròn");
    const PI = 3.14;
    // r** 
    const s= PI * r * r;
    // làm tròn method toFixd()
    console.log("Diện thích hình tron là:", s.toFixed(2));
}

// tính chu vi hình tròn

function bai_4(){
    const r = prompt("Nhập bán kính hình tròn");
    const PI = 3.14;
    // r** 
    const s= 2 * PI * r;
    // làm tròn method toFixd()
    console.log("Chu vi hình tron là:", s.toFixed(2));

}


// bài 2 chuyển đổi tiền tệ

console.log("kiểm tra document", document);

function convertCurrency(){
    const amount = document.getElementById("amount").value;

    console.log("kiểm tra amount", amount);

    const currency = document.getElementById("currency");

    console.log("kiểm tra from currency", currency.value);

    // const toCurrency = document.getElementById("to-currency");

    const result = document.getElementById("result");

    if(currency.value == "USD"){
        result.value = (amount * 23000).toLocaleString("en-GB");
       
    }else{
        result.value = (amount / 23000).toFixed(2);
    }
}

function onChange(){

    const currency = document.getElementById("currency");

    const toCurrency = document.getElementById("to-currency");

    if(currency.value == "USD"){
        toCurrency.value = "VND";
    }else{
        toCurrency.value = "USD";
    }
}

