export default function handler(req, res) {
    const pincodes = [110001, 110002, 110003, 400001, 400002, 400003, 560001, 560002, 560003, 700001, 700002, 700003]
    res.status(200).json(pincodes)
}
