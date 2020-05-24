import { AccountsTemplates } from 'meteor/useraccounts:core';

AccountsTemplates.INPUT_TYPES.push("autocomplete");

AccountsTemplates.configure({
	showLabels: true,
	defaultTemplate: 'Auth_page',
	defaultLayout: 'App_body',
	defaultContentRegion: 'main',
	defaultLayoutRegions: {},
	homeRoutePath: '/'
});

AccountsTemplates.configureRoute('signIn', {
	name: 'signin',
	path: '/signin',
});

AccountsTemplates.configureRoute('signUp', {
	name: 'join',
	path: '/join',
});

AccountsTemplates.addField({
	_id: "address",
	placeholder: "Your full address",
	type: "autocomplete",
	required: true
});
