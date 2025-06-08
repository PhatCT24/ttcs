import { getThongKeTheoXe } from "../dbservices/thongketheoxeFunction.js";

export const getThongKeXe = async (req, res) => {
    const { ngaybd, ngaykt, hangxe } = req.query;
    try {
        const thongKe = await getThongKeTheoXe(ngaybd, ngaykt, hangxe);
        res.status(200).json(thongKe);
    } catch (error) {
        console.error('Loi khi goi function thong ke theo xe:', error);
        res.status(500).json({ error: 'Loi khi goi function thong ke theo xe' });
    }
}