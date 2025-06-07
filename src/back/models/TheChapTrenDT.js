export default class TheChapTrenDT {
    #ID;
    #tblDonThueID;
    #tblTheChapID;
    #so_luong;
    #gia;

    constructor(ID, tblDonThueID, tblTheChapID, so_luong, gia) {
        this.#ID = ID;
        this.#tblDonThueID = tblDonThueID;
        this.#tblTheChapID = tblTheChapID;
        this.#so_luong = so_luong;
        this.#gia = gia;
    }

    getID() { return this.#ID; }
    getTblDonThueID() { return this.#tblDonThueID; }
    getTblTheChapID() { return this.#tblTheChapID; }
    getSoLuong() { return this.#so_luong; }
    getGia() { return this.#gia; }

    setID(ID) { this.#ID = ID; }
    setTblDonThueID(tblDonThueID) { this.#tblDonThueID = tblDonThueID; }
    setTblTheChapID(tblTheChapID) { this.#tblTheChapID = tblTheChapID; }
    setSoLuong(so_luong) { this.#so_luong = so_luong; }
    setGia(gia) { this.#gia = gia; }
}