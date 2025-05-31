import { checkLogin } from "../dbservices/thanhvienFunction";

exports.login = async (req, res) => {
    const { username, password } = req.body;
    try {
        const user = await checkLogin(username, password);
        if (user) {
            // Trả về role để client quyết định tải trang nào
            res.status(200).send({ message: 'Login successful', role: user.role, user });
        } else {
            res.status(401).send({ error: 'Invalid username or password' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).send({ error: 'Login failed' });
    }
}
exports.register = async (req, res) => {
    const { username, password, role } = req.body;
    try {
        // Kiểm tra xem người dùng đã tồn tại chưa
        const existingUser = await checkLogin(username, password);
        if (existingUser) {
            return res.status(400).send({ error: 'Username already exists' });
        }

        // Thêm người dùng mới vào cơ sở dữ liệu
        const [result] = await pool.query(`
            INSERT INTO tblThanhVien (username, password, role)
            VALUES (?, ?, ?)
        `, [username, password, role]);

        res.status(201).send({ message: 'User registered successfully', userId: result.insertId });
    } catch (error) {
        console.error(error);
        res.status(500).send({ error: 'Registration failed' });
    }
}