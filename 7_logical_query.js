// 7. Logical Query
db.mahasiswa.find({
  $or: [
    { jurusan: "Sistem Cerdas" },
    { angkatan: 2021 }
  ]
});
