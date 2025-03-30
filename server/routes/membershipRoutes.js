const express = require('express');
const router = express.Router();
const Membership = require('../models/Membership');

// Create Membership
router.post('/memberships', async (req, res) => {
  const { user, club, status } = req.body;
  try {
    const newMembership = new Membership({ user, club, status });
    await newMembership.save();
    res.status(201).json(newMembership);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Get All Memberships
router.get('/memberships', async (req, res) => {
  try {
    const memberships = await Membership.find()
      .populate('user', 'name email')  // Populate user details
      .populate('club', 'name');      // Populate club details
    res.status(200).json(memberships);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Get Membership by ID
router.get('/memberships/:id', async (req, res) => {
  try {
    const membership = await Membership.findById(req.params.id)
      .populate('user', 'name email')
      .populate('club', 'name');

    if (!membership) {
      return res.status(404).json({ error: 'Membership not found' });
    }
    res.status(200).json(membership);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Update Membership
router.put('/memberships/:id', async (req, res) => {
  const { status } = req.body;
  try {
    const membership = await Membership.findByIdAndUpdate(
      req.params.id,
      { status },
      { new: true, runValidators: true }
    );

    if (!membership) {
      return res.status(404).json({ error: 'Membership not found' });
    }
    res.status(200).json(membership);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Delete Membership
router.delete('/memberships/:id', async (req, res) => {
  try {
    const membership = await Membership.findByIdAndDelete(req.params.id);
    
    if (!membership) {
      return res.status(404).json({ error: 'Membership not found' });
    }
    res.status(200).json({ message: 'Membership deleted successfully' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;