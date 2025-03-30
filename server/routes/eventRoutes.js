const express = require('express');
const router = express.Router();
const Event = require('../models/Event');

// Create Event
router.post('/events', async (req, res) => {
  const { name, description, date, location } = req.body;
  try {
    const newEvent = new Event({ name, description, date, location });
    await newEvent.save();
    res.status(201).json(newEvent);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Get All Events
router.get('/events', async (req, res) => {
  try {
    const events = await Event.find();
    res.status(200).json(events);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Get Event by ID
router.get('/events/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const event = await Event.findById(id);
    if (!event) return res.status(404).json({ error: 'Event not found' });
    res.status(200).json(event);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Update Event
router.put('/events/:id', async (req, res) => {
  const { id } = req.params;
  const { name, description, date, location } = req.body;
  try {
    const updatedEvent = await Event.findByIdAndUpdate(id, { name, description, date, location }, { new: true });
    if (!updatedEvent) return res.status(404).json({ error: 'Event not found' });
    res.status(200).json(updatedEvent);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Delete Event
router.delete('/events/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const deletedEvent = await Event.findByIdAndDelete(id);
    if (!deletedEvent) return res.status(404).json({ error: 'Event not found' });
    res.status(200).json({ message: 'Event deleted successfully' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
