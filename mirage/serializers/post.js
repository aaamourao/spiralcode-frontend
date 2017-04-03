import JSONAPISerializer from './application';

export default JSONAPISerializer.extend({
  include: function(request) {
    if(request.queryParams.tags){
      return ['tags'];
    } else {
      return [];
    }
  }
});
