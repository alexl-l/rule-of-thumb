// =======================================================================================
// Developed By           : Jhon Alexander López Bohórquez
// Email                  : jalb.23@hotmail.com
// Creation Date          : 2021-02-15 22:33:00
// =======================================================================================
// Version    Description
// [1.0.0]    This class is in charge of processing the request and response of the rulings
// =======================================================================================

const Ruling = require("../models/ruling.model");

exports.getRulings = async (req, res, next) => {
  try {
    const ruling = await Ruling.find();
    res.status(200).json({ success: true, data: ruling });
  } catch (error) {
    next(error);
  }
};

exports.getRuling = async (req, res, next) => {
  try {
    const ruling = await Ruling.findById(req.params.id);
    res.status(200).json({ success: true, data: ruling });
  } catch (error) {
    next(error);
  }
};

exports.postRuling = async (req, res, next) => {
  const ruling = await Ruling.create(req.body);
  try {
    res.status(201).json({ success: true, data: ruling });
  } catch (error) {
    next(error);
  }
};

exports.updateRuling = async (req, res, next) => {
  try {
    const ruling = await Ruling.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!ruling) {
      return res.status(400).json({ success: false });
    }
    res.status(200).json({ success: true, data: ruling });
  } catch (error) {
    next(error);
  }
};
