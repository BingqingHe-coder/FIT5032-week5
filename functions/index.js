/**
 * Import function triggers from their respective submodules:
 *
 * const {onCall} = require("firebase-functions/v2/https");
 * const {onDocumentWritten} = require("firebase-functions/v2/firestore");
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

const {onRequest} = require("firebase-functions/v2/https");
const admin = require("firebase-admin");
const cors = require("cors")({origin: true});
const functions = require('firebase-functions');

admin.initializeApp();

exports.getAllBooks = onRequest((req, res) => {
  cors(req, res, async () => {
    try {
      console.log("Starting getAllBooks function");
      const booksCollection = admin.firestore().collection("books");
      console.log("Querying books collection");
      const snapshot = await booksCollection.get();
      
      const books = [];
      snapshot.forEach(doc => {
        books.push({
          id: doc.id,
          ...doc.data()
        });
      });
      
      console.log(`Found ${books.length} books`);
      res.status(200).json({books});
    } catch (error) {
      console.error("Error getting books:", error);
      res.status(500).json({error: "Error getting books", message: error.message});
    }
  });
});

exports.countBooks = onRequest((req, res) => {
  cors(req, res, async () => {
    try {
      const booksCollection = admin.firestore().collection("books");
      const snapshot = await booksCollection.get();
      const count = snapshot.size;

      res.status(200).send({count});
    } catch (error) {
      console.error("Error counting books:", error.message);
      res.status(500).send("Error counting books");
    }
  });
});
exports.capitalizeBook = functions.firestore
    .document('books/{bookId}')
    .onCreate((snap, context) => {
        const book = snap.data();
        const capitalizedBook = {};

        Object.keys(book).forEach(key => {
            if (typeof book[key] === 'string') {
                capitalizedBook[key] = book[key].toUpperCase();
            } else {
                capitalizedBook[key] = book[key];
            }
        });

        return snap.ref.set(capitalizedBook, {merge: true});
    });




// Create and deploy your first functions
// https://firebase.google.com/docs/functions/get-started

// exports.helloWorld = onRequest((request, response) => {
//   logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
