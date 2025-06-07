export default class NhanVien {
    #tblNVCuaHangtblThanhVienID;

    constructor(tblNVCuaHangtblThanhVienID) {
        this.#tblNVCuaHangtblThanhVienID = tblNVCuaHangtblThanhVienID;
    }

    getTblNVCuaHangtblThanhVienID() { return this.#tblNVCuaHangtblThanhVienID; }
    setTblNVCuaHangtblThanhVienID(tblNVCuaHangtblThanhVienID) { this.#tblNVCuaHangtblThanhVienID = tblNVCuaHangtblThanhVienID; }
}