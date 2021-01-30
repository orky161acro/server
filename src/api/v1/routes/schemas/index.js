const validation_mw = (schema) => async (req, res, next) => {
    try {
        await schema.validateAsync(req.body)
        next()
    }
    catch (e) {
        console.log(e)
        return res.status(500).json({
            message: JSON.stringify(e),
        });
    }
};

module.exports = validation_mw
