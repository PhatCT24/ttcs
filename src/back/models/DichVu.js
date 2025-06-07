export default class DichVu {
    #ID;
    #ten;
    #mo_ta;
    #gia;

    constructor(ID, ten, mo_ta, gia) {
        this.#ID = ID;
        this.#ten = ten;
        this.#mo_ta = mo_ta;
        this.#gia = gia;
    }

    getID() { return this.#ID; }
    getTen() { return this.#ten; }
    getMoTa() { return this.#mo_ta; }
    getGia() { return this.#gia; }

    setID(ID) { this.#ID = ID; }
    setTen(ten) { this.#ten = ten; }
    setMoTa(mo_ta) { this.#mo_ta = mo_ta; }
    setGia(gia) { this.#gia = gia; }
}