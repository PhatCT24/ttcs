import { timkiemXe, timkiemXebyID } from '../dbservices/xeFunction.js';

export const getXe = async (req, res) => {
    const { name, ngaybd, ngaykt } = req.query;
    try {
        const xeList = await timkiemXe(name, ngaybd, ngaykt);
        if(!xeList || xeList.length === 0) {
            return res.status(404).json({ message: 'Khong tim thay xe nao' });
        }
        res.status(200).json(xeList);
        console.log('Tim kiem danh sach xe thanh cong');
    } catch (error) {
        console.error('Loi khi goi function lay danh sach xe:', error);
        res.status(500).json({ error: 'Loi khi goi function lay danh sach xe' });
    }
}

export const getXeById = async (req, res) => {
    const { id } = req.query;
    try{
        const xeList = await timkiemXebyID(id);
        if(!xeList || xeList.length === 0) {
            return res.status(404).json({ message: 'Khong tim thay xe nao voi ID da cho' });
        }
        res.status(200).json(xeList);
    } catch (error) {
        console.error('Loi khi goi function lay danh sach xe by ID:', error);
        res.status(500).json({ error: 'Loi khi goi function lay danh sach xe by ID' });
    }
}