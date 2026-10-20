// Hàm chính kiểm tra toàn bộ Form khi người dùng bấm nút Đăng ký
function kiemTraForm(event) {
  // 1. Lấy giá trị từ các ô input và loại bỏ khoảng trắng thừa ở hai đầu
  const hoTen = document.getElementById("ho-ten").value.trim();
  const email = document.getElementById("email").value.trim();
  const matKhau = document.getElementById("mat-khau").value.trim();
  const xacNhanMatKhau = document
    .getElementById("xac-nhan-mat-khau")
    .value.trim();

  // Biến cờ đánh dấu trạng thái hợp lệ (mặc định là true)
  let hopLe = true;

  // --- KIỂM TRA HỌ TÊN ---
  const oHoTen = document.getElementById("ho-ten");
  const loiHoTen = document.getElementById("loi-ho-ten");
  if (hoTen === "") {
    hienThiLoi(oHoTen, loiHoTen, "Họ tên không được để trống!");
    hopLe = false;
  } else {
    hienThiThanhCong(oHoTen, loiHoTen);
  }

  // --- KIỂM TRA EMAIL (Dùng biểu thức chính quy - Regex) ---
  const oEmail = document.getElementById("email");
  const loiEmail = document.getElementById("loi-email");
  // Biểu thức chính quy kiểm tra định dạng email chuẩn
  const mauEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (email === "") {
    hienThiLoi(oEmail, loiEmail, "Email không được để trống!");
    hopLe = false;
  } else if (!mauEmail.test(email)) {
    hienThiLoi(
      oEmail,
      loiEmail,
      "Email không đúng định dạng (VD: example@gmail.com)!",
    );
    hopLe = false;
  } else {
    hienThiThanhCong(oEmail, loiEmail);
  }

  // --- KIỂM TRA MẬT KHẨU (Tối thiểu 6 ký tự) ---
  const oMatKhau = document.getElementById("mat-khau");
  const loiMatKhau = document.getElementById("loi-mat-khau");
  if (matKhau === "") {
    hienThiLoi(oMatKhau, loiMatKhau, "Mật khẩu không được để trống!");
    hopLe = false;
  } else if (matKhau.length < 6) {
    hienThiLoi(oMatKhau, loiMatKhau, "Mật khẩu phải từ 6 ký tự trở lên!");
    hopLe = false;
  } else {
    hienThiThanhCong(oMatKhau, loiMatKhau);
  }

  // --- KIỂM TRA XÁC NHẬN MẬT KHẨU ---
  const oXacNhan = document.getElementById("xac-nhan-mat-khau");
  const loiXacNhan = document.getElementById("loi-xac-nhan");
  if (xacNhanMatKhau === "") {
    hienThiLoi(oXacNhan, loiXacNhan, "Vui lòng xác nhận lại mật khẩu!");
    hopLe = false;
  } else if (xacNhanMatKhau !== matKhau) {
    hienThiLoi(oXacNhan, loiXacNhan, "Xác nhận mật khẩu không khớp!");
    hopLe = false;
  } else {
    hienThiThanhCong(oXacNhan, loiXacNhan);
  }

  // 2. Nếu có bất kỳ lỗi nào (hopLe == false), chặn hành động gửi form (submit)
  if (!hopLe) {
    event.preventDefault(); // Chặn form gửi đi
    return false;
  }

  // Nếu mọi dữ liệu đều hợp lệ hoàn toàn
  alert("Đăng ký tài khoản thành công!");
  return true;
}

// Hàm phụ trợ khi ô nhập bị lỗi
function hienThiLoi(inputElement, errorElement, thongBao) {
  inputElement.classList.add("input-loi");
  inputElement.classList.remove("input-hop-le");
  errorElement.innerText = thongBao;
}

// Hàm phụ trợ khi ô nhập hợp lệ thành công
function hienThiThanhCong(inputElement, errorElement) {
  inputElement.classList.remove("input-loi");
  inputElement.classList.add("input-hop-le");
  errorElement.innerText = "";
}
