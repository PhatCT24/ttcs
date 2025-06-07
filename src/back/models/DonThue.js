export default class DonThue {
    #ID;
    #tblKhachHangtblThanhVienID;
    #tblXeThueID;
    #so_luong;
    #gia;
    #tong_so_luong;
    #ngay_dat;
    #ghi_chu;

    constructor(ID, tblKhachHangtblThanhVienID, tblXeThueID, so_luong, gia, tong_so_luong, ngay_dat, ghi_chu) {
        this.#ID = ID;
        this.#tblKhachHangtblThanhVienID = tblKhachHangtblThanhVienID;
        this.#tblXeThueID = tblXeThueID;
        this.#so_luong = so_luong;
        this.#gia = gia;
        this.#tong_so_luong = tong_so_luong;
        this.#ngay_dat = ngay_dat;
        this.#ghi_chu = ghi_chu;
    }

    getID() { return this.#ID; }
    getTblKhachHangtblThanhVienID() { return this.#tblKhachHangtblThanhVienID; }
    getTblXeThueID() { return this.#tblXeThueID; }
    getSoLuong() { return this.#so_luong; }
    getGia() { return this.#gia; }
    getTongSoLuong() { return this.#tong_so_luong; }
    getNgayDat() { return this.#ngay_dat; }
    getGhiChu() { return this.#ghi_chu; }

    setID(ID) { this.#ID = ID; }
    setTblKhachHangtblThanhVienID(tblKhachHangtblThanhVienID) { this.#tblKhachHangtblThanhVienID = tblKhachHangtblThanhVienID; }
    setTblXeThueID(tblXeThueID) { this.#tblXeThueID = tblXeThueID; }
    setSoLuong(so_luong) { this.#so_luong = so_luong; }
    setGia(gia) { this.#gia = gia; }
    setTongSoLuong(tong_so_luong) { this.#tong_so_luong = tong_so_luong; }
    setNgayDat(ngay_dat) { this.#ngay_dat = ngay_dat; }
    setGhiChu(ghi_chu) { this.#ghi_chu = ghi_chu; }
}