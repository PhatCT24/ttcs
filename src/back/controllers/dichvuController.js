import { timkiemDichVu } from '../dbservices/dichvuFunction.js'

export const getDichVu = async (req, res) => {
    const { name } = req.query;
    try {
        const dichvuList = await timkiemDichVu(name || '');
        res.status(200).json(dichvuList);
    } catch (error) {
        res.status(500).json({ error: 'Lỗi khi lấy danh sách dịch vụ' });
    }
}