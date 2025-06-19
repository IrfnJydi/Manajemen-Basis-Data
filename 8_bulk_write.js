// 8. Bulk Write
db.mahasiswa.bulkWrite([
  {
    insertOne: {
      document: { nama: "Kevin", nim: "D0222333", jurusan: "TI", angkatan: 2021 }
    }
  },
  {
    updateOne: {
      filter: { nim: "D0222333" },
      update: { $set: { jurusan: "Teknik Informatika" } }
    }
  }
]);
