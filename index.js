import express from 'express';
import mongoose from 'mongoose';
import { User, Order, Restaurant } from './model/index.js';

/*
    To run each problem, remove it from the comment one by one and comment the other problems.
*/




// Problem 2

const coordinates = [39.93, 32.85];
const keyword = "lahmacun";

Restaurant.find({
    "description": { $regex: keyword, $options: "i" },
    "address.location": {
        $near: {
            $geometry: {
                type: "Point",
                coordinates: coordinates
            }
        }
    }
})
    .limit(5)
    .exec((err, restaurants) => {
        if (err) {
            console.error(err);
        } else {
            console.log(restaurants);
        }
});



    

// // Problem 3

// mongoose.connect('mongodb://localhost:27017/mydatabase', { useNewUrlParser: true, useUnifiedTopology: true })
//     .then(() => {
//         console.log('Connected to the database');
//         const session = mongoose.startSession();
//         session.startTransaction();

//         const newMenuItems = [
//             {
//                 name: 'Küçük boy peynirli pizza',
//                 price: 50,
//                 content: 'Lezzetli küçük boy peynirli pizza',
//                 coverImage: 'kucuk_boy_pizza.jpg'
//             },
//             {
//                 name: 'Orta boy mantarlı pizza',
//                 price: 100,
//                 content: 'Leziz orta boy mantarlı pizzaa',
//                 coverImage: 'orta_boy_mantarli.jpg'
//             },
//             {
//                 name: 'Hamburger',
//                 price: 120,
//                 content: 'Taze hamburger',
//                 coverImage: 'hamburger.jpg'
//             }
//         ];

//         Restaurant.findOneAndUpdate(
//             { name: 'Voco Fast Food' },
//             { $push: { menu: { $each: newMenuItems } } },
//             { session }
//         )
//             .then(() => {
//                 session.commitTransaction();
//                 session.endSession();
//             })
//             .catch((error) => {
//                 session.abortTransaction();
//                 session.endSession();
//                 console.error('Failed to add menu items:', error);
//             });
//     })
//     .catch((error) => {
//         console.error('Failed to connect to the database:', error);
//     });


// // Problem 4

// User.find({ gender: 'male' })
//     .sort({ age: -1 })
//     .limit(20)
//     .exec((err, users) => {
//         if (err) {
//             console.error('Failed to fetch male users:', err);
//         } else {
//             console.log('Male users who made the last comments by age:', users);
//         }
//     });


// // Problem 5

// Restaurant.find({
//     $and: [
//         {
//             $or: [
//                 { types: { $in: ["fast food", "home cooking"] } },
//                 { description: { $regex: "fast", $options: "i" } }
//             ]
//         },
//         { score: { $gt: 4 } }
//     ]
// }, { name: 1, types: 1, description: 1 })
//     .exec((err, restaurants) => {
//         if (err) {
//             console.error('Failed to fetch restaurants:', err);
//         } else {
//             console.log('Restaurants with at least one category being fast food or home cooking or containing "fast" in the description, with over 4 points:', restaurants);
//         }
//     });


// // Problem 6

// // Connect to the database
// mongoose.connect('mongodb://localhost:27017/mydatabase', { useNewUrlParser: true, useUnifiedTopology: true })
//     .then(() => {
//         console.log('Connected to the database');
//     })
//     .catch((error) => {
//         console.error('Failed to connect to the database:', error);
//     });

// const app = express();

// // endpoint for serving restaurants with pagination and sorted by average rating
// app.get('/restaurants', async (req, res) => {
//     const page = parseInt(req.query.page) || 1; // Get the page number from the query parameter, default to 1 if not provided
//     const limit = parseInt(req.query.limit) || 10; // Get the limit from the query parameter, default to 10 if not provided

//     try {
//         const restaurants = await Restaurant.aggregate([ 
//             {
//                 $group: {
//                     _id: null,
//                     averageScore: { $avg: '$score' },
//                     restaurants: { $push: '$$ROOT' },
//                 },
//             },
//             { $unwind: '$restaurants' },
//             { $sort: { averageScore: -1 } },
//             { $skip: (page - 1) * limit },
//             { $limit: limit },
//             { $project: { _id: 0, 'restaurants._id': 0 } },
//         ]);

//         res.json(restaurants);
//     } catch (error) {
//         console.error('Failed to fetch restaurants:', error);
//         res.status(500).json({ error: 'Failed to fetch restaurants' });
//     }
// });

// app.listen(3000, () => {
//     console.log('Server is running on port 3000');
// });




// module.exports = { User, Order, Restaurant };
