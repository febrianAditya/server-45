module.exports = {
    apps : [{
        name   : "server1",
        script : "./app.js",
        env: {
            PORT: 80,
            NODE_ENV: "production"
        },
        max_restarts: 10,   // Mengurangi jumlah restart maksimum
        restart_delay: 5000 // Memberi jeda 5 detik sebelum restart
    }]
  }
  