import Route from '@ember/routing/route';
import RSVP from 'rsvp';
export default Route.extend({
    model() {
        return RSVP.hash({
          reviews: this.get('store').findAll('review'),
          employees: this.get('store').findAll('employee')
        });
      }
});
