const {videos,comments,replies} = require('./datasource');
class Module {
  static printVideoData = arrOfObject => {
    arrOfObject.forEach(object => {
      for (const property in object) {
        if(property != 'tags')
        console.log(`${property}: ${object[property]}`)
        else {
        let tagarr = []
        object['tags'].forEach(tag =>{
          tagarr.push(tag.name)
        })
        console.log(`Tag: ${tagarr}`)
        } 
      }
      console.log('===')
    })
  }
  static filterByCategory = category => {
    return new Promise((resolve, reject) => {
      let findCate = videos.filter(video =>
        video.tags.find(tag =>
          tag.name.toLowerCase() === category.toLowerCase()
        )
      )
      findCate ? resolve(findCate) : reject("not found")
    })
  }

  static trendingVideo = () => {
    return new Promise((resolve, reject) => {
      let trend = videos.sort(function(a, b) {
        let resA = a.views_count.split('M')
        let resB = a.views_count.split('M')
        return resA[0] - resB[0]
      });
      trend ? resolve(trend.reverse()) : reject("not found")
    })
  }

  static add = newvideo => {
    return new Promise((resolve, reject) => {
      newvideo ? videos.push(newvideo) : reject("failed to add")
      resolve(videos)
    })
  }
  static getVideoById = id => {
    return new Promise((resolve, reject) => {
      let find = videos.find(video => id === video.id)
      find ? resolve([find]) : reject("not found")
    })
  }
  static filterByInput = input => {
    return new Promise((resolve, reject) => {
      input = input.toLowerCase()
      let found = videos.filter((video) =>
        video.tags.find(tag => tag.name === input) ||
        video.title.toLowerCase().includes(input) ||
        video.title.to
      )
      found ? resolve(found) : reject("not found")
    })
  }
  ////page2////

  static getCommentByVideoId = id => {
    return new Promise((resolve, reject) => {
      let find = comments.filter(comment => id === comment.video_id);

      let sorted = find.sort((a, b) => {
        return a.published_at - b.published_at
      });

      let comment_id = []
      if(sorted){
        sorted.forEach((comment)=>{
          console.log(comment)
          comment_id.push(comment.id)
        })
        resolve(comment_id)
      }
      else{
        reject("not found")
      }
    })
  }

  static getReplyByCommentId = (arrayOfId)=>{
    return new Promise((resolve, reject) => {
      let find = replies.filter( reply => arrayOfId.includes(reply.comment_id))
      let sorted = find.sort(function(a, b) {
        return a.published_at - b.published_at
      })
      find ? resolve(sorted) : reject("not found")
    })
  }
}
module.exports = Module;