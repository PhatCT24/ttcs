export default class DVSuDung {
    #ID;
    #tblXeThueID;
    #tblDichVuID;
    #so_luong;
    #gia;

    constructor(ID, tblXeThueID, tblDichVuID, so_luong, gia) {
        this.#ID = ID;
        this.#tblXeThueID = tblXeThueID;
        this.#tblDichVuID = tblDichVuID;
        this.#so_luong = so_luong;
        this.#gia = gia;
    }

    getID() { return this.#ID; }
    getTblXeThueID() { return this.#tblXeThueID; }
    getTblDichVuID() { return this.#tblDichVuID; }
    getSoLuong() { return this.#so_luong; }
    getGia() { return this.#gia; }

    setID(ID) { this.#ID = ID; }
    setTblXeThueID(tblXeThueID) { this.#tblXeThueID = tblXeThueID; }
    setTblDichVuID(tblDichVuID) { this.#tblDichVuID = tblDichVuID; }
    setSoLuong(so_luong) { this.#so_luong = so_luong; }
    setGia(gia) { this.#gia = gia; }
}