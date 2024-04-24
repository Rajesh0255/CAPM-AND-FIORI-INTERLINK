sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/Filter",
    "sap/ui/model/FilterOperator",
    'sap/m/Token'
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, Filter, FilterOperator, Token) {
        "use strict";

        return Controller.extend("com.app.bookdetailsapp.controller.Home", {
            onInit: function () {
                var oView = this.getView();
                const oMultiInput1 = oView.byId("idAuthorFilterValue");
                const oMultiInput2 = oView.byId("idTitleFilterValue");
                const oMultiInput3 = oView.byId("idStockFilterValue");
                const oMultiInput4 = oView.byId("idPhoneFilterValue");
                oMultiInput1.addValidator(function (args) {
                    if (true) {
                        var text = args.text;
                        return new Token({ key: text, text: text });
                    }
                })
                oMultiInput2.addValidator(function (args) {
                    if (true) {
                        var text = args.text;
                        return new Token({ key: text, text: text });
                    }
                })
                oMultiInput3.addValidator(function (args) {
                    if (true) {
                        var text = args.text;
                        return new Token({ key: text, text: text });
                    }
                })
                oMultiInput4.addValidator(function (args) {
                    if (true) {
                        var text = args.text;
                        return new Token({ key: text, text: text });
                    }
                })
            },
            onGoPress: function () {
                debugger
                const oView = this.getView(),
                    oAuthor = oView.byId("idAuthorFilterValue"),
                    sAuthor = oAuthor.getTokens(),
                    oTitle = oView.byId("idTitleFilterValue"),
                    sTitle = oTitle.getTokens(),
                    oStock = oView.byId("idStockFilterValue"),
                    sStock = oStock.getTokens(),
                    oPhone = oView.byId("idPhoneFilterValue"),
                    sPhone = oPhone.getTokens(),

                    oTable = oView.byId("idBooksTable"),
                    aFilter = [];

                sAuthor.filter((element) => {

                    element ? aFilter.push(new Filter("author", FilterOperator.EQ, element.getKey())) : "";
                })
                sTitle.filter((element) => {

                    element ? aFilter.push(new Filter("author", FilterOperator.EQ, element.getKey())) : "";
                })
                sStock.filter((element) => {

                    element ? aFilter.push(new Filter("author", FilterOperator.EQ, element.getKey())) : "";
                })
                sPhone.filter((element) => {

                    element ? aFilter.push(new Filter("author", FilterOperator.EQ, element.getKey())) : "";
                })

                oTable.getBinding("items").filter(aFilter)

            },
            onClearFilterPress: function () {
                const oView = this.getView(),
                    oAuthor = oView.byId("idAuthorFilterValue").setValue(),
                    oTitle = oView.byId("idTitleFilterValue").setValue(),
                    oStock = oView.byId("idStockFilterValue").setValue(),
                    oPhone = oView.byId("idPhoneFilterValue").setValue();
            }
        });
    });

