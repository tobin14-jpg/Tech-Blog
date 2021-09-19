const { Comment } = require('../models');

const commentData = [
  {
    comment_text: "Thanks! Gulp is such a useful extension for your sql shell!",
    post_id: 3,
    user_id: 1
  },
  {
    comment_text: "TEXT is another useful data type for entering long form text data.",
    post_id: 1,
    user_id: 4
  },
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;