// 9. Aggregation
db.mahasiswa.aggregate([
  {
    $group: {
      _id: "$angkatan",
      jumlah: { $sum: 1 }
    }
  }
]);
