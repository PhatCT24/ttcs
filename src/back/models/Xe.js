export default class Xe {
    #ID;
    #hang;
    #ten;
    #nam_san_xuat;
    #loai_hop_so;
    #so_cho;
    #mau_sac;
    #loai_nhien_lieu;
    #gia;
    #bien_so;
    #ghi_chu;

    constructor(ID, hang, ten, nam_san_xuat, loai_hop_so, so_cho, mau_sac, loai_nhien_lieu, gia, bien_so, ghi_chu) {
        this.#ID = ID;
        this.#hang = hang;
        this.#ten = ten;
        this.#nam_san_xuat = nam_san_xuat;
        this.#loai_hop_so = loai_hop_so;
        this.#so_cho = so_cho;
        this.#mau_sac = mau_sac;
        this.#loai_nhien_lieu = loai_nhien_lieu;
        this.#gia = gia;
        this.#bien_so = bien_so;
        this.#ghi_chu = ghi_chu;
    }

    getID() { return this.#ID; }
    getHang() { return this.#hang; }
    getTen() { return this.#ten; }
    getNamSanXuat() { return this.#nam_san_xuat; }
    getLoaiHopSo() { return this.#loai_hop_so; }
    getSoCho() { return this.#so_cho; }
    getMauSac() { return this.#mau_sac; }
    getLoaiNhienLieu() { return this.#loai_nhien_lieu; }
    getGia() { return this.#gia; }
    getBienSo() { return this.#bien_so; }
    getGhiChu() { return this.#ghi_chu; }

    setID(ID) { this.#ID = ID; }
    setHang(hang) { this.#hang = hang; }
    setTen(ten) { this.#ten = ten; }
    setNamSanXuat(nam_san_xuat) { this.#nam_san_xuat = nam_san_xuat; }
    setLoaiHopSo(loai_hop_so) { this.#loai_hop_so = loai_hop_so; }
    setSoCho(so_cho) { this.#so_cho = so_cho; }
    setMauSac(mau_sac) { this.#mau_sac = mau_sac; }
    setLoaiNhienLieu(loai_nhien_lieu) { this.#loai_nhien_lieu = loai_nhien_lieu; }
    setGia(gia) { this.#gia = gia; }
    setBienSo(bien_so) { this.#bien_so = bien_so; }
    setGhiChu(ghi_chu) { this.#ghi_chu = ghi_chu; }
}