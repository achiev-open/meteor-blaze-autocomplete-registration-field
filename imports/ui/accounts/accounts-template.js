import {Template} from "meteor/templating";
import { AccountsTemplates } from 'meteor/useraccounts:core';

import "../components/autocomplete-input/autocomplete-input.js";
import "./accounts-template.html";

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

Template.atAutocompleteInput.helpers({
	'concat': function() {
		return Array.prototype.slice.call(arguments, 0, -1).join('');
	}
});

Template.atAutocompleteInput.events({
	'focusin input'(event, template) {
		event.stopImmediatePropagation();
	},
	'focusout input, change select'(event, t) {
		event.stopImmediatePropagation();
	},
	'onSelected'(event, template, data) {
		let field = Template.currentData();
		field.clearStatus();
		field.setValue(template, data ? data.properties.name : "");
	}
});

