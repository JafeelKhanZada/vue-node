class Sum {
  calculate(req, res, next) {
    try {
      const { number1, number2 } = req.body;
      let sum = number1 + number2;
      return res.json({ sum, error: null, message: "" });
    } catch (error) {
      return res.json({
        sum: 0,
        error: "Error in sum controller",
        message: error,
      });
    }
  }
}
module.exports = Sum;
