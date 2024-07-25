const { getCollection } = require("./config");

const addCafeReview = async (req, res) => {
  try {
    await getCollection('CafeReviews').insertOne({
      ...req.body,
    });
  } catch (e) {
    console.log(e);
    res.status(500).json(e);
  }
};

module.exports = {
  addCafeReview,
};