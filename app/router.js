import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.resource('posts', function() {
    this.route('show', {path: "/:post_id"}, function() {
      this.resource("comments", function(){
        this.route("new");
        this.route('edit', {path: "/:comment_id/edit"});
      });
    });

    this.route('new');
    this.route('edit', {path: '/:post_id/edit'});
  });
});

export default Router;
