const check_admin = (req, res) => {
    res.status(200).json({
        message: "authenticated ",
        success: true
    });
};

export default check_admin;