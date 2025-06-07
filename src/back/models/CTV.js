export default class CTV {
    #tblThanhVienID;

    constructor(tblThanhVienID) {
        this.#tblThanhVienID = tblThanhVienID;
    }

    getTblThanhVienID() { 
        return this.#tblThanhVienID; 
    }
    setTblThanhVienID(tblThanhVienID) { 
        this.#tblThanhVienID = tblThanhVienID; 
    }
}