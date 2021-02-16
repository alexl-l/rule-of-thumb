// =======================================================================================
// Developed By           : Jhon Alexander López Bohórquez
// Email                  : jalb.23@hotmail.com
// Creation Date          : 2021-02-15 23:30:18
// =======================================================================================
// Version    Description
// [1.0.0]    This class captures all the internal errors of the application
// =======================================================================================

const errorHandler = (err, req, res, next) => {
  res.status(500).json({
    success: false,
    error: err.message
  });
};

module.exports = errorHandler;