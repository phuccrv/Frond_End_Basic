// function tính toán tính diện tích hình tròn

function calculator() {
  const r = Number(prompt("nhập bán kính hình tròn"));

  if (r > 0) {
    const S = 3.14 * r * r;
    console.log("diện tích hình tròn là:", +S);
  }
}

// kiểm tra chẳn lẽ

function checkVeven() {
  const number = Number(prompt("nhập một số bất kỳ"));

  const isEven = number % 2 == 0;

  console.log("kiểm tra is even", isEven);

  if (isEven) {
    alert("số" + " " + number + " " + "là số chẳn");
  } else {
    alert("số" + " " + number + " " + "là số lẻ");
  }
}

function buyproduct() {
  const product = prompt(
    "chọn loại sản phẩm",
    "lapTop",
    "dienthoai",
    "maytinhbang"
  );

  const lapTop = "laptop";
  const dienthoai = "dienthoai";
  const maytinhbang = "maytinhbang";
  const khongcosanpham = "";
  // KHAI BÁO ĐIỆN THOẠI
  const SAMSUNG = "SAMSUNG";
  const APPLE = "APPLE";
  const LG = "LG";
  // KHAI BÁO MÁY TÍNH
  const HP = "HP";
  const ACER = "ACER";
  const DELL = "LDELL";
  // khai báo máy tính bảng
  const LENOVOL = "LENOVOL";
  const GALAXY = "GALAXY";

  if (product == lapTop) {
    const brand = prompt(
      'vui lòng nhập sản phẩm mà bạn quan tâm: "DELL", "ACER", "HP"'
    );
    if (brand == DELL) {
      alert("đây là các dòng máy của DELL" + DELL);
    } else if (brand == ACER) {
      alert("đây là các dòng máy của ACER" + ACER);
    } else if (brand == HP) {
      alert("đây là các dòng máy của HP" + HP);
    } else {
      alert(khongcosanpham);
    }
  } else if (product == dienthoai) {
    const brand = prompt(
      'vui lòng nhập sản phẩm mà bạn quan tâm: "SAMSUNG", "APPLE", "LG"'
    );
    if (brand == SAMSUNG) {
      alert("đây là các dòng máy của SAMSUNG" + SAMSUNG);
    } else if (brand == APPLE) {
      alert("đây là các dòng máy của APPLE" + APPLE);
    } else if (brand == LG) {
      alert("đây là các dòng máy của LG" + LG);
    } else {
      alert(khongcosanpham);
    }
  } else if (product == maytinhbang) {
    const brand = prompt(
      'vui lòng nhập sản phẩm mà bạn quan tâm: "LENOVOL", "GALAXY"'
    );
    if (brand == LENOVOL) {
      alert("đây là các dòng máy của LENOVOL" + LENOVOL);
    } else if (brand == GALAXY) {
      alert("đây là các dòng máy của GALAXY" + GALAXY);
    } else {
      alert(khongcosanpham);
    }
  } else {
    alert(khongcosanpham);
  }
}

// tính bao nhiêu ngày trong tháng

function dayOfMonth() {
  const month = prompt("nhập vào tháng:");
  const day = "";

  // trường hợp dùng swith case

  //   switch (month) {
  //     case 1:
  //     case 3:
  //     case 5:
  //     case 7:
  //     case 8:
  //     case 10:
  //     case 12:
  //         alert("tháng có 31 ngày");
  //         break;
  //     case 4:
  //     case 6:
  //     case 9:
  //     case 11:
  //         alert("tháng có 30 ngày");
  //         break;
  //     case 2:
  //         alert("tháng có 28 hoặc 29 ngày");
  //         break
  //     default:
  //         alert("vui lòng nhập 1-12");
  //   }

  // trường hợp dùng if
  if (month == 1) {
    alert("tháng có 31 ngày");
  }
  if (month == 2) {
    alert("tháng này là tháng có 28 ngày hoặc 29 ngày");
  }
  if (month == 3) {
    alert("tháng có 31 ngày");
  }
  if (month == 4) {
    alert("tháng này có 30 ngày");
  }
  if (month == 5) {
    alert("tháng này có 31 ngày");
  }
  if (month == 6) {
    alert("tháng này có 30 ngày");
  }
  if (month == 7) {
    alert("tháng này có 31 ngày");
  }
  if (month == 8) {
    alert("tháng này có 31 ngày");
  }
  if (month == 9) {
    alert("tháng này có 30 ngày");
  }
  if (month == 10) {
    alert("tháng này có 31 ngày");
  }
  if (month == 11) {
    alert("tháng này có 30 ngày");
  }
  if (month == 12) {
    alert("tháng này có 31 ngày");
  } else {
    alert("tôi yêu bạn gấc nhiều ^.^");
  }
}
// có thể gộp điều kiện lại bằng ||

// bài toán xếp loại
function diem() {
  const mark = prompt("nhập điểm vào đây");

  switch (true) {
    case mark >= 8:
      alert("học sinh giỏi");
      break;
    case mark >= 7:
      alert("học sinh khá");
      break;
    case mark >= 5:
      alert("học sinh trung bình");
      break;
    default:
      alert("học sinh yếu");
      break;
  }
}

// Tính tiền điện

function ElectricityBill() {
  const Bill = Number(prompt("nhập số điện vào"));

  const bac1 = 1500;
  const bac2 = 1700;
  const bac3 = 2000;
  const bac4 = 2500;
  const bac5 = 2800;
  const bac6 = 3000;

//   let = D;

  if (Bill >= 50) {
   let D = Bill * bac1;
    alert("SỐ tiền điện là:"+ D);
  } else if (Bill <= 100) {
   let D = 50 * bac1+((Bill - 50)) * bac2;
    alert("số tiền điện là:" + D);
  } else if (Bill <= 200) {
   let D = 50 * bac1 + 50 * bac2 + ((Bill - 100)) * bac3;
    alert("số tiền điện là:" + D);
  } else if (Bill <= 300) {
   let D = 50 * bac1 + 50 * bac2 + 100 * bac3 + ((Bill - 200)) * bac4;
    alert("số tiền điện là:" + D);
  } else if (Bill <= 400) {
   let D = 50 * bac1 + 50 * bac2 + 100 * bac3 + 100 * bac4 + ((Bill - 300)) * bac5;
    alert("số tiền điện là:" + D);
  } else if (Bill > 400) {
   let D =
      50 * bac1 +
      50 * bac2 +
      100 * bac3 +
      100 * bac4 +
      100 * bac5 +
      ((Bill - 400)) * bac6;
    alert("Số tiền điện là:" + D);
  }
}
