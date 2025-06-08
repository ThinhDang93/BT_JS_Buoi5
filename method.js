// <!-- Quản lý tuyển sinh  -->

export function TinhTongDiem(diemMon1, diemMon2, diemMon3) {
  if (diemMon1 == 0 || diemMon2 == 0 || diemMon3 == 0) return -1;
  else return diemMon1 + diemMon2 + diemMon3;
}

export function diemKV(khuVuc) {
  switch (khuVuc) {
    case "A":
      return 2;
    case "B":
      return 1;
    case "C":
      return 0.5;
    case "X":
      return 0;
  }
}

export function diemDT(doiTuong) {
  switch (doiTuong) {
    case 1:
      return 2.5;
    case 2:
      return 1.5;
    case 3:
      return 1;
    case 0:
      return 0;
  }
}

export function KetQuaTS(diemChuan, tongDiem, diemKV, diemDT) {
  let diemTS = tongDiem + diemKV + diemDT;
  if (tongDiem == -1 || diemTS < diemChuan) return "Bạn đã rớt!";
  else return `Chúc mừng bạn đã đậu. Tổng điểm là ${diemTS}`;
}

// <!-- Tính Tiền Điện  -->
export function CalTienDien(soKW) {
  let tongTien = 0;

  if (soKW > 0 && soKW <= 50) tongTien = soKW * 500;
  else if (soKW > 50 && soKW <= 100) tongTien = 50 * 500 + (soKW - 50) * 650;
  else if (soKW > 100 && soKW <= 200)
    tongTien = 50 * 500 + 50 * 650 + (soKW - 100) * 850;
  else if (soKW > 200 && soKW <= 350)
    tongTien = 50 * 500 + 50 * 650 + 100 * 850 + (soKW - 200) * 1100;
  else
    tongTien =
      50 * 500 + 50 * 650 + 100 * 850 + 150 * 1100 + (soKW - 350) * 1300;

  return tongTien;
}

// <!-- Tính thuế thu nhập cá nhân  -->

export function TinhThuNhap(thuNhap, slNguoi) {
  let thuNhapChiuThue = 0;
  thuNhapChiuThue = thuNhap - 4 - slNguoi * 1.6;
  return thuNhapChiuThue;
}

export function Thuefinal(thuNhapChiuThue) {
  let thueTNCN = 0;

  if (thuNhapChiuThue > 0 && thuNhapChiuThue <= 60)
    thueTNCN = (thuNhapChiuThue * 5) / 100;
  else if (thuNhapChiuThue > 61 && thuNhapChiuThue <= 120)
    thueTNCN = (thuNhapChiuThue * 10) / 100;
  else if (thuNhapChiuThue > 121 && thuNhapChiuThue <= 210)
    thueTNCN = (thuNhapChiuThue * 15) / 100;
  else if (thuNhapChiuThue > 210 && thuNhapChiuThue <= 384)
    thueTNCN = (thuNhapChiuThue * 20) / 100;
  else if (thuNhapChiuThue > 384 && thuNhapChiuThue <= 624)
    thueTNCN = (thuNhapChiuThue * 25) / 100;
  else if (thuNhapChiuThue > 624 && thuNhapChiuThue <= 960)
    thueTNCN = (thuNhapChiuThue * 30) / 100;
  else thueTNCN = (thuNhapChiuThue * 35) / 100;

  return thueTNCN;
}

// <!-- Tính tiền cáp  -->
export function tinhTienCap(loaiKH, soKenh, soKetNoi) {
  let kq = 0;

  if (loaiKH == "nhadan") kq = 25 + 7.5 * soKenh;
  else if (loaiKH == "doanhnghiep" && soKetNoi <= 10) kq = 90 + 50 * soKenh;
  else if (loaiKH == "doanhnghiep" && soKetNoi > 10)
    kq = 90 + 50 * soKenh + (soKetNoi - 10) * 5;

  return kq;
}
