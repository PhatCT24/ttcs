import { addThanhvien, checkLogin } from "../dbservices/thanhvienFunction.js";
import jwt from 'jsonwebtoken';

export const login = async (req, res) => {
    const { username, password } = req.body;
    try {
        const user = await checkLogin(username, password);
        if (!user) {
            return res.status(401).send({ error: 'Ten dang nhap hoac mat khau khong dung' });
        }

        const token = jwt.sign({
            id: user.id, username: user.username, role: user.role
        }, process.env.JWT_SECRET, {
            expiresIn: '7days'
        });

        return res.status(200).send({ 
            id: user.id, 
            ten: user.ten, 
            message: 'Dang nhap thanh cong', 
            token, 
            role: user.role, 
            diachi: user.diachi, 
            sdt: user.sdt
        });
    } catch (error) {
        console.error('Login error:', error);
        return res.status(500).send({ error: 'Dang nhap that bai' });
    }
}

export const register = async (req, res) => {
    const {username, password, ten, ngay_sinh, email, so_dien_thoai, dia_chi } = req.body;
    try {
        const existingUser = await checkLogin(username, password);
        if (existingUser) {
            return res.status(400).send({ error: 'Ten dang nhap da ton tai' });
        }

        const result = await addThanhvien(username, password, ten, ngay_sinh, email, so_dien_thoai, dia_chi);
        if (result.error) {
            return res.status(500).send({ error: result.error });
        }

        return res.status(201).send({ message: 'Dang ky thanh cong', userId: result.newId });
    } catch (error) {
        console.error('Registration error:', error);
        return res.status(500).send({ error: 'Dang ky that bai' });
    }
}

export const logout = (req, res) => {
    return res.status(200).send({ message: 'Dang xuat thanh cong' });
}