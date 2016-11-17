sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/Device"
], function(Controller, Device) {
	"use strict";

	return Controller.extend("sap.training.controller.Calculated_Fields", {

		onInit: function() {
			// apply compact density if touch is not supported, the standard cozy design otherwise
			this.getView().addStyleClass(Device.support.touch ? "sapUiSizeCozy" : "sapUiSizeCompact");
		},


		greeting: function(sGender, sFirstName, sLastName) {
			var sSalutation = (sGender === "female") ? "Mrs." : "Mr.";
			return "Hello " + sSalutation + " " + sFirstName + " " + sLastName;
		},


		age: function(sBirthday) {
			var today = new Date();
			var birthDate = new Date(sBirthday);
			var age = today.getFullYear() - birthDate.getFullYear();
			var m = today.getMonth() - birthDate.getMonth();
			if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
				age--;
			}
			return age;
		}

	});

});