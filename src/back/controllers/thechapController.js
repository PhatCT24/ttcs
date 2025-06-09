import { getAllTheChap } from '../dbservices/thechapFunction.js';

export const getThechap = async (req, res) => {
    try {
        const thechapList = await getAllTheChap();
        res.status(200).json(thechapList);
    } catch (error) {
        console.error('Lỗi khi gọi function lấy danh sách thế chấp:', error);
        res.status(500).json({ error: 'Lỗi khi gọi function lấy danh sách thế chấp' });
    }
}