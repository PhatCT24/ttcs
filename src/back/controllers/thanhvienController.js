import { addThanhvien, checkLogin } from "../dbservices/thanhvienFunction.js";
import jwt from 'jsonwebtoken';

export const login = async (req, res) => {
    const { username, password } = req.body;
    try {
        const user = await checkLogin(username, password);
        if (user) {
            const token = jwt.sign({
                id: user.ID, username: user.username, role: user.role
            }, process.env.JWT_SECRET, {
                expiresIn: '7days'
            });
            res.status(200).send({ message: 'Login successful', token });
        } else {
            res.status(401).send({ error: 'Invalid username or password' });
        }
       
    } catch (error) {
        console.error(error);
        res.status(500).send({ error: 'Login failed' });
    }
}
export const register = async (req, res) => {
    const {username, password, ten, ngay_sinh, email, so_dien_thoai, dia_chi } = req.body;
    try {
        const existingUser = await checkLogin(username, password);
        if (existingUser) {
            return res.status(400).send({ error: 'Username already exists' });
        }

        const result = await addThanhvien(username, password, ten, ngay_sinh, email, so_dien_thoai, dia_chi);
        if (result.error) {
            return res.status(500).send({ error: result.error });
        }

        res.status(201).send({ message: 'User registered successfully', userId: result.newId });
    } catch (error) {
        console.error(error);
        res.status(500).send({ error: 'Registration failed' });
    }
}

export const logout = (req, res) => {
    // Xóa token hoặc thực hiện các thao tác cần thiết để đăng xuất
    res.status(200).send({ message: 'Logout successful' });
}