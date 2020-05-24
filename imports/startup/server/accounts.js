import {Accounts} from 'meteor/accounts-base';

Accounts.onCreateUser((options, user) => {
	user.address = options.profile.address;
	return user;
});
