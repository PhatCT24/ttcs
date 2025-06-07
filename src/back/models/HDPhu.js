export default class HDPhu {
    #ID;
    #tblHoaDonID;
    #tblNhanVientblNVCuaHangtblThanhVienID;
    #gia;

    constructor(ID, tblHoaDonID, tblNhanVientblNVCuaHangtblThanhVienID, gia) {
        this.#ID = ID;
        this.#tblHoaDonID = tblHoaDonID;
        this.#tblNhanVientblNVCuaHangtblThanhVienID = tblNhanVientblNVCuaHangtblThanhVienID;
        this.#gia = gia;
    }

    getID() { return this.#ID; }
    getTblHoaDonID() { return this.#tblHoaDonID; }
    getTblNhanVientblNVCuaHangtblThanhVienID() { return this.#tblNhanVientblNVCuaHangtblThanhVienID; }
    getGia() { return this.#gia; }

    setID(ID) { this.#ID = ID; }
    setTblHoaDonID(tblHoaDonID) { this.#tblHoaDonID = tblHoaDonID; }
    setTblNhanVientblNVCuaHangtblThanhVienID(tblNhanVientblNVCuaHangtblThanhVienID) { this.#tblNhanVientblNVCuaHangtblThanhVienID = tblNhanVientblNVCuaHangtblThanhVienID; }
    setGia(gia) { this.#gia = gia; }
}