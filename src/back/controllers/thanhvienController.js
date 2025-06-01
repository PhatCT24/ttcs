import { checkLogin } from "../dbservices/thanhvienFunction.js";

exports.login = async (req, res) => {
    const { username, password } = req.body;
    try {
        const user = await checkLogin(username, password);
        if (user) {
            res.status(200).send({ message: 'Login successful', role: user.role, user });
        } else {
            res.status(401).send({ error: 'Invalid username or password' });
        }
        const token = jwt.sign({
            user
        })
    } catch (error) {
        console.error(error);
        res.status(500).send({ error: 'Login failed' });
    }
}
exports.register = async (req, res) => {
    const { username, password, role } = req.body;
    try {
        const existingUser = await checkLogin(username, password);
        if (existingUser) {
            return res.status(400).send({ error: 'Username already exists' });
        }

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