module.exports = (callback) => {
    return async (req, res, next) => {
        try {
            await callback(req, res, next);
        } catch (error) {
            res.status(error.code).send("An error occurred: " + error.message);
        }
    };
};
