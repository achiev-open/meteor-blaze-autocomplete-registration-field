import {Template} from "meteor/templating";
import {Meteor} from "meteor/meteor";
import { FlowRouter } from 'meteor/kadira:flow-router';

import "./app-body.html";

Template.App_body.events({
	'click .js-logout'(event, instance) {
		Meteor.logout();
		FlowRouter.go('App.home');
	}
});
