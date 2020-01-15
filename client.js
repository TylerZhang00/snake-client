const net = require("net");

const { ip, port } = require("./constants");

const connect = function() {
  const conn = net.createConnection({
    host: ip,
    port: port
  });

  conn.on("connect", data => {
    conn.write("Name: YYZ");

    console.log("Successfully connected to game server");
  });

  conn.on("data", data => {
    console.log("It's got a sharp tongue, this server!", data);
  });

  conn.setEncoding("utf8");

  return conn;
};

module.exports = { connect };
