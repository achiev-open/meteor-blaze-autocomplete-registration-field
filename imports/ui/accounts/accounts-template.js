import "./accounts-template.html";
import {Template} from "meteor/templating";
import { AccountsTemplates } from 'meteor/useraccounts:core';

Template.atInput.helpers({
	templateName: function() {
		if (this.template)
			return this.template;
		if (this.type === "checkbox")
			return "atCheckboxInput";
		if (this.type === "select")
			return "atSelectInput";
		if (this.type === "radio")
			return "atRadioInput";
		if (this.type === "hidden")
			return "atHiddenInput";
		if (this.type === "autocomplete")
			return "atAutocompleteInput";
		return "atTextInput";
	}
});

Template.atAutocompleteInput.helpers(AccountsTemplates.atInputHelpers);
Template.atAutocompleteInput.events(AccountsTemplates.atInputEvents);
