USE webthuexe;

INSERT INTO tblThanhVien (ID, username, password, ten, ngay_sinh, email, so_dien_thoai, dia_chi) VALUES
('TV001', 'khachhang1', 'matkhau123', N'Nguyen Van An', '1990-05-15', 'an.nguyen@email.com', '0901234567', N'123 Duong Lang, Ha Noi'),
('TV002', 'ctv1', 'matkhau456', N'Tran Thi Binh', '1985-08-20', 'binh.tran@email.com', '0912345678', N'45 Nguyen Hue, TP HCM'),
('TV003', 'nhanvien1', 'matkhau789', N'Le Van Cuong', '1992-03-10', 'cuong.le@email.com', '0923456789', N'78 Le Loi, Da Nang'),
('TV004', 'quanly1', 'matkhau101', N'Pham Thi Dung', '1980-11-25', 'dung.pham@email.com', '0934567890', N'56 Tran Phu, Nha Trang'),
('TV005', 'khachhang2', 'matkhau102', N'Hoang Van Em', '1995-07-30', 'em.hoang@email.com', '0945678901', N'89 Pham Van Dong, Can Tho');

INSERT INTO tblKhachHang (tblThanhVienID) VALUES
('TV001'),
('TV005'),
('TV002');

INSERT INTO tblCTV (tblThanhVienID) VALUES
('TV002'),
('TV001'),
('TV005');

INSERT INTO tblNVCuaHang (tblThanhVienID, vi_tri) VALUES
('TV003', N'Nhan vien ban hang'),
('TV004', N'Quan ly'),
('TV005', N'Nhan vien ky thuat');

INSERT INTO tblQuanLy (tblNVCuaHangtblThanhVienID) VALUES
('TV004'),
('TV003');

INSERT INTO tblNhanVien (tblNVCuaHangtblThanhVienID) VALUES
('TV003'),
('TV005');

INSERT INTO tblXe (ID, hang, ten, nam_san_xuat, loai_hop_so, so_cho, mau_sac, loai_nhien_lieu, gia, bien_so, ghi_chu) VALUES
('XE001', N'Toyota', N'Camry', 2020, N'Tu dong', 5, N'Den', N'Xang', 800000.00, '51H-12345', N'Xe moi, day du tien nghi'),
('XE002', N'Honda', N'Civic', 2019, N'Tu dong', 5, N'Trang', N'Xang', 700000.00, '51G-67890', N'Xe tiet kiem nhien lieu'),
('XE003', N'Hyundai', N'Tucson', 2021, N'Tu dong', 7, N'Xanh', N'Dau', 900000.00, '51F-54321', N'Xe SUV da dung'),
('XE004', N'Mazda', N'CX-5', 2022, N'Tu dong', 7, N'Do', N'Xang', 950000.00, '51E-98765', N'Xe cao cap, noi that da'),
('XE005', N'Ford', N'Ranger', 2020, N'So san', 5, N'Xam', N'Dau', 850000.00, '51D-11111', N'Xe ban tai manh me');

INSERT INTO tblXeThue (ID, tblXeID, gia, ngay_bat_dau, ngay_ket_thuc, so_luong, ghi_chu) VALUES
('XT001', 'XE001', 800000.00, '2025-06-10', '2025-06-12', 1, N'Thue 2 ngay'),
('XT002', 'XE002', 700000.00, '2025-06-15', '2025-06-17', 1, N'Thue ngan han'),
('XT003', 'XE003', 900000.00, '2025-06-20', '2025-06-25', 1, N'Thue dai han'),
('XT004', 'XE004', 950000.00, '2025-06-22', '2025-06-23', 1, N'Thue 1 ngay');

INSERT INTO tblDonThue (ID, tblKhachHangtblThanhVienID, tblXeThueID, so_luong, tong_so_luong, ngay_dat, ghi_chu) VALUES
('DT001', 'TV001', 'XT001', 1, 1, '2025-06-09', N'Don thue xe Camry'),
('DT002', 'TV005', 'XT002', 1, 1, '2025-06-14', N'Don thue xe Civic'),
('DT003', 'TV002', 'XT003', 1, 1, '2025-06-19', N'Don thue xe Tucson'),
('DT004', 'TV001', 'XT004', 1, 1, '2025-06-21', N'Don thue xe CX-5');

INSERT INTO tblHoaDon (ID, tblDonThueID, tblKhachHangtblThanhVienID, ngay_thanh_toan, phuong_thuc, ghi_chu) VALUES
('HD001', 'DT001', 'TV001', '2025-06-12', N'Tien mat', N'Thanh toan day du'),
('HD002', 'DT002', 'TV005', '2025-06-17', N'Chuyen khoan', N'Thanh toan online'),
('HD003', 'DT003', 'TV002', '2025-06-25', N'The tin dung', N'Thanh toan bang the');

INSERT INTO tblHDPhu (ID, tblHoaDonID, tblNhanVientblNVCuaHangtblThanhVienID, gia) VALUES
('HP001', 'HD001', 'TV003', 100000.00),
('HP002', 'HD002', 'TV005', 150000.00),
('HP003', 'HD003', 'TV003', 200000.00);

INSERT INTO tblLoi (ID, ten, mo_ta) VALUES
('LOI001', N'Vo lop', N'Vo xe bi rach'),
('LOI002', N'Guong chieu hau', N'Guong ben phai bi vo'),
('LOI003', N'Den pha', N'Den pha truoc ben trai hong');

INSERT INTO tblLoiTrenXe (ID, tblXeThueID, tblLoiID, gia, so_luong) VALUES
('LTX001', 'XT001', 'LOI001', 500000.00, 1),
('LTX002', 'XT002', 'LOI002', 300000.00, 1),
('LTX003', 'XT003', 'LOI003', 400000.00, 1);

INSERT INTO tblDichVu (ID, ten, mo_ta, gia) VALUES
('DV001', N'Rua xe', N'Rua xe ngoai that', 100000.00),
('DV002', N'Tai xe', N'Cung cap tai xe chuyen nghiep', 500000.00),
('DV003', N'Bao hiem', N'Bao hiem toan dien cho xe', 300000.00);

INSERT INTO tblDVSuDung (ID, tblXeThueID, tblDichVuID, so_luong, gia) VALUES
('DVS001', 'XT001', 'DV001', 1, 100000.00),
('DVS002', 'XT002', 'DV002', 1, 500000.00),
('DVS003', 'XT003', 'DV003', 1, 300000.00);

INSERT INTO tblTheChap (ID, mo_ta) VALUES
('TC001', N'Chung minh nhan dan'),
('TC002', N'Bang lai xe'),
('TC003', N'Tai san the chap');

INSERT INTO tblTheChapTrenDT (ID, tblDonThueID, tblTheChapID, so_luong, gia) VALUES
('TCDT001', 'DT001', 'TC001', 1, 0.00),
('TCDT002', 'DT002', 'TC002', 1, 0.00),
('TCDT003', 'DT003', 'TC003', 1, 1000000.00);

INSERT INTO tblXeCTV (tblCTVtblThanhVienID, tblXeID) VALUES
('TV002', 'XE001'),
('TV001', 'XE002'),
('TV005', 'XE003');