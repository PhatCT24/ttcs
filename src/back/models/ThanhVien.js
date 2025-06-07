export default class ThanhVien{
    #ID;
    #username;
    #password;
    #ten;
    #ngay_sinh;
    #email;
    #so_dien_thoai;
    #dia_chi;
    constructor(ID, username, password, ten, ngay_sinh, email, so_dien_thoai, dia_chi){
        this.#ID = ID;
        this.#username = username;
        this.#password = password;
        this.#ten = ten;
        this.#ngay_sinh = ngay_sinh;
        this.#email = email;
        this.#so_dien_thoai = so_dien_thoai;
        this.#dia_chi = dia_chi;
    }
    getID(){
        return this.ID;
    }
    getUsername(){
        return this.username;
    }
    getPassword(){
        return this.password;
    }
    getTen(){
        return this.ten;
    }
    getNgaySinh(){
        return this.ngay_sinh;
    }
    getEmail(){
        return this.email;
    }
    getSoDienThoai(){
        return this.so_dien_thoai;
    }
    getDiaChi(){
        return this.dia_chi;
    }
    setID(ID){
        this.ID = ID;
    }
    setUsername(username){
        this.username = username;
    }
    setPassword(password){
        this.password = password;
    }
    setTen(ten){
        this.ten = ten;
    }
    setNgaySinh(ngay_sinh){
        this.ngay_sinh = ngay_sinh;
    }
    setEmail(email){
        this.email = email;
    }
    setSoDienThoai(so_dien_thoai){
        this.so_dien_thoai = so_dien_thoai;
    }
    setDiaChi(dia_chi){
        this.dia_chi = dia_chi;
    }
}