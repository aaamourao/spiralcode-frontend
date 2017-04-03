import { JSONAPISerializer } from 'ember-cli-mirage';

export default JSONAPISerializer.extend({
  root: true,
  embed: true
});
