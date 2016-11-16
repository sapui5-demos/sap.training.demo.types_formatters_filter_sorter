sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/Device",
	"sap/training/type/ZipCode"
], function(Controller, Device) {
	"use strict";

	return Controller.extend("sap.training.controller.Datatypes", {

		onInit: function() {

			// apply compact density if touch is not supported, the standard cozy design otherwise
			this.getView().addStyleClass(Device.support.touch ? "sapUiSizeCozy" : "sapUiSizeCompact");

			// var oCore = sap.ui.getCore();

			// oCore.attachParseError(this.onError);

			// oCore.attachValidationError(this.onError);

			// oCore.attachValidationSuccess(function(oEvent) {
			// 	 var oElement = oEvent.getParameter("element");
			// 	 oElement.setValueState(sap.ui.core.ValueState.None);
			// });
		},

		onError: function(oEvent) {
			var oElement = oEvent.getParameter("element");
			var oException = oEvent.getParameter("exception");

			oElement.setValueState(sap.ui.core.ValueState.Error);
			sap.m.MessageToast.show(
				oException.name + ": " + oException.message);
		},

		onInputError: function(oEvent) {
			oEvent.oSource.setValueState(sap.ui.core.ValueState.Error);

			var oException = oEvent.getParameter("exception");
			var oText = this.getView().byId("idMessageText");
			oText.setText(oException.message);

			oEvent.bCancelBubble = true;
		},

		onValidationSuccess: function(oEvent) {
			oEvent.oSource.setValueState(sap.ui.core.ValueState.None);

			var oText = this.getView().byId("idMessageText");
			oText.setText("");
		}

	});

});