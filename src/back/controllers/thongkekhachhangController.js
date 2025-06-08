import { getThongKeKH } from "../dbservices/thongkekhachhangFunction.js";

export const getThongKeKhachHang = async (req, res) => {
    const { ngaybd, ngaykt } = req.query;
    try {
        const thongKe = await getThongKeKH(ngaybd, ngaykt);
        res.status(200).json(thongKe);
    } catch (error) {
        console.error('Loi khi goi function thong ke khach hang:', error);
        res.status(500).json({ error: 'Loi khi goi function thong ke khach hang' });
    }
}