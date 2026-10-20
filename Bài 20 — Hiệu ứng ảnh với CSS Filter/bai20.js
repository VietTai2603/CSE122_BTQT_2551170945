function doiHieuUng(nutBam, tenClassHieuUng) {
  const anhHoa = document.getElementById("anh-hoa-hong");
  const danhSachNut = document.querySelectorAll(".nut-hieu-ung");
  danhSachNut.forEach(function (nut) {
    nut.classList.remove("da-chon");
  });

  nutBam.classList.add("da-chon");

  anhHoa.className = "anh-hoa";

  anhHoa.classList.add(tenClassHieuUng);
}
