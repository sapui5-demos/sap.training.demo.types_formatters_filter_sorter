sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/training/util/formatter"
], function(Controller, formatter) {
	"use strict";

	return Controller.extend("sap.training.controller.Formatters", {

		formatter: formatter,

		salutation: function(sGender) {
			return sGender === "female" ? "Mrs." : "Mr.";
		},

		genderIcon: function(sGender) {
			return sGender === "female" ? "img/Female-icon.png" : "img/Male-icon.png";
		}

	});

});