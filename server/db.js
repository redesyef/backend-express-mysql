import { createPool } from "mysql2/promise";

export const pool = createPool({
  host: "45.93.101.1",
  user: "u920415849_crud",
  database: "u920415849_crud",
  password: "6Ma1ugpz7",
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});
pool.getConnection(function (err, conn) {
  // Do something with the connection
  conn.query(/* ... */);
  // Don't forget to release the connection when finished!
  pool.releaseConnection(conn);
  console.log("conectado");
});
