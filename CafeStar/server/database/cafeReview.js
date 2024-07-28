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

const getUserReview = async (req, res) => {
  try {  
    const userReviews = await getCollection('CafeReviews').find({
      'user_id': req.query.userId,
    }).toArray();

    res.status(200).json(userReviews);
  } catch (e) {
    console.log(e);
    res.status(500).json(e);
  }
};

const getReviewRateAverage = async (req, res) => {
  try {
    const rateAverageList = await getCollection('CafeReviews').aggregate([
      {
        $group:
        {
          _id: "$id",
          avgRate: { $avg: "$score" },
        }
      }
    ]).toArray();

    console.log(rateAverageList);

    res.status(200).json(rateAverageList);
  } catch (e) {
    console.log(e);
    res.status(500).json(e);
  }
}

module.exports = {
  addCafeReview,
  getUserReview,
  getReviewRateAverage,
};