-- Bảng tblThanhVien
INSERT INTO tblThanhVien (ID, username, password, ten, ngay_sinh, email, so_dien_thoai, dia_chi) VALUES
(1, 'user_kh1', 'pass123', 'Nguyen Van A', '1990-05-15', 'vana@gmail.com', '0912345678', '123 Duong Ba Trac, TP HCM'),
(2, 'user_kh2', 'pass456', 'Tran Thi B', '1985-08-20', 'thib@gmail.com', '0987654321', '456 Le Loi, Ha Noi'),
(3, 'user_nv', 'pass789', 'Le Van C', '1995-03-10', 'vanc@gmail.com', '0909123456', '789 Tran Hung Dao, Da Nang'),
(4, 'user_ql', 'pass101', 'Pham Thi D', '1980-12-25', 'thid@gmail.com', '0935123456', '101 Nguyen Trai, TP HCM');

-- Bảng tblKhachHang
INSERT INTO tblKhachHang (tblThanhVienID) VALUES
(1),
(2);

-- Bảng tblCTV
INSERT INTO tblCTV (tblThanhVienID) VALUES
(3);

-- Bảng tblNVCuaHang
INSERT INTO tblNVCuaHang (tblThanhVienID, vi_tri) VALUES
(3, 'Nhan vien ky thuat'),
(4, 'Quan ly cua hang');

-- Bảng tblQuanLy
INSERT INTO tblQuanLy (tblNVCuaHangtblThanhVienID) VALUES
(4);

-- Bảng tblNhanVien
INSERT INTO tblNhanVien (tblNVCuaHangtblThanhVienID) VALUES
(3);

-- Bảng tblXe
INSERT INTO tblXe (ID, hang, ten, nam_san_xuat, loai_hop_so, so_cho, mau_sac, loai_nhien_lieu, gia, bien_so, ghi_chu) VALUES
(1, 'Toyota', 'Camry', 2020, 'Tu dong', 5, 'Den', 'Xang', 1500000.00, '51H-12345', 'Xe moi'),
(2, 'Honda', 'Civic', 2019, 'So san', 5, 'Trang', 'Xang', 1200000.00, '51G-67890', 'Xe da qua su dung'),
(3, 'Hyundai', 'Tucson', 2021, 'Tu dong', 7, 'Do', 'Dau', 1800000.00, '51F-54321', 'Xe cao cap');

-- Bảng tblXeThue
INSERT INTO tblXeThue (ID, tblXeID, gia, ngay_bat_dau, ngay_ket_thuc, so_luong, ghi_chu) VALUES
(1, 1, 1500000.00, '2025-06-01', '2025-06-03', 1, 'Thue ngan han'),
(2, 2, 1200000.00, '2025-06-02', '2025-06-05', 1, 'Thue dai han'),
(3, 3, 1800000.00, '2025-06-03', '2025-06-04', 1, 'Thue cao cap');

-- Bảng tblDonThue
INSERT INTO tblDonThue (ID, tblKhachHangtblThanhVienID, tblXeThueID, so_luong, gia, tong_so_luong, ngay_dat, ghi_chu) VALUES
(1, 1, 1, 1, 1500000.00, 1, '2025-05-30', 'Don thue xe Camry'),
(2, 2, 2, 1, 1200000.00, 1, '2025-05-31', 'Don thue xe Civic'),
(3, 1, 3, 1, 1800000.00, 1, '2025-06-01', 'Don thue xe Tucson');

-- Bảng tblHoaDon
INSERT INTO tblHoaDon (ID, tblDonThueID, tblKhachHangtblThanhVienID, gia, ngay_thanh_toan, phuong_thuc, ghi_chu) VALUES
(1, 1, 1, 1500000.00, '2025-06-03', 'Tien mat', 'Thanh toan don thue Camry'),
(2, 2, 2, 1200000.00, '2025-06-05', 'Chuyen khoan', 'Thanh toan don thue Civic'),
(3, 3, 1, 1800000.00, '2025-06-04', 'The tin dung', 'Thanh toan don thue Tucson');

-- Bảng tblHDPhu
INSERT INTO tblHDPhu (ID, tblHoaDonID, tblNhanVientblNVCuaHangtblThanhVienID, gia) VALUES
(1, 1, 3, 200000.00),
(2, 2, 3, 150000.00),
(3, 3, 3, 250000.00);

-- Bảng tblLoi
INSERT INTO tblLoi (ID, ten, mo_ta) VALUES
(1, 'Hong banh xe', 'Banh xe bi xit'),
(2, 'Hong den pha', 'Den pha khong sang'),
(3, 'Hong dieu hoa', 'Dieu hoa khong lanh');

-- Bảng tblLoiTrenXe
INSERT INTO tblLoiTrenXe (ID, tblXeThueID, tblLoiID, so_luong) VALUES
(1, 1, 1, 1),
(2, 2, 2, 1),
(3, 3, 3, 1);

-- Bảng tblDichVu
INSERT INTO tblDichVu (ID, ten, mo_ta, gia) VALUES
(1, 'Rua xe', 'Rua xe ngoai that', 100000.00),
(2, 'Thay dau', 'Thay dau dong co', 500000.00),
(3, 'Kiem tra xe', 'Kiem tra toan bo xe', 200000.00);

-- Bảng tblDVSuDung
INSERT INTO tblDVSuDung (ID, tblXeThueID, tblDichVuID, so_luong, gia) VALUES
(1, 1, 1, 1, 100000.00),
(2, 2, 2, 1, 500000.00),
(3, 3, 3, 1, 200000.00);

-- Bảng tblTheChap
INSERT INTO tblTheChap (ID, mo_ta) VALUES
(1, 'CMND so 123456789'),
(2, 'Bang lai xe A1'),
(3, 'Ho chieu so 987654321');

-- Bảng tblTheChapTrenDT
INSERT INTO tblTheChapTrenDT (ID, tblDonThueID, tblTheChapID, so_luong, gia) VALUES
(1, 1, 1, 1, 0.00),
(2, 2, 2, 1, 0.00),
(3, 3, 3, 1, 0.00);

-- Bảng tblXeCTV
INSERT INTO tblXeCTV (tblCTVtblThanhVienID, tblXeID) VALUES
(3, 1),
(3, 2);