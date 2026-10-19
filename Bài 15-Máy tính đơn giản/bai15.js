let bieuThucHienTai = "";

function themKyTu(kyTu) {
  bieuThucHienTai += kyTu;
  capNhatManHinh();
}

function xoaManHinh() {
  bieuThucHienTai = "";
  document.getElementById("bieu-thuc").innerText = "";
  document.getElementById("ket-qua").innerText = "0";
}

function capNhatManHinh() {
  document.getElementById("bieu-thuc").innerText = bieuThucHienTai;
}

function tinhKetQua() {
  try {
    let bieuThucTinh = bieuThucHienTai.replace(/×/g, "*").replace(/÷/g, "/");

    let ketQua = eval(bieuThucTinh);

    document.getElementById("ket-qua").innerText = ketQua;

    bieuThucHienTai = ketQua.toString();
  } catch (error) {
    document.getElementById("ket-qua").innerText = "Lỗi";
    bieuThucHienTai = "";
  }
}
