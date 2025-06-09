-- Bảng tblThanhVien
INSERT INTO tblThanhVien (ID, username, password, ten, ngay_sinh, email, so_dien_thoai, dia_chi) VALUES
('TV001', 'nguyenvana', 'password123', 'Nguyen Van A', '1990-05-15', 'nguyenvana@email.com', '0905123456', '123 Duong 1, Quan 1, TP HCM'),
('TV002', 'tranthib', 'pass456', 'Tran Thi B', '1985-10-20', 'tranthib@email.com', '0916234567', '456 Duong 2, Quan 2, TP HCM'),
('TV003', 'lethic', 'pass789', 'Le Thi C', '1995-03-25', 'lethic@email.com', '0927345678', '789 Duong 3, Quan 3, TP HCM'),
('TV004', 'phamvand', 'pass101', 'Pham Van D', '1988-07-30', 'phamvand@email.com', '0938456789', '101 Duong 4, Quan 4, TP HCM'),
('TV005', 'hoangvane', 'pass202', 'Hoang Van E', '1980-12-10', 'hoangvane@email.com', '0949567890', '202 Duong 5, Quan 5, TP HCM');

-- Bảng tblKhachHang
INSERT INTO tblKhachHang (tblThanhVienID) VALUES
('TV001'),
('TV002');

-- Bảng tblCTV
INSERT INTO tblCTV (tblThanhVienID) VALUES
('TV003');

-- Bảng tblNVCuaHang
INSERT INTO tblNVCuaHang (tblThanhVienID, vi_tri) VALUES
('TV004', 'Nhan vien ban hang'),
('TV005', 'Quan ly');

-- Bảng tblQuanLy
INSERT INTO tblQuanLy (tblNVCuaHangtblThanhVienID) VALUES
('TV005');

-- Bảng tblNhanVien
INSERT INTO tblNhanVien (tblNVCuaHangtblThanhVienID) VALUES
('TV004');

-- Bảng tblXe
INSERT INTO tblXe (ID, hang, ten, nam_san_xuat, loai_hop_so, so_cho, mau_sac, loai_nhien_lieu, gia, bien_so, ghi_chu) VALUES
('XE001', 'Toyota', 'Camry', 2020, 'Tu dong', 5, 'Den', 'Xang', 1000000000.00, '51A-12345', 'Xe moi'),
('XE002', 'Honda', 'Civic', 2019, 'Tu dong', 5, 'Trang', 'Xang', 900000000.00, '51B-67890', 'Xe da qua su dung'),
('XE003', 'Hyundai', 'Tucson', 2021, 'Tu dong', 7, 'Xanh', 'Dau', 1100000000.00, '51C-54321', 'Xe moi');

-- Bảng tblXeThue
INSERT INTO tblXeThue (ID, tblXeID, gia, ngay_bat_dau, ngay_ket_thuc, so_luong, ghi_chu) VALUES
('XT001', 'XE001', 500000.00, '2025-06-10', '2025-06-15', 1, 'Thue 5 ngay'),
('XT002', 'XE002', 450000.00, '2025-06-12', '2025-06-14', 1, 'Thue 3 ngay'),
('XT003', 'XE003', 600000.00, '2025-06-15', '2025-06-20', 1, 'Thue 5 ngay');

-- Bảng tblDonThue
INSERT INTO tblDonThue (ID, tblKhachHangtblThanhVienID, tblXeThueID, so_luong, ngay_dat, ghi_chu, tra_donNV, tra_donKH) VALUES
('DT001', 'TV001', 'XT001', 1, '2025-06-09', 'Dat truoc', FALSE, FALSE),
('DT002', 'TV002', 'XT002', 1, '2025-06-11', 'Dat truoc', FALSE, FALSE),
('DT003', 'TV001', 'XT003', 1, '2025-06-14', 'Dat truoc', FALSE, FALSE);

-- Bảng tblHoaDon
INSERT INTO tblHoaDon (ID, tblDonThueID, tblKhachHangtblThanhVienID, ghi_chu) VALUES
('HD001', 'DT001', 'TV001', 'Hoa don thue xe'),
('HD002', 'DT002', 'TV002', 'Hoa don thue xe'),
('HD003', 'DT003', 'TV001', 'Hoa don thue xe');

-- Bảng tblHDPhu
INSERT INTO tblHDPhu (ID, tblHoaDonID, tblNhanVientblNVCuaHangtblThanhVienID, gia) VALUES
('HDP001', 'HD001', 'TV004', 200000.00),
('HDP002', 'HD002', 'TV004', 150000.00),
('HDP003', 'HD003', 'TV004', 300000.00);

-- Bảng tblLoi
INSERT INTO tblLoi (ID, ten, mo_ta, gia) VALUES
('LOI001', 'Loi dong co', 'Dong co khong khoi dong', 1000000.00),
('LOI002', 'Loi phanh', 'Phanh khong an', 500000.00),
('LOI003', 'Loi den', 'Den pha khong sang', 200000.00);

-- Bảng tblLoiTrenXe
INSERT INTO tblLoiTrenXe (ID, tblXeThueID, tblLoiID, gia, so_luong) VALUES
('LTX001', 'XT001', 'LOI001', 1000000.00, 1),
('LTX002', 'XT002', 'LOI002', 500000.00, 1),
('LTX003', 'XT003', 'LOI003', 200000.00, 1);

-- Bảng tblDichVu
INSERT INTO tblDichVu (ID, ten, mo_ta, gia) VALUES
('DV001', 'Rua xe', 'Rua xe ngoai that', 100000.00),
('DV002', 'Thay dau', 'Thay dau dong co', 500000.00),
('DV003', 'Kiem tra xe', 'Kiem tra toan bo xe', 200000.00);

-- Bảng tblDVSuDung
INSERT INTO tblDVSuDung (ID, tblXeThueID, tblDichVuID, so_luong, gia) VALUES
('DVS001', 'XT001', 'DV001', 1, 100000.00),
('DVS002', 'XT002', 'DV002', 1, 500000.00),
('DVS003', 'XT003', 'DV003', 1, 200000.00);

-- Bảng tblTheChap
INSERT INTO tblTheChap (ID, mo_ta, gia) VALUES
('TC001', 'The chap CMND', 1000000.00),
('TC002', 'The chap GPLX', 800000.00),
('TC003', 'The chap so ho khau', 1200000.00);

-- Bảng tblTheChapTrenDT
INSERT INTO tblTheChapTrenDT (ID, tblDonThueID, tblTheChapID, so_luong, gia) VALUES
('TCDT001', 'DT001', 'TC001', 1, 1000000.00),
('TCDT002', 'DT002', 'TC002', 1, 800000.00),
('TCDT003', 'DT003', 'TC003', 1, 1200000.00);

-- Bảng tblXeCTV
INSERT INTO tblXeCTV (tblCTVtblThanhVienID, tblXeID) VALUES
('TV003', 'XE001'),
('TV003', 'XE002'),
('TV003', 'XE003');