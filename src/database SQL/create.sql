CREATE Database webthuexe;
USE webthuexe;

CREATE TABLE tblThanhVien (
    ID VARCHAR(50) PRIMARY KEY,
    username VARCHAR(50) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    ten NVARCHAR(100),
    ngay_sinh DATE,
    email VARCHAR(100),
    so_dien_thoai VARCHAR(15),
    dia_chi NVARCHAR(255)
);

CREATE TABLE tblKhachHang (
    tblThanhVienID VARCHAR(50) PRIMARY KEY,
    FOREIGN KEY (tblThanhVienID) REFERENCES tblThanhVien(ID)
);

CREATE TABLE tblCTV (
    tblThanhVienID VARCHAR(50) PRIMARY KEY,
    FOREIGN KEY (tblThanhVienID) REFERENCES tblThanhVien(ID)
);

CREATE TABLE tblNVCuaHang (
    tblThanhVienID VARCHAR(50) PRIMARY KEY,
    vi_tri NVARCHAR(50),
    FOREIGN KEY (tblThanhVienID) REFERENCES tblThanhVien(ID)
);

CREATE TABLE tblQuanLy (
    tblNVCuaHangtblThanhVienID VARCHAR(50) PRIMARY KEY,
    FOREIGN KEY (tblNVCuaHangtblThanhVienID) REFERENCES tblNVCuaHang(tblThanhVienID)
);

CREATE TABLE tblNhanVien (
    tblNVCuaHangtblThanhVienID VARCHAR(50) PRIMARY KEY,
    FOREIGN KEY (tblNVCuaHangtblThanhVienID) REFERENCES tblNVCuaHang(tblThanhVienID)
);

CREATE TABLE tblXe (
    ID VARCHAR(50) PRIMARY KEY,
    hang NVARCHAR(50),
    ten NVARCHAR(100),
    nam_san_xuat INT,
    loai_hop_so NVARCHAR(20),
    so_cho INT,
    mau_sac NVARCHAR(50),
    loai_nhien_lieu NVARCHAR(50),
    gia DECIMAL(15,2),
    bien_so VARCHAR(20),
    ghi_chu NVARCHAR(255)
);

CREATE TABLE tblXeThue (
    ID VARCHAR(50) PRIMARY KEY,
    tblXeID VARCHAR(50),
    gia DECIMAL(15,2),
    ngay_bat_dau DATE,
    ngay_ket_thuc DATE,
    so_luong INT,
    ghi_chu NVARCHAR(255),
    FOREIGN KEY (tblXeID) REFERENCES tblXe(ID)
);

CREATE TABLE tblDonThue (
    ID VARCHAR(50) PRIMARY KEY,
    tblKhachHangtblThanhVienID VARCHAR(50),
    tblXeThueID VARCHAR(50),
    so_luong INT,
    gia DECIMAL(15,2),
    tong_so_luong INT,
    ngay_dat DATE,
    ghi_chu NVARCHAR(255),
    FOREIGN KEY (tblKhachHangtblThanhVienID) REFERENCES tblKhachHang(tblThanhVienID),
    FOREIGN KEY (tblXeThueID) REFERENCES tblXeThue(ID)
);

CREATE TABLE tblHoaDon (
    ID VARCHAR(50) PRIMARY KEY,
    tblDonThueID VARCHAR(50),
    tblKhachHangtblThanhVienID VARCHAR(50),
    gia DECIMAL(15,2),
    ngay_thanh_toan DATE,
    phuong_thuc NVARCHAR(50),
    ghi_chu NVARCHAR(255),
    FOREIGN KEY (tblDonThueID) REFERENCES tblDonThue(ID),
    FOREIGN KEY (tblKhachHangtblThanhVienID) REFERENCES tblKhachHang(tblThanhVienID)
);

CREATE TABLE tblHDPhu (
    ID VARCHAR(50) PRIMARY KEY,
    tblHoaDonID VARCHAR(50),
    tblNhanVientblNVCuaHangtblThanhVienID VARCHAR(50),
    gia DECIMAL(15,2),
    FOREIGN KEY (tblHoaDonID) REFERENCES tblHoaDon(ID),
    FOREIGN KEY (tblNhanVientblNVCuaHangtblThanhVienID) REFERENCES tblNhanVien(tblNVCuaHangtblThanhVienID)
);

CREATE TABLE tblLoi (
    ID VARCHAR(50) PRIMARY KEY,
    ten NVARCHAR(100),
    mo_ta NVARCHAR(255)
);

CREATE TABLE tblLoiTrenXe (
    ID VARCHAR(50) PRIMARY KEY,
    tblXeThueID VARCHAR(50),
    tblLoiID VARCHAR(50),
    so_luong INT,
    FOREIGN KEY (tblXeThueID) REFERENCES tblXeThue(ID),
    FOREIGN KEY (tblLoiID) REFERENCES tblLoi(ID)
);

CREATE TABLE tblDichVu (
    ID VARCHAR(50) PRIMARY KEY,
    ten NVARCHAR(100),
    mo_ta NVARCHAR(255),
    gia DECIMAL(15,2)
);

CREATE TABLE tblDVSuDung (
    ID VARCHAR(50) PRIMARY KEY,
    tblXeThueID VARCHAR(50),
    tblDichVuID VARCHAR(50),
    so_luong INT,
    gia DECIMAL(15,2),
    FOREIGN KEY (tblXeThueID) REFERENCES tblXeThue(ID),
    FOREIGN KEY (tblDichVuID) REFERENCES tblDichVu(ID)
);

CREATE TABLE tblTheChap (
    ID VARCHAR(50) PRIMARY KEY,
    mo_ta NVARCHAR(255)
);

CREATE TABLE tblTheChapTrenDT (
    ID VARCHAR(50) PRIMARY KEY,
    tblDonThueID VARCHAR(50),
    tblTheChapID VARCHAR(50),
    so_luong INT,
    gia DECIMAL(15,2),
    FOREIGN KEY (tblDonThueID) REFERENCES tblDonThue(ID),
    FOREIGN KEY (tblTheChapID) REFERENCES tblTheChap(ID)
);

CREATE TABLE tblXeCTV (
    tblCTVtblThanhVienID VARCHAR(50),
    tblXeID VARCHAR(50),
    PRIMARY KEY (tblCTVtblThanhVienID, tblXeID),
    FOREIGN KEY (tblCTVtblThanhVienID) REFERENCES tblCTV(tblThanhVienID),
    FOREIGN KEY (tblXeID) REFERENCES tblXe(ID)
);

