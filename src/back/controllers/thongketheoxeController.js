import { getThongKeTheoXe } from "../dbservices/thongketheoxeFunction.js";

export const getThongKeXe = async (req, res) => {
    const { ngaybd, ngaykt, hangxe } = req.query;
    try {
        const thongKe = await getThongKeTheoXe(ngaybd, ngaykt, hangxe);
        if (!thongKe || thongKe.length === 0) {
            return res.status(404).json({ message: 'Khong tim thay thong ke trong khoang thoi gian nay' });
        }
        res.status(200).json(thongKe);
        console.log('Thong ke theo xe thanh cong');
    } catch (error) {
        console.error('Loi khi goi function thong ke theo xe:', error);
        res.status(500).json({ error: 'Loi khi goi function thong ke theo xe' });
    }
}