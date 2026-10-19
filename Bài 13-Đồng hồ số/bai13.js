function capNhatDongHoVaLoiChao() {
  const thoiGianHienTai = new Date();

  const gio = thoiGianHienTai.getHours();
  const phut = thoiGianHienTai.getMinutes();
  const giay = thoiGianHienTai.getSeconds();

  capNhatAnhSo("gio-chuc", "gio-don-vi", gio);
  capNhatAnhSo("phut-chuc", "phut-don-vi", phut);
  capNhatAnhSo("giay-chuc", "giay-don-vi", giay);

  let loiChao = "";
  if (gio >= 5 && gio < 12) {
    loiChao = "Chào buổi sáng!";
  } else if (gio >= 12 && gio < 18) {
    loiChao = "Chào buổi chiều!";
  } else {
    loiChao = "Chào buổi tối!";
  }

  document.getElementById("hien-thi-loi-chao").innerText = loiChao;
}

function capNhatAnhSo(idChuc, idDonVi, giaTri) {
  const chuc = Math.floor(giaTri / 10);
  const donVi = giaTri % 10;
  document.getElementById(idChuc).src = `0${chuc}.gif`;
  document.getElementById(idDonVi).src = `0${donVi}.gif`;
}

setInterval(capNhatDongHoVaLoiChao, 1000);

capNhatDongHoVaLoiChao();
