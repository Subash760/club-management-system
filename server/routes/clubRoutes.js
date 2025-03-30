const express = require('express');
const router = express.Router();
const Club = require('../models/Club');

// Create Club
router.post('/clubs', async (req, res) => {
  const { name, description } = req.body;
  try {
    const newClub = new Club({ name, description });
    await newClub.save();
    res.status(201).json(newClub);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Get All Clubs
router.get('/clubs', async (req, res) => {
  try {
    const clubs = await Club.find();
    res.status(200).json(clubs);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Get Club by ID
router.get('/clubs/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const club = await Club.findById(id);
    if (!club) return res.status(404).json({ error: 'Club not found' });
    res.status(200).json(club);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Update Club
router.put('/clubs/:id', async (req, res) => {
  const { id } = req.params;
  const { name, description } = req.body;
  try {
    const updatedClub = await Club.findByIdAndUpdate(id, { name, description }, { new: true });
    if (!updatedClub) return res.status(404).json({ error: 'Club not found' });
    res.status(200).json(updatedClub);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Delete Club
router.delete('/clubs/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const deletedClub = await Club.findByIdAndDelete(id);
    if (!deletedClub) return res.status(404).json({ error: 'Club not found' });
    res.status(200).json({ message: 'Club deleted successfully' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
