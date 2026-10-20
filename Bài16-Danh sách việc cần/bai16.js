let danhSachCongViec = [
  { ten: "Đọc chương HTML5 cơ bản", daHoanThanh: true },
  { ten: "Làm bài tập CSS Grid", daHoanThanh: false },
  { ten: "Quay video OBS nộp bài", daHoanThanh: false },
];

hienThiDanhSach();

function themCongViec() {
  const oInput = document.getElementById("o-nhap-viec");
  const tenMoi = oInput.value.trim();

  if (tenMoi === "") {
    alert("Vui lòng nhập tên công việc!");
    return;
  }

  danhSachCongViec.push({
    ten: tenMoi,
    daHoanThanh: false,
  });

  oInput.value = "";

  hienThiDanhSach();
}

function toggleHoanThanh(viTri) {
  danhSachCongViec[viTri].daHoanThanh = !danhSachCongViec[viTri].daHoanThanh;
  hienThiDanhSach();
}
function xoaCongViec(viTri) {
  danhSachCongViec.splice(viTri, 1);
  hienThiDanhSach();
}

function hienThiDanhSach() {
  const ulDanhSach = document.getElementById("danh-sach-viec");
  ulDanhSach.innerHTML = "";

  let soLuongChuaXong = 0;

  danhSachCongViec.forEach(function (congViec, viTri) {
    if (!congViec.daHoanThanh) {
      soLuongChuaXong++;
    }

    const theLi = document.createElement("li");
    theLi.className = "muc-cong-viec";
    if (congViec.daHoanThanh) {
      theLi.classList.add("hoan-thanh");
    }
    theLi.innerHTML = `
            <div class="noi-dung-muc" onclick="toggleHoanThanh(${viTri})">
                <input type="checkbox" ${congViec.daHoanThanh ? "checked" : ""}>
                <span class="ten-cong-viec">${congViec.ten}</span>
            </div>
            <button class="nut-xoa" onclick="xoaCongViec(${viTri})">Xoá</button>
        `;

    ulDanhSach.appendChild(theLi);
  });

  document.getElementById("dem-chua-hoan-thành").innerText =
    `Còn ${soLuongChuaXong} việc chưa hoàn thành`;
}
