import {
  TinhTongDiem,
  diemKV,
  diemDT,
  KetQuaTS,
  CalTienDien,
  TinhThuNhap,
  Thuefinal,
  tinhTienCap,
} from "./method.js";

// <!-- Quản lý tuyển sinh  -->

document.getElementById("Ketqua").onclick = function () {
  const diemChuan = document.getElementById("diemChuan").value * 1;
  const khuVuc = document.getElementById("khuVuc").value;
  const doiTuong = document.getElementById("doiTuong").value * 1;
  let tongDiem = 0;
  const diemMon1 = document.getElementById("diemMon1").value * 1;
  const diemMon2 = document.getElementById("diemMon2").value * 1;
  const diemMon3 = document.getElementById("diemMon3").value * 1;

  let diemcongKV = diemKV(khuVuc) * 1;
  let diemcongDT = diemDT(doiTuong) * 1;

  tongDiem = TinhTongDiem(diemMon1, diemMon2, diemMon3);

  let ketqua = KetQuaTS(diemChuan, tongDiem, diemcongKV, diemcongDT);

  document.getElementById("KetQuaTS").innerHTML = ketqua;
};

// <!-- Tính Tiền Điện  -->
document.getElementById("tienDien").onclick = function () {
  const hoTen = document.getElementById("hoTen").value;

  const soKW = document.getElementById("soKW").value * 1;

  let tongTienDien = CalTienDien(soKW);

  document.getElementById(
    "TinhTienDien"
  ).innerHTML = `Họ và tên : ${hoTen} ; Tiền điện: ${tongTienDien} VNĐ`;
};

// <!-- Tính thuế thu nhập cá nhân  -->
document.getElementById("tienThue").onclick = function () {
  const hovaTen = document.getElementById("hovaTen").value;

  const thuNhap = document.getElementById("tongThuNhap").value * 1;

  const slNguoi = document.getElementById("soNguoi").value * 1;

  let thuNhapChiuThue = TinhThuNhap(thuNhap, slNguoi);

  let thueTNCN = Thuefinal(thuNhapChiuThue);

  document.getElementById(
    "TinhTienThue"
  ).innerHTML = `Thuế thu nhập cá nhân của ${hovaTen} là ${thueTNCN} triệu`;
};

// <!-- Tính tiền cáp  -->

const customerTypeInput = document.getElementById("customerType");
const connectionDiv = document.getElementById("connections");

customerTypeInput.addEventListener("change", function () {
  const selectedValue = customerTypeInput.value.trim().toLowerCase();

  if (selectedValue == "doanhnghiep") {
    connectionDiv.classList.remove("hidden");
  } else {
    connectionDiv.classList.add("hidden");
  }
});

document.getElementById("tienCap").onclick = function () {
  const maKH = document.getElementById("maKhachhang").value;
  const loaiKH = customerTypeInput.value;
  const soKenh = document.getElementById("soKenhCaoCap").value * 1;
  const soKetNoi = connectionDiv.value * 1;

  let ketqua = 0;

  ketqua = tinhTienCap(loaiKH, soKenh, soKetNoi);
  document.getElementById(
    "TinhTienCap"
  ).innerHTML = `Mã khách hàng: ${maKH} ; Tiền cáp: $${ketqua}`;
};
