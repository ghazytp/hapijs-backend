const Hapi = require("@hapi/hapi");
const routes = require("./routes");

// Inisialisasi server
const init = async () => {
  const server = Hapi.server({
    port: 3000,
    host: "localhost",
  });

  // Konfigurasi Route
  // server.route dapat
  server.route(routes);

  // Menjalankan server
  await server.start();
  console.log(`Server Running On ${server.info.uri}`);
};

init();
