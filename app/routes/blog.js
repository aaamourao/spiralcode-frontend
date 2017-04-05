import Ember from 'ember';
import Pagination from 'ember-cli-jsonapi-pagination/mixins/routes/jsonapi-pagination';

export default Ember.Route.extend(Pagination, {
  model(params){
    return this.queryPaginated(
      'post',
      {
        include: 'tags',
        limit: params.size,
        reqPage: params.number,
        metaParams: params.toSource()
      }
    );
  }
});
