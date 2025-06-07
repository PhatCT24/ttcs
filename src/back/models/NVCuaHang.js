export default class NVCuaHang {
    #tblThanhVienID;
    #vi_tri;

    constructor(tblThanhVienID, vi_tri) {
        this.#tblThanhVienID = tblThanhVienID;
        this.#vi_tri = vi_tri;
    }

    getTblThanhVienID() { 
        return this.#tblThanhVienID; 
    }
    getViTri() { 
        return this.#vi_tri; 
    }
    setTblThanhVienID(tblThanhVienID) { 
        this.#tblThanhVienID = tblThanhVienID; 
    }
    setViTri(vi_tri) { 
        this.#vi_tri = vi_tri; 
    }
}