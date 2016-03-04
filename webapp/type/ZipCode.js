sap.ui.define([
	"sap/ui/model/SimpleType"
], function(SimpleType) {
	"use strict";

	return SimpleType.extend("sap.training.type.ZipCode", {

		/* formatValue() is called when the value in the model is changed to convert it to the type of the
	    control property it is bound to. It may throw a sap.ui.model.FormatException.*/
		formatValue: function(oValue) {
			return oValue;
		},

		/* parseValue() is called, when the user modified a value in the UI and the change is transported back
	    into the model. It may throw a sap.ui.model.ParseException in case the value cannot be converted.*/
		parseValue: function(oValue) {
			return oValue;
		},

		/* In case of successful parsing, validateValue() is called to check additional constraints, like minimum
	    or maximum value. It throws a sap.ui.model.ValidateException in case constraints are violated.*/
		validateValue: function(oValue) {
			if (!/^(\d{5})?$/.test(oValue)) {
				throw new sap.ui.model.ValidateException("Zip code must have 5 digits!");
			}
		}
	});

});