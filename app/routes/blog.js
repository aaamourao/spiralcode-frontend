import Ember from 'ember';
import Pagination from 'ember-cli-jsonapi-pagination/mixins/routes/jsonapi-pagination';

export default Ember.Route.extend(Pagination, {
  model(params){
    /*
     * Hardcode the limit to five instead
     * of assigning it to the params.size
     * value, which come from the controller,
     * for not allowing the user to choose
     * a bigOne
     */
    let sizeCeiled = (params.size > 5) ? 5 : params.size;

    return this.queryPaginated(
      'post',
      {
        include: 'tags',
        limit: sizeCeiled,
        reqPage: params.number,
        metaParams: params.toSource()
      }
    );
  }
});
