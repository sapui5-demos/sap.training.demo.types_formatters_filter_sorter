sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function(Controller) {
	"use strict";

	return Controller.extend("sap.training.controller.Sorter_and_Filters", {

		onChange: function(oEvent) {
			var sSalaryLevel = oEvent.oSource.getSelectedKey();
			var oFilter = new sap.ui.model.Filter(
				"salaryLevel",
				sap.ui.model.FilterOperator.EQ,
				sSalaryLevel);

			var oTable = this.getView().byId("myTable");
			oTable.getBinding("rows").filter([oFilter]);
		},

		onRemoveFilter: function(oEvent) {
			var oTable = this.getView().byId("myTable");
			oTable.getBinding("rows").filter(null);

			var oComboBox = this.getView().byId("myComboBox");
			oComboBox.setValue("");
		},

		onSort: function(oEvent) {
			var oTable = this.getView().byId("myTable");

			var oSorter = new sap.ui.model.Sorter("salary", false);
			oTable.getBinding("rows").sort([oSorter]);
		},

		onRemoveSort: function(oEvent) {
			var oTable = this.getView().byId("myTable");
			oTable.getBinding("rows").sort(null);
		}

	});

});