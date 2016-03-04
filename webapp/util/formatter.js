sap.ui.define([], function() {
	"use strict";

	return {

		salutation: function(sGender) {
			return sGender === "female" ? "Mrs." : "Mr.";
		},

		genderIcon: function(sGender) {
			return sGender === "female" ? "img/Female-icon.png" : "img/Male-icon.png";
		}

	};
	
});