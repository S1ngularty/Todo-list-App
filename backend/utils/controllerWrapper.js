function controllerWrapper(fn) {
  return async function (req, res) {
    try {
      const result = await fn(req,res);
      return res.json({
        success:true,
        result
      });
    } catch (error) {
      console.log(error);
      res.status(500).json({
        success: false,
        error: error.message,
      });
    }
  };
}

module.exports = controllerWrapper