const { getCollection } = require("./config");

const getFavoriteCafes = async (req, res) => {
  try {
    const data = await getCollection('FavoriteCafes').find().toArray();
    
    res.send(data);
  } catch(e) {
    console.log(e);
  }
}

const addFavoriteCafe = async (req, res) => {
  try {
    const result = await getCollection('FavoriteCafes').insertOne({
      ...req.body,
    });
    
    console.log(result);
  } catch (e) {
    console.log(e);
    res.status(500).json(e);
  }
}

const deleteFavoriteCafe = async (req, res) => {
  try {
    const result = await getCollection("FavoriteCafes").deleteOne({
      id: req.query.id,
    });

    console.log(result);
  } catch (e) {
    console.log(e);
  }
};


module.exports = {
  getFavoriteCafes,
  addFavoriteCafe,
  deleteFavoriteCafe,
}