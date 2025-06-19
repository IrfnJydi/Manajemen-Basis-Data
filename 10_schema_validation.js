// 10. Schema Validation
db.createCollection("mahasiswa_valid", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["nama", "nim", "jurusan", "angkatan"],
      properties: {
        nama: { bsonType: "string" },
        nim: { bsonType: "string" },
        jurusan: { bsonType: "string" },
        angkatan: { bsonType: "int" }
      }
    }
  }
});
