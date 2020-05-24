import {Template} from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var'

import "./autocomplete-input.html";
import { HTTP } from 'meteor/http'

const apiUrl = "https://api-adresse.data.gouv.fr/search";

Template.AutocompleteInput.onCreated(function() {
	this.suggestions = new ReactiveVar();
	this.locationData = new ReactiveVar({});
});

Template.AutocompleteInput.helpers({
	suggestions: function() {
		return Template.instance().suggestions.get();
	}
});


Template.AutocompleteInput.events({
	'click .autocomplete-suggestion'(event, t) {
		let selectedItem = t.suggestions.get()[+event.currentTarget.dataset.suggestionId];
		t.locationData.set(selectedItem);
		if (this.parentId) {
			$("#" + this.parentId).trigger("onSelected", t.locationData.get())
		}
		t.$("input").val(selectedItem.properties.name + ", " + selectedItem.properties.context);
		t.suggestions.set(null);
	},
	'keyup input'(event, t) {
		let input = event.target.value;
		let currentData = t.locationData.get();
		if (currentData && currentData.properties) {
			t.locationData.set({});
			if (this.parentId) {
				$("#" + this.parentId).trigger("onSelected", null);
			}
		}

		if (input && input.length > 2) {
			let query = apiUrl + "?limit=5&q=" + input;
			if (this.typeFilter) {
				query += "&type=" + this.typeFilter;
			}
			HTTP.call("GET", query, {
				headers: {
					'Accept': 'application/json'
				}
			}, (error, response) => {
				const data = JSON.parse(response.content).features;
				t.suggestions.set(data);
			})
		} else {
			t.suggestions.set(null);
		}
	},
});
