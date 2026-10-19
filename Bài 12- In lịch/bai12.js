document.addEventListener("DOMContentLoaded", function () {
  const nutInLich = document.getElementById("nut-in-lich");

  nutInLich.addEventListener("click", xuLyInLich);

  function xuLyInLich() {
    const ngay = parseInt(document.getElementById("nhap-ngay").value);
    const thang = parseInt(document.getElementById("nhap-thang").value) - 1;
    const nam = parseInt(document.getElementById("nhap-nam").value);

    if (isNaN(ngay) || isNaN(thang) || isNaN(nam)) {
      alert("Vui lòng nhập đầy đủ Ngày, Tháng, Năm!");
      return;
    }

    const ngayChon = new Date(nam, thang, ngay);
    const cacThu = [
      "Chủ nhật",
      "Thứ hai",
      "Thứ ba",
      "Thứ tư",
      "Thứ năm",
      "Thứ sáu",
      "Thứ bảy",
    ];
    const tenThu = cacThu[ngayChon.getDay()];

    const gioHienTai = new Date().getHours();
    let loiChao = "";

    if (gioHienTai >= 5 && gioHienTai < 12) {
      loiChao = "Chào buổi sáng!";
    } else if (gioHienTai >= 12 && gioHienTai < 18) {
      loiChao = "Chào buổi chiều!";
    } else {
      loiChao = "Chào buổi tối!";
    }

    document.getElementById("hien-thi-nam").innerText = nam;
    document.getElementById("hien-thi-thang").innerText =
      "Tháng " + (thang + 1);
    document.getElementById("hien-thi-ngay").innerText = ngay;
    document.getElementById("hien-thi-thu").innerText = tenThu;
    document.getElementById("hien-thi-loi-chao").innerText = loiChao;
  }
});
