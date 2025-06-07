export default class Loi {
    #ID;
    #ten;
    #mo_ta;

    constructor(ID, ten, mo_ta) {
        this.#ID = ID;
        this.#ten = ten;
        this.#mo_ta = mo_ta;
    }

    getID() { return this.#ID; }
    getTen() { return this.#ten; }
    getMoTa() { return this.#mo_ta; }

    setID(ID) { this.#ID = ID; }
    setTen(ten) { this.#ten = ten; }
    setMoTa(mo_ta) { this.#mo_ta = mo_ta; }
}