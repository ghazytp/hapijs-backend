const routes = [
  {
    method: "GET",
    path: "/",

    // Parameter handler (request, h)
    // request -> Detail request dari client
    // h -> response toolkit, digunakan untuk menetapkan response, content type, content length, dll
    
    handler: (request, h) => {
      // Contoh Detailed Notation "h"
      const detailed_response = h.response("success");
      response.type("text/plain");
      response.header("X-Custom", "some-value");

      // return response

      // Contoh Chained Notation "h"
      const chained_response = h
        .response("success")
        .type("text/plain")
        .header("X-Custom", "some-value");

      return "Home Page";
    },
  },
  {
    method: "POST",
    path: "/login",
    handler: (request, h) => {
      const { username, password } = request.payload;
      return { message: `Hello ${username}`, password: password };
    },
  },
  {
    method: "POST",
    path: "/register",
    handler: (request, h) => {
      return h.response("created").code(201);
    },
  },
  {
    method: "GET",
    path: "/about",
    handler: (request, h) => {
      return "About Page";
    },
  },

  // MENGGUNAKAN PARAMETER
  // Jika parameter tidak diberikan, server akan mengembalikan error (Pada case ini yang ditampilkan adalah Page Not Found)
  {
    method: "GET",
    path: "/users/{username}",
    handler: (request, h) => {
      const { username } = request.params;
      return `Hello ${username}!`;
    },
  },
  // Dengan menambahkan "?" di param yang digunakan, server tidak akan mengembalikan error
  // Tetapi akan mengembalikan undifined jika nilai default param tidak ditentukan
  {
    method: "GET",
    path: "/user/{nickname?}",
    handler: (request, h) => {
      const { nickname } = request.params;
      return `Hello ${nickname}!`;
    },
  },

  // MENGGUNAKAN QUERY url/?query_key=query_value
  {
    method: "GET",
    path: "/hello/{nickname?}",
    handler: (request, h) => {
      const { nickname } = request.params;
      const { lang } = request.query;

      if (lang == "id") return `Halo ${nickname}!`;

      return `Hello ${nickname}!`;
    },
  },

  // Menggunakan method "*" berarti route yang dibuat dapat diakses dengan semua method yang ada di HTTP
  // Tetapi akan lebih diutamakan pada route yang telah didefinisikan methodnya
  {
    method: "*",
    path: "/",
    handler: (request, h) => {
      return "Page Can Not Be Accessed Using Any Method";
    },
  },

  // Handling Page Not Found
  {
    method: "*",
    path: "/{any*}",
    handler: (request, h) => {
      return "Page Not Found";
    },
  },
];

module.exports = routes;
