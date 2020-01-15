const { MOVE_UP, MOVE_LEFT, MOVE_DOWN, MOVE_RIGHT } = require("./constants");

let connection;
const handleUserInput = function(data) {
  if (data === "\u0003") {
    process.exit();
  }
  if (data === MOVE_UP) {
    connection.write("Move: up");
  }
  if (data === MOVE_LEFT) {
    connection.write("Move: left");
  }
  if (data === MOVE_DOWN) {
    connection.write("Move: down");
  }
  if (data === MOVE_RIGHT) {
    connection.write("Move: right");
  }
};

const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};

module.exports = { setupInput };
