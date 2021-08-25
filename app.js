const Tag = require('./model/tag');
const Video = require('./model/video');
const Module = require('./data/module');

const newVideo = new Video(6, "newvideo", "newchannel", "35M", [new Tag("Live"), new Tag("Game")], "2021-08-20", "12:00", "https://images.unsplash.com/photo-1593642532744-d377ab507dc8?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",100,200,100,"Description Live Game"
  )
// page 1 
// const promises = [
//   Module.add(newVideo),
//   Module.getVideoById(1),
//   Module.filterByCategory("Live"),
//   Module.trendingVideo(), 
//   Module.filterByInput("Game")]

// Promise.all(promises)
// .then(res => console.log(res))
// .catch(rej => console.log(rej))

// Module.add(newVideo)
//   .then(res => Module.printVideoData(res))
//   .catch(rej => console.log(rej))
// Module.getVideoById(1)
//   .then(res => Module.printVideoData(res))
//   .catch(rej => console.log(rej))
// Module.filterByCategory("Live")
//   .then(res => Module.printVideoData(res))
//   .catch(rej => console.log(rej))
// Module.trendingVideo()
//   .then(res => Module.printVideoData(res))
//   .catch(rej => console.log(rej))
// Module.filterByInput("Game")
//   .then(res => Module.printVideoData(res))
//   .catch(rej => console.log(rej))

///page 2
let video_id = 1
let comment_id
Module.getVideoById(1)
   .then(res => Module.printVideoData(res))
   .then(res =>
      Module.getCommentByVideoId(video_id)
   )
   .then(res => console.log(Module.getReplyByCommentId(res)))
   .catch(rej => console.log(rej))
