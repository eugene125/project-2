const { Comment } = require("../models");

const commentData = [
    {
        text: "Comment number 1",
        user_id: 1,
        game_id: 1
    },
    {
        text: "Comment number 2",
        user_id: 2,
        game_id: 2
    },
    {
        text: "Comment number 3",
        user_id: 3,
        game_id: 3
    },
    {
        text: "Comment number 4",
        user_id: 4,
        game_id: 4
    },
    {
        text: "Comment number 5",
        user_id: 5,
        game_id: 5
    },
    {
        text: "Comment number 6",
        user_id: 6,
        game_id: 6
    }
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;