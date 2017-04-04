import JSONAPISerializer from './application';

export default JSONAPISerializer.extend({
  serialize(allPosts, request){
    let pagePosts = allPosts.slice(
      request.queryParams.offset,
      request.queryParams.limit
    );
    let json = JSONAPISerializer.prototype.serialize.apply(
      this,
      [pagePosts, request]
    );

    json.meta = {
      // TODO: Calculate pageNumber and total in the right wat
      page: request.queryParams.offset/request.queryParams.limit,
      total: allPosts.length/request.queryParams.limit,
      batch: pagePosts.length,
      limit: request.queryParams.limit
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
