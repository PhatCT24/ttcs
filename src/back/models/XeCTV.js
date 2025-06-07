export default class XeCTV {
    #tblCTVtblThanhVienID;
    #tblXeID;

    constructor(tblCTVtblThanhVienID, tblXeID) {
        this.#tblCTVtblThanhVienID = tblCTVtblThanhVienID;
        this.#tblXeID = tblXeID;
    }

    getTblCTVtblThanhVienID() { return this.#tblCTVtblThanhVienID; }
    getTblXeID() { return this.#tblXeID; }

    setTblCTVtblThanhVienID(tblCTVtblThanhVienID) { this.#tblCTVtblThanhVienID = tblCTVtblThanhVienID; }
    setTblXeID(tblXeID) { this.#tblXeID = tblXeID; }
}