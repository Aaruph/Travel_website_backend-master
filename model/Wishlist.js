const mongoose = require("mongoose")
const wishlistSchema = new mongoose.Schema({
    customerId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "customers"
    },
    packageId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "packages"
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
})
const Wishlist = mongoose.model("wishlists", wishlistSchema);

module.exports = Wishlist;