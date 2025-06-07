export default class TheChap {
    #ID;
    #mo_ta;

    constructor(ID, mo_ta) {
        this.#ID = ID;
        this.#mo_ta = mo_ta;
    }

    getID() { return this.#ID; }
    getMoTa() { return this.#mo_ta; }

    setID(ID) { this.#ID = ID; }
    setMoTa(mo_ta) { this.#mo_ta = mo_ta; }
}