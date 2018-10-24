sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/Device"
], function(Controller, Device) {
	"use strict";

	return Controller.extend("sap.training.controller.Sorter_and_Filters", {

		onSelectionChange: function(oEvent) {
			var sSalaryLevel = oEvent.getSource().getSelectedKey();
			var oFilter = new sap.ui.model.Filter(
				"salaryLevel",
				sap.ui.model.FilterOperator.EQ,
				sSalaryLevel);

			var oTable = this.getView().byId("idTable");
			oTable.getBinding("rows").filter([oFilter]);
		},

		onRemoveFilter: function(oEvent) {
			var oTable = this.getView().byId("idTable");
			oTable.getBinding("rows").filter(null);

			var oComboBox = this.getView().byId("idComboBox");
			oComboBox.setValue("");
		},

		onSort: function(oEvent) {
			var oTable = this.getView().byId("idTable");

			var oSorter = new sap.ui.model.Sorter("salary", false);
			oTable.getBinding("rows").sort([oSorter]);
		},

		onRemoveSort: function(oEvent) {
			var oTable = this.getView().byId("idTable");
			oTable.getBinding("rows").sort(null);
		}

	});

});