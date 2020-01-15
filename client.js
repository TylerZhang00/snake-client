const net = require("net");

const connect = function() {
  const conn = net.createConnection({
    host: "172.46.2.204",
    port: 50541
  });

  conn.on("connect", data => {
    conn.write("Name: YYZ");
    conn.write("Move: up");

    console.log("Successfully connected to game server");
  });

  conn.on("data", data => {
    console.log("It's got a sharp tongue, this server!", data);
  });

  conn.setEncoding("utf8");

  return conn;
};

module.exports = { connect };
