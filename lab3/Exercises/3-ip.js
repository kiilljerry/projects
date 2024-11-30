'use strict';

const ipToInt = (ip = '127.0.0.1') => {
  const parts = ip.split('.');
  return parts.reduce((acc, current) => (acc << 8) + parseInt(current), 0);
};

module.exports = { ipToInt };
