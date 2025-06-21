
// Basic CRUD Operations
db.books.find({ genre: "Thriller" });
db.books.find({ published_year: { $gt: 2015 } });
db.books.find({ author: "James Clear" });
db.books.updateOne({ title: "Atomic Habits" }, { $set: { price: 1600 } });
db.books.deleteOne({ title: "The Silent Patient" });

// Advanced Queries
db.books.find({ in_stock: true, published_year: { $gt: 2010 } });
db.books.find({}, { title: 1, author: 1, price: 1 });
db.books.find().sort({ price: 1 });
db.books.find().sort({ price: -1 });
db.books.find().limit(5).skip(0);
db.books.find().limit(5).skip(5);

// Aggregation Pipeline
db.books.aggregate([{ $group: { _id: "$genre", averagePrice: { $avg: "$price" } } }]);
db.books.aggregate([
  { $group: { _id: "$author", count: { $sum: 1 } } },
  { $sort: { count: -1 } },
  { $limit: 1 }
]);
db.books.aggregate([
  {
    $group: {
      _id: { $floor: { $divide: ["$published_year", 10] } },
      count: { $sum: 1 }
    }
  },
  { $sort: { _id: 1 } }
]);

// Indexing
db.books.createIndex({ title: 1 });
db.books.createIndex({ author: 1, published_year: -1 });
db.books.find({ title: "Atomic Habits" }).explain("executionStats");
