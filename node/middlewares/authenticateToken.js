const authenticateToken = async (req, res, next) => {
  try {
    console.log(req?.headers?.authorization);
    const token = req.headers.authorization.split(' ')[1];
    console.log(token);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = authenticateToken;
