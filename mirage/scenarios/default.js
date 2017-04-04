//
// Seed SpiralCode-Frontend DB
//
// made by madc0w
//

export default function(server){
  // Create six posts
  let Posts = server.createList('post', 12);

  // Create a tag that is related to all posts
  let universalTag = server.create('tag', Posts);

  // For each post, create two tags, and five comments
  Posts.forEach(function(post){
    let comments = server.createList('comment', 3, { 'post': post })
    let tags = server.createList('tag', 2, { 'posts': { post } });
    tags.push(universalTag);
    post.update('tags', tags);
    post.update('comments', comments);
  });
}
