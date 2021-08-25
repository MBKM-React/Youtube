class Comment {
  constructor(id, likes_count, dislikes_count,
   username, content, published_at, video_id) {
    this.id = id
    this.likesCount = likes_count
    this.dislikesCount = dislikes_count
    this.userName = username
    this.content = content
    this.publishedAt = published_at
    this.video_id = video_id
  }
}
module.exports = Comment;