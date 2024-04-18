const router = require("express").Router();
const User = require("../models/User");
const CryptoJS = require("crypto-js");
const verify = require("../verifyToken");

//UPDATE
router.put("/:id", verify, async (req, res) => {
  console.log(req.params.id);
  if (req.user.id === req.params.id || req.user.isAdmin) {
    if (req.body.password) {
      req.body.password = CryptoJS.AES.encrypt(
        req.body.password,
        process.env.SECRET_KEY
      ).toString();
    }
    try {
      const updatedUser = await User.findByIdAndUpdate(
        req.params.id,
        {
          $set: req.body,
        },
        {
          new: true,
        }
      );
      res.status(200).json(updatedUser);
    } catch (err) {
      res.status(500).json(err);
    }
  } else {
    res.status(403).json("you can update only your account! ");
  }
});

module.exports = router;

//DELETE
router.delete("/:id", verify, async (req, res) => {
  console.log(req.params.id);
  if (req.user.id === req.params.id || req.user.isAdmin) {
    try {
      await User.findByIdAndDelete(req.params.id);

      res.status(200).json("User has been deleted...");
    } catch (err) {
      res.status(500).json(err);
    }
  } else {
    res.status(403).json("you can delete only your account! ");
  }
});
//GET

router.get("/find/:id", async (req, res) => {
  console.log(req.params.id);
  try {
    const user = await User.findById(req.params.id);

    const { password, ...info } = user._doc;
    res.status(200).json(info);
  } catch (err) {
    res.status(500).json(err);
  }
});
//GETALL
router.get("/",verify, async (req, res) => {
  const query = req.query.new;
  if (req.user.isAdmin) {
    try {
      const users = query ? await User.find().sort({ _id: -1 }).limit(10)
      : await User.find();

      res.status(200).json(users);
    } catch (err) {
      res.status(500).json(err);
    }
  } else {
    res.status(403).json("you are not allowed to see all users");
  }
});
//GET USER STATS
router.get("/stats", async (req, res) => {
  const today = new Date();
  const latyear = today.setFullYear(today.setFullYear() - 1);
  const monthsAray = [
    "January",
    "February",
    "March",
    "April",
    " May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  try {
    const data = await User.aggregate([
      {
        $project: {
          month: {$month: "$createdAt"}
        }
      },
      {
        //mongo functions can also write year instead of months
        $group: {
          _id: "$month",
          total: { $sum: 1 },
        },
      },
    ]);
    res.status(201).json(data)
  } catch (err) {
    res.status(500).json(err);
  }
});
