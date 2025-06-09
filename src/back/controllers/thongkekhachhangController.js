import { getThongKeKH } from "../dbservices/thongkekhachhangFunction.js";

export const getThongKeKhachHang = async (req, res) => {
    const { ngaybd, ngaykt } = req.query;
    try {
        const thongKe = await getThongKeKH(ngaybd, ngaykt);
        if (!thongKe || thongKe.length === 0) {
            return res.status(404).json({ message: 'Khong tim thay thong ke trong khoang thoi gian nay' });
        }
        res.status(200).json(thongKe);
        console.log('Thong ke khach hang thanh cong');
    } catch (error) {
        console.error('Loi khi goi function thong ke khach hang:', error);
        res.status(500).json({ error: 'Loi khi goi function thong ke khach hang' });
    }
}