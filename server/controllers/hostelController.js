const db = require("../connection/connection");

const hostelHttp = {
    getAllHostels: async (req, res) => {
        const sql = `SELECT * FROM tblHostel`;
        try {
            db.query(sql, (err, result) => {
                if (err) {
                    console.log(err);
                    res.status(400).json({ error: err.message });
                    return;
                }
                res.json(result);
            });
        } catch (err) {
            console.log(err);
            res.status(500).json({ message: "Cannot get all hostels." });
        }
    },
};

module.exports = hostelHttp;
