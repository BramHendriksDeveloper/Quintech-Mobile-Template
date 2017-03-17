jQuery.sap.declare("com.quintech.mobile.template.util.Controller");
/**
 * @author: Max Nijholt
 */
sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/core/routing/History"
], function(Controller, History) {
	"use strict";
	return Controller.extend("com.quintech.mobile.template.util.Controller", {
		getRouter: function() {
			return sap.ui.core.UIComponent.getRouterFor(this);
		},	
		/**
		 * get the event bus of the applciation component
		 * @returns {Object} the event bus
		 */
		getEventBus: function() {
			return sap.ui.getCore().getEventBus();
		},
		onNavBack: function(oEvent) {
			var oHistory, sPreviousHash;
			oHistory = History.getInstance();
			sPreviousHash = oHistory.getPreviousHash();
			if (sPreviousHash !== undefined) {
				window.history.go(-1);
			} else {
				this.getRouter().navTo("Home", {}, true /*no history*/ );
			}
		},
		myNavBack: function(sRoute, mData) {
			var oHistory = History.getInstance();
			var sPreviousHash = oHistory.getPreviousHash();

			// The history contains a previous entry
			if (sPreviousHash !== undefined) {
				window.history.go(-1);
			} else {
				var bReplace = true; // otherwise we go backwards with a forward history
				this.navTo(sRoute, mData, bReplace);
			}
		}
	});
});