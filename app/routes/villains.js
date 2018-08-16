import Route from '@ember/routing/route';

export default Route.extend({
	model() {
		return ['The Mighty Monarch', 'Dr. Girlfriend', 'Sergeant Hatred'];
	}
});
