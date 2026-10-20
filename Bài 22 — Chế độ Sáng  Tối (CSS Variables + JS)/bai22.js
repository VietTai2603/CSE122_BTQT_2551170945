// Hàm xử lý sự kiện khi người dùng gạt nút chuyển đổi giao diện
function doiGiaoDien() {
  const theBody = document.body;
  const nutGat = document.getElementById("nut-gats-giao-dien");
  const nhanTrangThai = document.getElementById("nhan-trang-thai");

  if (nutGat.checked) {
    theBody.classList.add("toi");
    nhanTrangThai.innerText = "Đây là giao diện ở chế độ TỐI (đang bật).";
  } else {
    theBody.classList.remove("toi");
    nhanTrangThai.innerText = "Đây là giao diện ở chế độ SÁNG (đang bật).";
  }
}
