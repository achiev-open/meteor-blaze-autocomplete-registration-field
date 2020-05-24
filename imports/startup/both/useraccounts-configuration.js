import { AccountsTemplates } from 'meteor/useraccounts:core';

AccountsTemplates.configure({
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
