sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/Device",
	"sap/training/util/formatter"
], function(Controller, Device, formatter) {
	"use strict";

	return Controller.extend("sap.training.controller.Formatters", {

		formatter: formatter,

		onInit: function() {
			// apply compact density if touch is not supported, the standard cozy design otherwise
			this.getView().addStyleClass(Device.support.touch ? "sapUiSizeCozy" : "sapUiSizeCompact");
		},

		salutation: function(sGender) {
			return sGender === "female" ? "Mrs." : "Mr.";
		},

		genderIcon: function(sGender) {
			return sGender === "female" ? "img/Female-icon.png" : "img/Male-icon.png";
		}

	});

});