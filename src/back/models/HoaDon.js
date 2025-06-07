export default class HoaDon {
    #ID;
    #tblDonThueID;
    #tblKhachHangtblThanhVienID;
    #gia;
    #ngay_thanh_toan;
    #phuong_thuc;
    #ghi_chu;

    constructor(ID, tblDonThueID, tblKhachHangtblThanhVienID, gia, ngay_thanh_toan, phuong_thuc, ghi_chu) {
        this.#ID = ID;
        this.#tblDonThueID = tblDonThueID;
        this.#tblKhachHangtblThanhVienID = tblKhachHangtblThanhVienID;
        this.#gia = gia;
        this.#ngay_thanh_toan = ngay_thanh_toan;
        this.#phuong_thuc = phuong_thuc;
        this.#ghi_chu = ghi_chu;
    }

    getID() { return this.#ID; }
    getTblDonThueID() { return this.#tblDonThueID; }
    getTblKhachHangtblThanhVienID() { return this.#tblKhachHangtblThanhVienID; }
    getGia() { return this.#gia; }
    getNgayThanhToan() { return this.#ngay_thanh_toan; }
    getPhuongThuc() { return this.#phuong_thuc; }
    getGhiChu() { return this.#ghi_chu; }

    setID(ID) { this.#ID = ID; }
    setTblDonThueID(tblDonThueID) { this.#tblDonThueID = tblDonThueID; }
    setTblKhachHangtblThanhVienID(tblKhachHangtblThanhVienID) { this.#tblKhachHangtblThanhVienID = tblKhachHangtblThanhVienID; }
    setGia(gia) { this.#gia = gia; }
    setNgayThanhToan(ngay_thanh_toan) { this.#ngay_thanh_toan = ngay_thanh_toan; }
    setPhuongThuc(phuong_thuc) { this.#phuong_thuc = phuong_thuc; }
    setGhiChu(ghi_chu) { this.#ghi_chu = ghi_chu; }
}