sap.ui.define(
    [
        "sap/ui/core/mvc/Controller"
    ],
    function(BaseController) {
      "use strict";
  
      return BaseController.extend("com.app.project1.controller.Nextpage", {
        onInit: function() {
          debugger
          const oRouter = this.getOwnerComponent().getRouter();
          oRouter.attachRoutePatternMatched(this.onBook, this);
        },
        onBook: function(oEvent ){
          
          const {bookId} = oEvent.getParameter("arguments");
          //const sRouterName = oEvent.getParameter("name");
          const oForm = this.getView().byId("idBookForm");

          oForm.bindElement(`/Books(${bookId})`, {
              // expand: 'salary,address'
          });
        
      }

      });
    }
  );
  

 