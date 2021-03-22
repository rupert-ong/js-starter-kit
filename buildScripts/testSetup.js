// This file is not transpiled, so must use CommonJS and ES5

// Register babel to transpile before tests are run
require("@babel/register");

// Disable webpack features Mocha does not understand
require.extensions[".css"] = function () {};
