USE webthuexe;

-- Insert 15 records into tblThanhVien
INSERT INTO tblThanhVien (ID, username, password, ten, ngay_sinh, email, so_dien_thoai, dia_chi) VALUES
('TV001', 'user1', 'hashedpass1', N'Nguyễn Văn An', '1990-01-15', 'an.nguyen@email.com', '0901234561', N'123 Đường Láng, Hà Nội'),
('TV002', 'user2', 'hashedpass2', N'Trần Thị Bình', '1992-03-22', 'binh.tran@email.com', '0901234562', N'456 Lê Lợi, TP.HCM'),
('TV003', 'user3', 'hashedpass3', N'Phạm Minh Châu', '1988-07-10', 'chau.pham@email.com', '0901234563', N'789 Nguyễn Huệ, Đà Nẵng'),
('TV004', 'user4', 'hashedpass4', N'Lê Văn Đức', '1995-11-30', 'duc.le@email.com', '0901234564', N'101 Trần Phú, Nha Trang'),
('TV005', 'user5', 'hashedpass5', N'Hoàng Thị E', '1993-05-25', 'e.hoang@email.com', '0901234565', N'202 Hùng Vương, Huế'),
('TV006', 'user6', 'hashedpass6', N'Vũ Văn Hùng', '1991-09-12', 'hung.vu@email.com', '0901234566', N'303 Bà Triệu, Hà Nội'),
('TV007', 'user7', 'hashedpass7', N'Đỗ Thị Lan', '1994-02-18', 'lan.do@email.com', '0901234567', N'404 Nguyễn Trãi, TP.HCM'),
('TV008', 'user8', 'hashedpass8', N'Bùi Văn Minh', '1989-12-05', 'minh.bui@email.com', '0901234568', N'505 Lý Thường Kiệt, Đà Nẵng'),
('TV009', 'user9', 'hashedpass9', N'Ngô Thị Ngọc', '1996-04-20', 'ngoc.ngo@email.com', '0901234569', N'606 Phạm Văn Đồng, Hà Nội'),
('TV010', 'user10', 'hashedpass10', N'Mai Văn Quang', '1990-08-08', 'quang.mai@email.com', '0901234570', N'707 Nguyễn Văn Cừ, TP.HCM'),
('TV011', 'user11', 'hashedpass11', N'Nguyễn Thị Hoa', '1987-06-14', 'hoa.nguyen@email.com', '0901234571', N'808 Trần Hưng Đạo, Hà Nội'),
('TV012', 'user12', 'hashedpass12', N'Trần Văn Khang', '1993-10-10', 'khang.tran@email.com', '0901234572', N'909 Võ Văn Kiệt, TP.HCM'),
('TV013', 'user13', 'hashedpass13', N'Phạm Văn Lâm', '1990-12-25', 'lam.pham@email.com', '0901234573', N'111 Hai Bà Trưng, Đà Nẵng'),
('TV014', 'user14', 'hashedpass14', N'Lê Thị Mai', '1992-04-30', 'mai.le@email.com', '0901234574', N'222 Nguyễn Đình Chiểu, Nha Trang'),
('TV015', 'user15', 'hashedpass15', N'Hoàng Văn Nam', '1989-08-20', 'nam.hoang@email.com', '0901234575', N'333 Lê Đại Hành, Huế');

-- Insert 10 records into tblKhachHang
INSERT INTO tblKhachHang (tblThanhVienID) VALUES
('TV001'), ('TV002'), ('TV003'), ('TV004'), ('TV005'),
('TV006'), ('TV007'), ('TV008'), ('TV009'), ('TV010');

-- Insert 5 records into tblNVCuaHang (1 for QuanLy, 4 for NhanVien)
INSERT INTO tblNVCuaHang (tblThanhVienID, vi_tri) VALUES
('TV011', N'Quản lý'),
('TV012', N'Nhân viên kỹ thuật'),
('TV013', N'Nhân viên chăm sóc khách hàng'),
('TV014', N'Nhân viên giao xe'),
('TV015', N'Nhân viên bảo dưỡng');

-- Insert 1 record into tblQuanLy
INSERT INTO tblQuanLy (tblNVCuaHangtblThanhVienID) VALUES
('TV011');

-- Insert 4 records into tblNhanVien
INSERT INTO tblNhanVien (tblNVCuaHangtblThanhVienID) VALUES
('TV012'), ('TV013'), ('TV014'), ('TV015');

-- Insert 20 records into tblXe
INSERT INTO tblXe (ID, hang, ten, nam_san_xuat, loai_hop_so, so_cho, mau_sac, loai_nhien_lieu, gia, bien_so, ghi_chu) VALUES
('XE001', N'Toyota', N'Vios', 2020, N'Tự động', 5, N'Trắng', N'Xăng', 500000.00, '29A-12345', N'Xe mới, tiết kiệm nhiên liệu'),
('XE002', N'Honda', N'City', 2021, N'Tự động', 5, N'Đen', N'Xăng', 550000.00, '51A-54321', N'Đầy đủ tiện nghi'),
('XE003', N'Hyundai', N'Accent', 2019, N'Số sàn', 5, N'Xanh', N'Xăng', 450000.00, '30A-67890', N'Xe bền, ít hỏng vặt'),
('XE004', N'Kia', N'Cerato', 2022, N'Tự động', 5, N'Đỏ', N'Xăng', 600000.00, '29B-11111', N'Xe sang trọng'),
('XE005', N'Mazda', N'3', 2021, N'Tự động', 5, N'Trắng', N'Xăng', 580000.00, '51B-22222', N'Hiệu suất cao'),
('XE006', N'Toyota', N'Fortuner', 2020, N'Tự động', 7, N'Đen', N'Dầu', 800000.00, '29C-33333', N'SUV mạnh mẽ'),
('XE007', N'Honda', N'CR-V', 2022, N'Tự động', 7, N'Xám', N'Xăng', 850000.00, '51C-44444', N'Đầy đủ công nghệ'),
('XE008', N'Hyundai', N'Tucson', 2021, N'Tự động', 5, N'Trắng', N'Xăng', 700000.00, '30B-55555', N'Thiết kế hiện đại'),
('XE009', N'Kia', N'Seltos', 2023, N'Tự động', 5, N'Đỏ', N'Xăng', 650000.00, '29D-66666', N'Xe mới, tiết kiệm'),
('XE010', N'Mitsubishi', N'Xforce', 2023, N'Tự động', 5, N'Xanh', N'Xăng', 600000.00, '51D-77777', N'Động cơ bền bỉ'),
('XE011', N'Toyota', N'Innova', 2020, N'Số sàn', 7, N'Bạc', N'Xăng', 700000.00, '29E-88888', N'Xe gia đình'),
('XE012', N'Honda', N'Civic', 2022, N'Tự động', 5, N'Đen', N'Xăng', 750000.00, '51E-99999', N'Thiết kế thể thao'),
('XE013', N'Hyundai', N'Santa Fe', 2021, N'Tự động', 7, N'Trắng', N'Dầu', 900000.00, '30C-10101', N'SUV cao cấp'),
('XE014', N'Kia', N'Carnival', 2023, N'Tự động', 7, N'Đen', N'Dầu', 950000.00, '29F-20202', N'Xe đa dụng'),
('XE015', N'Mazda', N'CX-5', 2022, N'Tự động', 5, N'Xám', N'Xăng', 800000.00, '51F-30303', N'Công nghệ hiện đại'),
('XE016', N'Toyota', N'Camry', 2021, N'Tự động', 5, N'Trắng', N'Xăng', 850000.00, '29G-40404', N'Xe sedan cao cấp'),
('XE017', N'Honda', N'Accord', 2020, N'Tự động', 5, N'Đen', N'Xăng', 900000.00, '51G-50505', N'Thiết kế sang trọng'),
('XE018', N'Hyundai', N'Elantra', 2022, N'Tự động', 5, N'Đỏ', N'Xăng', 600000.00, '30D-60606', N'Xe tiết kiệm nhiên liệu'),
('XE019', N'Kia', N'Sorento', 2023, N'Tự động', 7, N'Xanh', N'Dầu', 950000.00, '29H-70707', N'SUV mạnh mẽ'),
('XE020', N'Mitsubishi', N'Outlander', 2021, N'Tự động', 7, N'Trắng', N'Xăng', 800000.00, '51H-80808', N'Xe đa dụng');

-- Insert 20 records into tblXeThue (linked to tblXe)
INSERT INTO tblXeThue (ID, tblXeID, gia, ngay_bat_dau, ngay_ket_thuc, so_luong, ghi_chu) VALUES
('XT001', 'XE001', 500000.00, '2025-06-15', '2025-06-17', 1, N'Thuê 2 ngày'),
('XT002', 'XE002', 550000.00, '2025-06-16', '2025-06-18', 1, N'Thuê ngắn hạn'),
('XT003', 'XE003', 450000.00, '2025-06-17', '2025-06-19', 1, N'Xe tiết kiệm'),
('XT004', 'XE004', 600000.00, '2025-06-18', '2025-06-20', 1, N'Thuê đi công tác'),
('XT005', 'XE005', 580000.00, '2025-06-19', '2025-06-21', 1, N'Xe mới'),
('XT006', 'XE006', 800000.00, '2025-06-20', '2025-06-23', 1, N'Thuê dài ngày'),
('XT007', 'XE007', 850000.00, '2025-06-21', '2025-06-24', 1, N'Xe SUV'),
('XT008', 'XE008', 700000.00, '2025-06-22', '2025-06-24', 1, N'Thuê đi du lịch'),
('XT009', 'XE009', 650000.00, '2025-06-23', '2025-06-25', 1, N'Xe mới'),
('XT010', 'XE010', 600000.00, '2025-06-24', '2025-06-26', 1, N'Thuê ngắn hạn'),
('XT011', 'XE011', 700000.00, '2025-06-25', '2025-06-28', 1, N'Xe gia đình'),
('XT012', 'XE012', 750000.00, '2025-06-26', '2025-06-29', 1, N'Thuê đi công tác'),
('XT013', 'XE013', 900000.00, '2025-06-27', '2025-06-30', 1, N'Xe SUV cao cấp'),
('XT014', 'XE014', 950000.00, '2025-06-28', '2025-07-01', 1, N'Xe đa dụng'),
('XT015', 'XE015', 800000.00, '2025-06-29', '2025-07-02', 1, N'Thuê dài ngày'),
('XT016', 'XE016', 850000.00, '2025-06-30', '2025-07-03', 1, N'Xe sedan'),
('XT017', 'XE017', 900000.00, '2025-07-01', '2025-07-04', 1, N'Thuê đi sự kiện'),
('XT018', 'XE018', 600000.00, '2025-07-02', '2025-07-04', 1, N'Xe tiết kiệm'),
('XT019', 'XE019', 950000.00, '2025-07-03', '2025-07-06', 1, N'Xe SUV'),
('XT020', 'XE020', 800000.00, '2025-07-04', '2025-07-07', 1, N'Thuê đi du lịch');

-- Insert 30 records into tblDonThue (multiple orders per customer)
INSERT INTO tblDonThue (ID, tblKhachHangtblThanhVienID, tblXeThueID, so_luong, ngay_dat, ghi_chu, tra_donNV, tra_donKH) VALUES
('DT001', 'TV001', 'XT001', 1, '2025-06-10', N'Đặt xe đi Hà Nội', FALSE, FALSE),
('DT002', 'TV001', 'XT002', 1, '2025-06-11', N'Đặt xe đi Đà Nẵng', FALSE, FALSE),
('DT003', 'TV001', 'XT003', 1, '2025-06-12', N'Đặt xe đi công tác', FALSE, FALSE),
('DT004', 'TV002', 'XT004', 1, '2025-06-11', N'Đặt xe du lịch', FALSE, FALSE),
('DT005', 'TV002', 'XT005', 1, '2025-06-13', N'Đặt xe gia đình', FALSE, FALSE),
('DT006', 'TV003', 'XT006', 1, '2025-06-12', N'Đặt xe đi Huế', FALSE, FALSE),
('DT007', 'TV003', 'XT007', 1, '2025-06-14', N'Đặt xe công tác', FALSE, FALSE),
('DT008', 'TV004', 'XT008', 1, '2025-06-13', N'Đặt xe đi Đà Lạt', FALSE, FALSE),
('DT009', 'TV004', 'XT009', 1, '2025-06-15', N'Đặt xe du lịch', FALSE, FALSE),
('DT010', 'TV005', 'XT010', 1, '2025-06-14', N'Đặt xe đi Nha Trang', FALSE, FALSE),
('DT011', 'TV005', 'XT011', 1, '2025-06-16', N'Đặt xe gia đình', FALSE, FALSE),
('DT012', 'TV006', 'XT012', 1, '2025-06-15', N'Đặt xe đi công tác', FALSE, FALSE),
('DT013', 'TV006', 'XT013', 1, '2025-06-17', N'Đặt xe đi Đà Nẵng', FALSE, FALSE),
('DT014', 'TV007', 'XT014', 1, '2025-06-16', N'Đặt xe đi sự kiện', FALSE, FALSE),
('DT015', 'TV007', 'XT015', 1, '2025-06-18', N'Đặt xe du lịch', FALSE, FALSE),
('DT016', 'TV008', 'XT016', 1, '2025-06-17', N'Đặt xe đi Hà Nội', FALSE, FALSE),
('DT017', 'TV008', 'XT017', 1, '2025-06-19', N'Đặt xe công tác', FALSE, FALSE),
('DT018', 'TV009', 'XT018', 1, '2025-06-18', N'Đặt xe đi Huế', FALSE, FALSE),
('DT019', 'TV009', 'XT019', 1, '2025-06-20', N'Đặt xe du lịch', FALSE, FALSE),
('DT020', 'TV010', 'XT020', 1, '2025-06-19', N'Đặt xe đi Đà Lạt', FALSE, FALSE),
('DT021', 'TV001', 'XT004', 1, '2025-06-20', N'Đặt xe lần 2', FALSE, FALSE),
('DT022', 'TV002', 'XT006', 1, '2025-06-21', N'Đặt xe đi công tác', FALSE, FALSE),
('DT023', 'TV003', 'XT008', 1, '2025-06-22', N'Đặt xe du lịch', FALSE, FALSE),
('DT024', 'TV004', 'XT010', 1, '2025-06-23', N'Đặt xe đi Nha Trang', FALSE, FALSE),
('DT025', 'TV005', 'XT012', 1, '2025-06-24', N'Đặt xe gia đình', FALSE, FALSE),
('DT026', 'TV006', 'XT014', 1, '2025-06-25', N'Đặt xe đi sự kiện', FALSE, FALSE),
('DT027', 'TV007', 'XT016', 1, '2025-06-26', N'Đặt xe đi Hà Nội', FALSE, FALSE),
('DT028', 'TV008', 'XT018', 1, '2025-06-27', N'Đặt xe đi Huế', FALSE, FALSE),
('DT029', 'TV009', 'XT020', 1, '2025-06-28', N'Đặt xe du lịch', FALSE, FALSE),
('DT030', 'TV010', 'XT001', 1, '2025-06-29', N'Đặt xe đi công tác', FALSE, FALSE);

-- Insert 30 records into tblHoaDon (linked to tblDonThue and tblKhachHang)
INSERT INTO tblHoaDon (ID, tblDonThueID, tblKhachHangtblThanhVienID, ghi_chu) VALUES
('HD001', 'DT001', 'TV001', N'Hóa đơn thuê xe Vios'),
('HD002', 'DT002', 'TV001', N'Hóa đơn thuê xe City'),
('HD003', 'DT003', 'TV001', N'Hóa đơn thuê xe Accent'),
('HD004', 'DT004', 'TV002', N'Hóa đơn thuê xe Cerato'),
('HD005', 'DT005', 'TV002', N'Hóa đơn thuê xe Mazda 3'),
('HD006', 'DT006', 'TV003', N'Hóa đơn thuê xe Fortuner'),
('HD007', 'DT007', 'TV003', N'Hóa đơn thuê xe CR-V'),
('HD008', 'DT008', 'TV004', N'Hóa đơn thuê xe Tucson'),
('HD009', 'DT009', 'TV004', N'Hóa đơn thuê xe Seltos'),
('HD010', 'DT010', 'TV005', N'Hóa đơn thuê xe Xforce'),
('HD011', 'DT011', 'TV005', N'Hóa đơn thuê xe Innova'),
('HD012', 'DT012', 'TV006', N'Hóa đơn thuê xe Civic'),
('HD013', 'DT013', 'TV006', N'Hóa đơn thuê xe Santa Fe'),
('HD014', 'DT014', 'TV007', N'Hóa đơn thuê xe Carnival'),
('HD015', 'DT015', 'TV007', N'Hóa đơn thuê xe CX-5'),
('HD016', 'DT016', 'TV008', N'Hóa đơn thuê xe Camry'),
('HD017', 'DT017', 'TV008', N'Hóa đơn thuê xe Accord'),
('HD018', 'DT018', 'TV009', N'Hóa đơn thuê xe Elantra'),
('HD019', 'DT019', 'TV009', N'Hóa đơn thuê xe Sorento'),
('HD020', 'DT020', 'TV010', N'Hóa đơn thuê xe Outlander'),
('HD021', 'DT021', 'TV001', N'Hóa đơn thuê xe Cerato lần 2'),
('HD022', 'DT022', 'TV002', N'Hóa đơn thuê xe Fortuner lần 2'),
('HD023', 'DT023', 'TV003', N'Hóa đơn thuê xe Tucson lần 2'),
('HD024', 'DT024', 'TV004', N'Hóa đơn thuê xe Xforce lần 2'),
('HD025', 'DT025', 'TV005', N'Hóa đơn thuê xe Civic lần 2'),
('HD026', 'DT026', 'TV006', N'Hóa đơn thuê xe Carnival lần 2'),
('HD027', 'DT027', 'TV007', N'Hóa đơn thuê xe Camry lần 2'),
('HD028', 'DT028', 'TV008', N'Hóa đơn thuê xe Elantra lần 2'),
('HD029', 'DT029', 'TV009', N'Hóa đơn thuê xe Outlander lần 2'),
('HD030', 'DT030', 'TV010', N'Hóa đơn thuê xe Vios lần 2');

-- Insert sample data for tblHDPhu (linked to tblHoaDon and tblNhanVien)
INSERT INTO tblHDPhu (ID, tblHoaDonID, tblNhanVientblNVCuaHangtblThanhVienID, gia) VALUES
('HDP001', 'HD001', 'TV012', 100000.00),
('HDP002', 'HD002', 'TV013', 150000.00),
('HDP003', 'HD003', 'TV014', 120000.00),
('HDP004', 'HD004', 'TV015', 130000.00);

-- Insert sample data for tblLoi
INSERT INTO tblLoi (ID, ten, mo_ta, gia) VALUES
('LOI001', N'Hỏng lốp', N'Lốp xe bị thủng', 200000.00),
('LOI002', N'Hỏng đèn pha', N'Đèn pha không hoạt động', 300000.00);

-- Insert sample data for tblLoiTrenXe
INSERT INTO tblLoiTrenXe (ID, tblXeThueID, tblLoiID, gia, so_luong) VALUES
('LTX001', 'XT001', 'LOI001', 200000.00, 1),
('LTX002', 'XT002', 'LOI002', 300000.00, 1);

-- Insert sample data for tblDichVu
INSERT INTO tblDichVu (ID, ten, mo_ta, gia) VALUES
('DV001', N'Rửa xe', N'Rửa xe sạch sẽ', 50000.00),
('DV002', N'Tài xế', N'Cung cấp tài xế lái xe', 200000.00);

-- Insert sample data for tblDVSuDung
INSERT INTO tblDVSuDung (ID, tblXeThueID, tblDichVuID, so_luong, gia) VALUES
('DVS001', 'XT001', 'DV001', 1, 50000.00),
('DVS002', 'XT002', 'DV002', 1, 200000.00);

-- Insert sample data for tblTheChap
INSERT INTO tblTheChap (ID, mo_ta, gia) VALUES
('TC001', N'CMND/CCCD', N'Thế chấp chứng minh nhân dân', 500000.00),
('TC002', N'Giấy phép lái xe', N'Thế chấp GPLX', 300000.00);

-- Insert sample data for tblTheChapTrenDT
INSERT INTO tblTheChapTrenDT (ID, tblDonThueID, tblTheChapID, so_luong, gia) VALUES
('TCDT001', 'DT001', 'TC001', 1, 500000.00),
('TCDT002', 'DT002', 'TC002', 1, 300000.00);

-- Insert sample data for tblCTV
INSERT INTO tblCTV (tblThanhVienID) VALUES
('TV001'), ('TV002');

-- Insert sample data for tblXeCTV
INSERT INTO tblXeCTV (tblCTVtblThanhVienID, tblXeID) VALUES
('TV001', 'XE001'),
('TV002', 'XE002');