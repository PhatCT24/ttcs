import { getThongKeTheoDongXe } from "../dbservices/thongketheodongxeFunction.js";

export const getThongKeDong = async (req, res) => {
    const { ngaybd, ngaykt } = req.query;
    try {
        const thongKe = await getThongKeTheoDongXe(ngaybd, ngaykt);
        res.status(200).json(thongKe);
    } catch (error) {
        console.error('Loi khi goi function thong ke theo dong xe:', error);
        res.status(500).json({ error: 'Loi khi goi function thong ke theo dong xe' });
    }
}