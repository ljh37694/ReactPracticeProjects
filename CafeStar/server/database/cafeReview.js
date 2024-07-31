const { ObjectId } = require("mongodb");
const { getCollection } = require("./config");

const addCafeReview = async (req, res) => {
  try {
    await getCollection("CafeReviews").insertOne({
      ...req.body,
    });
  } catch (e) {
    console.log(e);
    res.status(500).json(e);
  }
};

const getUserReview = async (req, res) => {
  try {
    const userReviews = await getCollection("CafeReviews")
      .find({
        user_id: req.query.userId,
      })
      .sort({ created: -1 })
      .toArray();

    res.status(200).json(userReviews);
  } catch (e) {
    console.log(e);
    res.status(500).json(e);
  }
};

const getReviewRateAverage = async (req, res) => {
  try {
    const rateAverageList = await getCollection("CafeReviews")
      .aggregate([
        {
          $group: {
            _id: "$id",
            rateAvg: { $avg: "$score" },
          },
        },
      ])
      .toArray();

    console.log(rateAverageList);

    res.status(200).json(rateAverageList);
  } catch (e) {
    console.log(e);
    res.status(500).json(e);
  }
};

const editReview = async (req, res) => {
  try {
    const filter = { _id: new ObjectId(req.body._id) };
    const updateData = { $set: {
      comment: req.body.comment,
      score: req.body.score,
    }}

    const result = await getCollection("CafeReviews").updateOne(filter, updateData);

    console.log(req.body);

    console.log('success', result);
  } catch (e) {
    res.status(500).json(e);
    console.log(e);
  }
};

module.exports = {
  addCafeReview,
  getUserReview,
  getReviewRateAverage,
  editReview,
};
