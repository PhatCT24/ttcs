export default class LoiTrenXe {
    #ID;
    #tblXeThueID;
    #tblLoiID;
    #so_luong;

    constructor(ID, tblXeThueID, tblLoiID, so_luong) {
        this.#ID = ID;
        this.#tblXeThueID = tblXeThueID;
        this.#tblLoiID = tblLoiID;
        this.#so_luong = so_luong;
    }

    getID() { return this.#ID; }
    getTblXeThueID() { return this.#tblXeThueID; }
    getTblLoiID() { return this.#tblLoiID; }
    getSoLuong() { return this.#so_luong; }

    setID(ID) { this.#ID = ID; }
    setTblXeThueID(tblXeThueID) { this.#tblXeThueID = tblXeThueID; }
    setTblLoiID(tblLoiID) { this.#tblLoiID = tblLoiID; }
    setSoLuong(so_luong) { this.#so_luong = so_luong; }
}