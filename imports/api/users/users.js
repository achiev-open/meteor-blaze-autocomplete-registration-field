import { Meteor } from 'meteor/meteor';
import SimpleSchema from 'simpl-schema';

Meteor.users.schema = new SimpleSchema({
	emails: {
		type: Array,
		optional: false
	},
	"emails.$": {
		type: Object
	},
	"emails.$.address": {
		type: String,
		regEx: SimpleSchema.RegEx.Email
	},
	"emails.$.verified": {
		type: Boolean
	},
	createdAt: {
		type: Date
	},
	// Make sure this services field is in your schema if you're using any of the accounts packages
	services: {
		type: Object,
		optional: true,
		blackbox: true
	},
	heartbeat: {
		type: Date,
		optional: true
	},
	// Custom field
	address: {
		type: String,
		optional: false
	},
});

Meteor.users.attachSchema(Meteor.users.schema);
