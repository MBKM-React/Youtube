class Reply {
  constructor(id,likes_count, dislikes_count, username, 
  content, published_at, comment_id){
  this.id = id
  this.likesCount = likes_count
  this.dislikesCount = dislikes_count
  this.userName = username
  this.content = content
  this.publishedAt = published_at
  this.comment_id = comment_id;
  }
} 
module.exports = Reply;