const Tag = require('../model/tag');
const Video = require('../model/video');
const Comment = require('../model/comment');
const Reply = require('../model/reply');

const videos = []
const comments = []
const replies = []
const tag1 = ["Live", "Music", "Game", "Basketball"]
const tag2 = ["Football", "Cooking", "Adventure", "Cartoon"]
const titles = ["Game Mobile Legend", "Vaksinasi Indonesia", "Makan Cimol"]


for (let i = 1; i <= 5; i++) {
  let title = titles[Math.floor(Math.random() * titles.length)]
  let tag_1 = tag1[Math.floor(Math.random() * tag1.length)]
  let tag_2 = tag2[Math.floor(Math.random() * tag2.length)]
  let comments_count = Math.floor(Math.random() * 100);
  let likes_count = Math.floor(Math.random() * 100);
  let dislikes_count = Math.floor(Math.random() * 100);
  let description = `Description ${tag_1} ${tag_2}`

  videos.push(new Video(
    i, `${title}`, `channel${i}`, `3${i}M`,
    [new Tag(tag_1), new Tag(tag_2)],
    `2021-08-2${i}`, `12:0${i}`, "https://images.unsplash.com/photo-1593642532744-d377ab507dc8?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    comments_count, likes_count, dislikes_count, description
  ))

  comments.push(new Comment(
    i, likes_count, dislikes_count,
   `username ${i}`, `comment ${i}`, `2021-08-2${i}`, i
  ))

  replies.push(new Reply(
    i,likes_count, dislikes_count,
   `username ${i}`, `reply ${i}`, `2021-08-2${i}`, 1
  ))
  
}

module.exports = {videos,comments,replies};