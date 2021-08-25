
class Video {
  constructor(id, title, channel, views_count, tags, published_at, video_duration, video_thumbnail, comments_count, likes_count, dislikes_count, description) {
    this.id = id
    this.title = title
    this.channel = channel
    this.views_count = views_count
    this.tags = tags
    this.published = published_at
    this.video_duration = video_duration
    this.video_thumbnail = video_thumbnail
    this.comments_count = comments_count
    this.likes_count = likes_count
    this.dislikes_count = dislikes_count
    this.description = description
  }
  
}
module.exports = Video;