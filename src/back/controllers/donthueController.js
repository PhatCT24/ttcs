import { addDonThue } from '../dbservices/donthueFunction.js';

export const addDT = async (req, res) => {
    const {idkh, xeThueDichVu, ngaybd, ngaykt, giathuexe, thechapID, thechapSL} = req.body;
    try {
        const result = await addDonThue(idkh, xeThueDichVu, ngaybd, ngaykt, giathuexe, thechapID, thechapSL);
        res.status(200).json(result);
        console.log('Thêm đơn thuê thành công:', result);
    } catch (error) {
        console.error('Lỗi khi thêm đơn thuê:', error);
        res.status(500).json({ error: 'Lỗi khi thêm đơn thuê' });
    }
}

export const getDTbyIDKhachhang = async (req, res) => {
    const { id } = req.params;
    try {
        const result = await getDonThueByIDKhachHang(id);
        res.status(200).json(result);
    } catch (error) {
        console.error('Lỗi khi lấy đơn thuê theo ID khách hàng:', error);
        res.status(500).json({ error: 'Lỗi khi lấy đơn thuê theo ID khách hàng' });
    }
}