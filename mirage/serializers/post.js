import JSONAPISerializer from './application';

export default JSONAPISerializer.extend({
  serialize(allPosts, request){
    var reqPage = request.queryParams.reqPage;
    var postsPerPage = request.queryParams.limit;

    var offset = (reqPage - 1)*postsPerPage;
    var lastPost = parseInt(offset, 10) + parseInt(postsPerPage, 10);

    var reqPosts = allPosts.slice(offset, lastPost);
    var nOfPages = Math.ceil(allPosts.length/postsPerPage);
    let json = JSONAPISerializer.prototype.serialize.apply(this,
      [reqPosts, request]
    );

    json.meta = {
      page: reqPage,
      postsOnPage: reqPosts.length,
      totalPages: nOfPages,
      metameta: request.queryParams.toSource()
    }

    return json;
  },
  include: function(request) {
    if(request.queryParams.tags){
      return ['tags'];
    } else {
      return [];
    }
  }
});
