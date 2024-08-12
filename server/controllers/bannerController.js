const Banner = require('../models/Banner');

const getBanner = (req, res) => {
  Banner.getBanner((err, result) => {
    if (err) return res.status(500).json({ error: err });
    res.json(result[0]);
  });
};

const updateBanner = (req, res) => {
  const { description, timer, link, isVisible } = req.body;

  console.log('Received data:', { description, timer, link, isVisible });

  if (!description || !timer || !link) {
    console.log('Validation error: Missing required fields');
    return res.status(400).json({ error: 'Missing required fields' });
  }

  Banner.updateBanner({ description, timer, link, isVisible }, (err, result) => {
    if (err) {
      console.error('Database error during banner update:', err); // Log the exact error message
      return res.status(500).json({ error: err.message || 'Failed to update banner' }); // Use the exact error message
    }

    console.log('Banner updated successfully:', result);
    res.json({ success: true });
  });
};



module.exports = {
  getBanner,
  updateBanner,
};
