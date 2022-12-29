const User = require('../Database/models/User');
const express = require('express');
const Logger = require('../../utils/logging/Logger');

const app = express.Router();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.post('/setAvatar/:id', async (req, res) => {
  try {
    const userId = req.params.id;
    const avatarURL = req.body.image;
    const userData = await User.findByIdAndUpdate(userId, {
      setAvatarImage: true,
      avatarURL,
    });
    return res.json({
      isSet: userData.setAvatarImage,
      image: userData.avatarURL,
    });
  } catch (err) {
    Logger.ERROR(err);
  }
});

module.exports = app;
