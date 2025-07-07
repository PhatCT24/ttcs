export default class thongkedongxe {
    #hang 


    constructor(hang, tong_so_ngay_thue, tong_so_luot_thue, tong_doanh_thu) {
        this.hang = hang;
        this.tong_so_ngay_thue = tong_so_ngay_thue;
        this.tong_so_luot_thue = tong_so_luot_thue;
        this.tong_doanh_thu = tong_doanh_thu;
    }

    getID() { return this.#ID; }
    getTblXeID() { return this.#tblXeID; }
    getGia() { return this.#gia; }
    getNgayBatDau() { return this.#ngay_bat_dau; }
    getNgayKetThuc() { return this.#ngay_ket_thuc; }
    getSoLuong() { return this.#so_luong; }
    getGhiChu() { return this.#ghi_chu; }

    setID(ID) { this.#ID = ID; }
    setTblXeID(tblXeID) { this.#tblXeID = tblXeID; }
    setGia(gia) { this.#gia = gia; }
    setNgayBatDau(ngay_bat_dau) { this.#ngay_bat_dau = ngay_bat_dau; }
    setNgayKetThuc(ngay_ket_thuc) { this.#ngay_ket_thuc = ngay_ket_thuc; }
    setSoLuong(so_luong) { this.#so_luong = so_luong; }
    setGhiChu(ghi_chu) { this.#ghi_chu = ghi_chu; }
}