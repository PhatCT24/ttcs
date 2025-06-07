export default class QuanLy {
    #tblNVCuaHangtblThanhVienID;

    constructor(tblNVCuaHangtblThanhVienID) {
        this.#tblNVCuaHangtblThanhVienID = tblNVCuaHangtblThanhVienID;
    }

    getTblNVCuaHangtblThanhVienID() { return this.#tblNVCuaHangtblThanhVienID; }
    setTblNVCuaHangtblThanhVienID(tblNVCuaHangtblThanhVienID) { this.#tblNVCuaHangtblThanhVienID = tblNVCuaHangtblThanhVienID; }
}