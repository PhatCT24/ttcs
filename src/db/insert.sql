INSERT INTO tblThanhVien (ID, username, password, ten, ngay_sinh, email, so_dien_thoai, dia_chi) VALUES
('TV001', 'user1', 'pass123', 'Nguyen Van A', '1990-05-15', 'vana@gmail.com', '0912345678', '123 Duong Ba Trac, TP HCM'),
('TV002', 'user2', 'pass456', 'Tran Thi B', '1985-08-20', 'thib@gmail.com', '0987654321', '456 Le Loi, Ha Noi'),
('TV003', 'user3', 'pass789', 'Le Van C', '1995-03-10', 'vanc@gmail.com', '0909123456', '789 Tran Hung Dao, Da Nang');

INSERT INTO tblKhachHang (tblThanhVienID) VALUES
('TV001'),
('TV002');

INSERT INTO tblCTV (tblThanhVienID) VALUES
('TV003');

INSERT INTO tblNVCuaHang (tblThanhVienID, vi_tri) VALUES
('TV002', 'Nhan vien ban hang'),
('TV003', 'Nhan vien ky thuat');

INSERT INTO tblQuanLy (tblNVCuaHangtblThanhVienID) VALUES
('TV002');

INSERT INTO tblNhanVien (tblNVCuaHangtblThanhVienID) VALUES
('TV003');

INSERT INTO tblXe (ID, hang, ten, nam_san_xuat, loai_hop_so, so_cho, mau_sac, loai_nhien_lieu, gia, bien_so, ghi_chu) VALUES
('XE001', 'Toyota', 'Camry', 2020, 'Tu dong', 5, 'Den', 'Xang', 1500000.00, '51H-12345', 'Xe moi'),
('XE002', 'Honda', 'Civic', 2019, 'So san', 5, 'Trang', 'Xang', 1200000.00, '51G-67890', 'Xe da qua su dung'),
('XE003', 'Hyundai', 'Tucson', 2021, 'Tu dong', 7, 'Do', 'Dau', 1800000.00, '51F-54321', 'Xe cao cap');

INSERT INTO tblXeThue (ID, tblXeID, gia, ngay_bat_dau, ngay_ket_thuc, so_luong, ghi_chu) VALUES
('XT001', 'XE001', 1500000.00, '2025-06-01', '2025-06-03', 1, 'Thue ngan han'),
('XT002', 'XE002', 1200000.00, '2025-06-02', '2025-06-05', 1, 'Thue dai han'),
('XT003', 'XE003', 1800000.00, '2025-06-03', '2025-06-04', 1, 'Thue cao cap');

INSERT INTO tblDonThue (ID, tblKhachHangtblThanhVienID, tblXeThueID, so_luong, gia, tong_so_luong, ngay_dat, ghi_chu) VALUES
('DT001', 'TV001', 'XT001', 1, 1500000.00, 1, '2025-05-30', 'Don thue xe Camry'),
('DT002', 'TV002', 'XT002', 1, 1200000.00, 1, '2025-05-31', 'Don thue xe Civic'),
('DT003', 'TV001', 'XT003', 1, 1800000.00, 1, '2025-06-01', 'Don thue xe Tucson');

INSERT INTO tblHoaDon (ID, tblDonThueID, tblKhachHangtblThanhVienID, gia, ngay_thanh_toan, phuong_thuc, ghi_chu) VALUES
('HD001', 'DT001', 'TV001', 1500000.00, '2025-06-03', 'Tien mat', 'Thanh toan don thue Camry'),
('HD002', 'DT002', 'TV002', 1200000.00, '2025-06-05', 'Chuyen khoan', 'Thanh toan don thue Civic'),
('HD003', 'DT003', 'TV001', 1800000.00, '2025-06-04', 'The tin dung', 'Thanh toan don thue Tucson');

INSERT INTO tblHDPhu (ID, tblHoaDonID, tblNhanVientblNVCuaHangtblThanhVienID, gia) VALUES
('HDP001', 'HD001', 'TV003', 200000.00),
('HDP002', 'HD002', 'TV003', 150000.00),
('HDP003', 'HD003', 'TV003', 250000.00);

INSERT INTO tblLoi (ID, ten, mo_ta) VALUES
('LOI001', 'Hong banh xe', 'Banh xe bi xit'),
('LOI002', 'Hong den pha', 'Den pha khong sang'),
('LOI003', 'Hong dieu hoa', 'Dieu hoa khong lanh');

INSERT INTO tblLoiTrenXe (ID, tblXeThueID, tblLoiID, so_luong) VALUES
('LTX001', 'XT001', 'LOI001', 1),
('LTX002', 'XT002', 'LOI002', 1),
('LTX003', 'XT003', 'LOI003', 1);

INSERT INTO tblDichVu (ID, ten, mo_ta, gia) VALUES
('DV001', 'Rua xe', 'Rua xe ngoai that', 100000.00),
('DV002', 'Thay dau', 'Thay dau dong co', 500000.00),
('DV003', 'Kiem tra xe', 'Kiem tra toan bo xe', 200000.00);

INSERT INTO tblDVSuDung (ID, tblXeThueID, tblDichVuID, so_luong, gia) VALUES
('DVS001', 'XT001', 'DV001', 1, 100000.00),
('DVS002', 'XT002', 'DV002', 1, 500000.00),
('DVS003', 'XT003', 'DV003', 1, 200000.00);

INSERT INTO tblTheChap (ID, mo_ta) VALUES
('TC001', 'CMND so 123456789'),
('TC002', 'Bang lai xe A1'),
('TC003', 'Ho chieu so 987654321');

INSERT INTO tblTheChapTrenDT (ID, tblDonThueID, tblTheChapID, so_luong, gia) VALUES
('TCDT001', 'DT001', 'TC001', 1, 0.00),
('TCDT002', 'DT002', 'TC002', 1, 0.00),
('TCDT003', 'DT003', 'TC003', 1, 0.00);

INSERT INTO tblXeCTV (tblCTVtblThanhVienID, tblXeID) VALUES
('TV003', 'XE001'),
('TV003', 'XE002');