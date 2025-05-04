// Namespace: AljabarLibraries
const AljabarLibraries = {
    AkarPersamaanKuadrat: function(persamaan) {
      const [a, b, c] = persamaan;
      const D = b * b - 4 * a * c;
  
      if (D < 0) {
        return []; // Tidak ada akar real
      }
  
      const sqrtD = Math.sqrt(D);
      const x1 = (-b + sqrtD) / (2 * a);
      const x2 = (-b - sqrtD) / (2 * a);
      return [x1, x2];
    },
  
    HasilKuadrat: function(persamaan) {
      const [a, b] = persamaan;
      const aBaru = a * a;
      const bBaru = 2 * a * b;
      const cBaru = b * b;
      return [aBaru, bBaru, cBaru];
    }
  };
  
  module.exports = AljabarLibraries;
  