-- Bảng tblThanhVien (5 giá trị)
INSERT INTO tblThanhVien (ID, username, password, ten, ngay_sinh, email, so_dien_thoai, dia_chi) VALUES
('TV001', 'nguyenvana', 'password123', 'Nguyen Van A', '1990-05-15', 'nguyenvana@email.com', '0905123456', '123 Duong 1, Quan 1, TP HCM'),
('TV002', 'tranthib', 'pass456', 'Tran Thi B', '1985-10-20', 'tranthib@email.com', '0916234567', '456 Duong 2, Quan 2, TP HCM'),
('TV003', 'lethic', 'pass789', 'Le Thi C', '1995-03-25', 'lethic@email.com', '0927345678', '789 Duong 3, Quan 3, TP HCM'),
('TV004', 'phamvand', 'pass101', 'Pham Van D', '1988-07-30', 'phamvand@email.com', '0938456789', '101 Duong 4, Quan 4, TP HCM'),
('TV005', 'hoangvane', 'pass202', 'Hoang Van E', '1980-12-10', 'hoangvane@email.com', '0949567890', '202 Duong 5, Quan 5, TP HCM');

-- Bảng tblKhachHang (2 giá trị, tương ứng với TV001, TV002)
INSERT INTO tblKhachHang (tblThanhVienID) VALUES
('TV001'),
('TV002');

-- Bảng tblCTV (1 giá trị, tương ứng với TV003)
INSERT INTO tblCTV (tblThanhVienID) VALUES
('TV003');

-- Bảng tblNVCuaHang (2 giá trị, tương ứng với TV004, TV005)
INSERT INTO tblNVCuaHang (tblThanhVienID, vi_tri) VALUES
('TV004', 'Nhan vien ban hang'),
('TV005', 'Quan ly');

-- Bảng tblQuanLy (1 giá trị, tương ứng với TV005)
INSERT INTO tblQuanLy (tblNVCuaHangtblThanhVienID) VALUES
('TV005');

-- Bảng tblNhanVien (1 giá trị, tương ứng với TV004)
INSERT INTO tblNhanVien (tblNVCuaHangtblThanhVienID) VALUES
('TV004');

-- Bảng tblXe (12 giá trị)
INSERT INTO tblXe (ID, hang, ten, nam_san_xuat, loai_hop_so, so_cho, mau_sac, loai_nhien_lieu, gia, bien_so, ghi_chu) VALUES
('XE001', 'Toyota', 'Camry', 2020, 'Tu dong', 5, 'Den', 'Xang', 1000000000.00, '51A-12345', 'Xe moi'),
('XE002', 'Honda', 'Civic', 2019, 'Tu dong', 5, 'Trang', 'Xang', 900000000.00, '51B-67890', 'Xe da qua su dung'),
('XE003', 'Hyundai', 'Tucson', 2021, 'Tu dong', 7, 'Xanh', 'Dau', 1100000000.00, '51C-54321', 'Xe moi'),
('XE004', 'Kia', 'Seltos', 2022, 'Tu dong', 5, 'Do', 'Xang', 800000000.00, '51D-98765', 'Xe moi'),
('XE005', 'Mazda', 'CX-5', 2020, 'Tu dong', 5, 'Xam', 'Xang', 950000000.00, '51E-24680', 'Xe da qua su dung'),
('XE006', 'Ford', 'Ranger', 2021, 'So san', 5, 'Den', 'Dau', 1200000000.00, '51F-13579', 'Xe moi'),
('XE007', 'Toyota', 'Vios', 2019, 'Tu dong', 5, 'Trang', 'Xang', 600000000.00, '51G-35791', 'Xe da qua su dung'),
('XE008', 'Honda', 'CR-V', 2022, 'Tu dong', 7, 'Xanh', 'Xang', 1300000000.00, '51H-46802', 'Xe moi'),
('XE009', 'Hyundai', 'Accent', 2020, 'Tu dong', 5, 'Do', 'Xang', 700000000.00, '51I-57913', 'Xe moi'),
('XE010', 'Kia', 'Cerato', 2021, 'Tu dong', 5, 'Den', 'Xang', 750000000.00, '51J-68024', 'Xe da qua su dung'),
('XE011', 'Mitsubishi', 'Outlander', 2020, 'Tu dong', 7, 'Trang', 'Xang', 1000000000.00, '51K-79135', 'Xe moi'),
('XE012', 'Toyota', 'Fortuner', 2021, 'Tu dong', 7, 'Xam', 'Dau', 1400000000.00, '51L-80246', 'Xe moi');

-- Bảng tblXeThue (12 giá trị)
INSERT INTO tblXeThue (ID, tblXeID, gia, ngay_bat_dau, ngay_ket_thuc, so_luong, ghi_chu) VALUES
('XT001', 'XE001', 500000.00, '2025-06-10', '2025-06-15', 1, 'Thue 5 ngay'),
('XT002', 'XE002', 450000.00, '2025-06-12', '2025-06-14', 1, 'Thue 3 ngay'),
('XT003', 'XE003', 600000.00, '2025-06-15', '2025-06-20', 1, 'Thue 5 ngay'),
('XT004', 'XE004', 400000.00, '2025-06-11', '2025-06-13', 1, 'Thue 3 ngay'),
('XT005', 'XE005', 550000.00, '2025-06-14', '2025-06-18', 1, 'Thue 4 ngay'),
('XT006', 'XE006', 700000.00, '2025-06-16', '2025-06-21', 1, 'Thue 5 ngay'),
('XT007', 'XE007', 350000.00, '2025-06-10', '2025-06-12', 1, 'Thue 2 ngay'),
('XT008', 'XE008', 650000.00, '2025-06-13', '2025-06-17', 1, 'Thue 4 ngay'),
('XT009', 'XE009', 400000.00, '2025-06-15', '2025-06-18', 1, 'Thue 3 ngay'),
('XT010', 'XE010', 450000.00, '2025-06-12', '2025-06-16', 1, 'Thue 4 ngay'),
('XT011', 'XE011', 600000.00, '2025-06-14', '2025-06-19', 1, 'Thue 5 ngay'),
('XT012', 'XE012', 750000.00, '2025-06-11', '2025-06-15', 1, 'Thue 4 ngay');

-- Bảng tblDonThue (12 giá trị)
INSERT INTO tblDonThue (ID, tblKhachHangtblThanhVienID, tblXeThueID, so_luong, ngay_dat, ghi_chu, giao_xeNV, tra_donNV, tra_donKH) VALUES
('DT001', 'TV001', 'XT001', 1, '2025-06-09', 'Dat truoc', FALSE, FALSE, FALSE),
('DT002', 'TV002', 'XT002', 1, '2025-06-11', 'Dat truoc', FALSE, FALSE, FALSE),
('DT003', 'TV001', 'XT003', 1, '2025-06-14', 'Dat truoc', FALSE, FALSE, FALSE),
('DT004', 'TV002', 'XT004', 1, '2025-06-10', 'Dat truoc', FALSE, FALSE, FALSE),
('DT005', 'TV001', 'XT005', 1, '2025-06-13', 'Dat truoc', FALSE, FALSE, FALSE),
('DT006', 'TV002', 'XT006', 1, '2025-06-15', 'Dat truoc', FALSE, FALSE, FALSE),
('DT007', 'TV001', 'XT007', 1, '2025-06-09', 'Dat truoc', FALSE, FALSE, FALSE),
('DT008', 'TV002', 'XT008', 1, '2025-06-12', 'Dat truoc', FALSE, FALSE, FALSE),
('DT009', 'TV001', 'XT009', 1, '2025-06-14', 'Dat truoc', FALSE, FALSE, FALSE),
('DT010', 'TV002', 'XT010', 1, '2025-06-11', 'Dat truoc', FALSE, FALSE, FALSE),
('DT011', 'TV001', 'XT011', 1, '2025-06-13', 'Dat truoc', FALSE, FALSE, FALSE),
('DT012', 'TV002', 'XT012', 1, '2025-06-10', 'Dat truoc', FALSE, FALSE, FALSE);

-- Bảng tblHoaDon (12 giá trị)
INSERT INTO tblHoaDon (ID, tblDonThueID, tblKhachHangtblThanhVienID, ghi_chu) VALUES
('HD001', 'DT001', 'TV001', 'Hoa don thue xe'),
('HD002', 'DT002', 'TV002', 'Hoa don thue xe'),
('HD003', 'DT003', 'TV001', 'Hoa don thue xe'),
('HD004', 'DT004', 'TV002', 'Hoa don thue xe'),
('HD005', 'DT005', 'TV001', 'Hoa don thue xe'),
('HD006', 'DT006', 'TV002', 'Hoa don thue xe'),
('HD007', 'DT007', 'TV001', 'Hoa don thue xe'),
('HD008', 'DT008', 'TV002', 'Hoa don thue xe'),
('HD009', 'DT009', 'TV001', 'Hoa don thue xe'),
('HD010', 'DT010', 'TV002', 'Hoa don thue xe'),
('HD011', 'DT011', 'TV001', 'Hoa don thue xe'),
('HD012', 'DT012', 'TV002', 'Hoa don thue xe');

-- Bảng tblHDPhu (10 giá trị)
INSERT INTO tblHDPhu (ID, tblHoaDonID, tblNhanVientblNVCuaHangtblThanhVienID, gia) VALUES
('HDP001', 'HD001', 'TV004', 200000.00),
('HDP002', 'HD002', 'TV004', 150000.00),
('HDP003', 'HD003', 'TV004', 300000.00),
('HDP004', 'HD004', 'TV004', 250000.00),
('HDP005', 'HD005', 'TV004', 180000.00),
('HDP006', 'HD006', 'TV004', 220000.00),
('HDP007', 'HD007', 'TV004', 200000.00),
('HDP008', 'HD008', 'TV004', 170000.00),
('HDP009', 'HD009', 'TV004', 190000.00),
('HDP010', 'HD010', 'TV004', 210000.00);

-- Bảng tblLoi (10 giá trị)
INSERT INTO tblLoi (ID, ten, mo_ta, gia) VALUES
('LOI001', 'Loi dong co', 'Dong co khong khoi dong', 1000000.00),
('LOI002', 'Loi phanh', 'Phanh khong an', 500000.00),
('LOI003', 'Loi den', 'Den pha khong sang', 200000.00),
('LOI004', 'Loi dieu hoa', 'Dieu hoa khong lanh', 300000.00),
('LOI005', 'Loi lốp', 'Lop xe bi xep', 400000.00),
('LOI006', 'Loi binh ac quy', 'Ac quy het dien', 600000.00),
('LOI007', 'Loi he thong nhien lieu', 'Nhien lieu bi ro ri', 700000.00),
('LOI008', 'Loi he thong treo', 'He thong treo rung lac', 450000.00),
('LOI009', 'Loi can chinh banh', 'Banh xe khong can chinh', 350000.00),
('LOI010', 'Loi den hau', 'Den hau khong sang', 250000.00);

-- Bảng tblLoiTrenXe (12 giá trị)
INSERT INTO tblLoiTrenXe (ID, tblXeThueID, tblLoiID, gia, so_luong) VALUES
('LTX001', 'XT001', 'LOI001', 1000000.00, 1),
('LTX002', 'XT002', 'LOI002', 500000.00, 1),
('LTX003', 'XT003', 'LOI003', 200000.00, 1),
('LTX004', 'XT004', 'LOI004', 300000.00, 1),
('LTX005', 'XT005', 'LOI005', 400000.00, 1),
('LTX006', 'XT006', 'LOI006', 600000.00, 1),
('LTX007', 'XT007', 'LOI007', 700000.00, 1),
('LTX008', 'XT008', 'LOI008', 450000.00, 1),
('LTX009', 'XT009', 'LOI009', 350000.00, 1),
('LTX010', 'XT010', 'LOI010', 250000.00, 1),
('LTX011', 'XT011', 'LOI001', 1000000.00, 1),
('LTX012', 'XT012', 'LOI002', 500000.00, 1);

-- Bảng tblDichVu (10 giá trị)
INSERT INTO tblDichVu (ID, ten, mo_ta, gia) VALUES
('DV001', 'Rua xe', 'Rua xe ngoai that', 100000.00),
('DV002', 'Thay dau', 'Thay dau dong co', 500000.00),
('DV003', 'Kiem tra xe', 'Kiem tra toan bo xe', 200000.00),
('DV004', 'Thay lop', 'Thay lop xe moi', 400000.00),
('DV005', 'Ve sinh noi that', 'Ve sinh noi that xe', 300000.00),
('DV006', 'Can chinh banh', 'Can chinh banh xe', 250000.00),
('DV007', 'Sua dieu hoa', 'Sua chua he thong dieu hoa', 600000.00),
('DV008', 'Thay ac quy', 'Thay ac quy moi', 700000.00),
('DV009', 'Son lai xe', 'Son lai toan bo xe', 2000000.00),
('DV010', 'Bao duong dinh ky', 'Bao duong xe dinh ky', 800000.00);

-- Bảng tblDVSuDung (12 giá trị)
INSERT INTO tblDVSuDung (ID, tblXeThueID, tblDichVuID, so_luong, gia) VALUES
('DVS001', 'XT001', 'DV001', 1, 100000.00),
('DVS002', 'XT002', 'DV002', 1, 500000.00),
('DVS003', 'XT003', 'DV003', 1, 200000.00),
('DVS004', 'XT004', 'DV004', 1, 400000.00),
('DVS005', 'XT005', 'DV005', 1, 300000.00),
('DVS006', 'XT006', 'DV006', 1, 250000.00),
('DVS007', 'XT007', 'DV007', 1, 600000.00),
('DVS008', 'XT008', 'DV008', 1, 700000.00),
('DVS009', 'XT009', 'DV009', 1, 2000000.00),
('DVS010', 'XT010', 'DV010', 1, 800000.00),
('DVS011', 'XT011', 'DV001', 1, 100000.00),
('DVS012', 'XT012', 'DV002', 1, 500000.00);

-- Bảng tblTheChap (10 giá trị)
INSERT INTO tblTheChap (ID, mo_ta, gia) VALUES
('TC001', 'The chap CMND', 1000000.00),
('TC002', 'The chap GPLX', 800000.00),
('TC003', 'The chap so ho khau', 1200000.00),
('TC004', 'The chap passport', 1500000.00),
('TC005', 'The chap xe may', 2000000.00),
('TC006', 'The chap hop dong lao dong', 900000.00),
('TC007', 'The chap so bao hiem', 700000.00),
('TC008', 'The chap giay to nha', 3000000.00),
('TC009', 'The chap bang dai hoc', 1100000.00),
('TC010', 'The chap chung minh thu nhap', 1300000.00);

-- Bảng tblTheChapTrenDT (12 giá trị)
INSERT INTO tblTheChapTrenDT (ID, tblDonThueID, tblTheChapID, so_luong, gia) VALUES
('TCDT001', 'DT001', 'TC001', 1, 1000000.00),
('TCDT002', 'DT002', 'TC002', 1, 800000.00),
('TCDT003', 'DT003', 'TC003', 1, 1200000.00),
('TCDT004', 'DT004', 'TC004', 1, 1500000.00),
('TCDT005', 'DT005', 'TC005', 1, 2000000.00),
('TCDT006', 'DT006', 'TC006', 1, 900000.00),
('TCDT007', 'DT007', 'TC007', 1, 700000.00),
('TCDT008', 'DT008', 'TC008', 1, 3000000.00),
('TCDT009', 'DT009', 'TC009', 1, 1100000.00),
('TCDT010', 'DT010', 'TC010', 1, 1300000.00),
('TCDT011', 'DT011', 'TC001', 1, 1000000.00),
('TCDT012', 'DT012', 'TC002', 1, 800000.00);

-- Bảng tblXeCTV (10 giá trị)
INSERT INTO tblXeCTV (tblCTVtblThanhVienID, tblXeID) VALUES
('TV003', 'XE001'),
('TV003', 'XE002'),
('TV003', 'XE003'),
('TV003', 'XE004'),
('TV003', 'XE005'),
('TV003', 'XE006'),
('TV003', 'XE007'),
('TV003', 'XE008'),
('TV003', 'XE009'),
('TV003', 'XE010');