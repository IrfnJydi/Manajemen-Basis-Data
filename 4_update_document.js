// 4. Update Document
db.mahasiswa.updateOne(
  { nim: "D0222322" },
  { $set: { jurusan: "Sistem Cerdas" } }
);
