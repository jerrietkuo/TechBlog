const User = require('./User');
const Blog = require('./Blog');
const Comment = require('./Comment');

Blog.belongsTo(User, {
  foreignkey: 'userId',
  onDelete: 'CASCADE',
});

Blog.hasMany(Comment, {
  foreignkey: 'blogId',
  onDelete: 'CASCADE',
});

Comment.belongsTo(User, {
  foreignkey: 'userId',
  onDelete: 'CASCADE',
});

module.exports = {
  User,
  Blog,
  Comment,
};