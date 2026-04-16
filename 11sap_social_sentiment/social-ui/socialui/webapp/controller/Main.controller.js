sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast"
], (Controller, MessageToast) => {
    "use strict";

    return Controller.extend("socialui.controller.Main", {
        callS4(){
                jQuery.ajax({
                url: "S4HANABP/$metadata",
                method: "GET",
                contentType: "application/json",
                success: function (oData) {
                    debugger;
                    MessageToast.show("Post submitted successfully!");
                    console.log("Success Response:", oData);
                },
                error: function (oError) {
                    debugger;
                    MessageToast.show("Error while submitting post!");
                    console.error("Error Response:", oError);
                }
            });
        },
        onInit() {
            this.getView().byId("input0").setValue("Anubhav")
            this.getView().byId("input1").setValue("Attention Gurgaon residents!")
            this.getView().byId("input0_1756545346415").setValue("Can we talk about the pathetic state of our roads and water flooding for a moment? 🗑️🤢 " +
                        "It seems like the local authorities have forgotten about our beloved public area on Sector 65 Road. " +
                        "Seriously, has anyone seen the piles of rubbish and litter scattered everywhere which causes massive water flooding when rain comes? " +
                        "🚯 It's like a swimming pool next to our doorstep! I mean, who needs to fix broken roads, blocked man holes, do you agree?" +
                        " Sector 65 Road, Gurgaon" +
                        " It's mildly infuriating how we pay our taxes and yet we have to put up with this filth! 🤬 I'm not asking for Presidential Palace-like cleanliness, but a basic level of hygiene wouldn't hurt. " +
                        "Hopefully, the authorities will wake up from their slumber and do something about it ASAP. Let's keep our fingers crossed! 🤞")
            this.getView().byId("input2").setValue("26.9124° N, 75.7873° E")
        },
        onSubmit(){
            var oPayload = {
                "id": "rdt-"  + Math.floor(1000000 + Math.random() * 9000000),
                "author": this.getView().byId("input0").getValue(),
                "title": this.getView().byId("input1").getValue(),
                "longText": `${this.getView().byId("input0_1756545346415").getValue()}
                ${  this.getView().byId("input2").getValue()}`,
                "postingDate": new Date().toISOString()
            };

            console.log(oPayload);

            jQuery.ajax({
                url: "/anubhavllmsrv/genaihub-api/processPost/",
                method: "POST",
                contentType: "application/json",
                data: JSON.stringify(oPayload),
                success: function (oData) {
                    debugger;
                    MessageToast.show("Post submitted successfully!");
                    console.log("Success Response:", oData);
                },
                error: function (oError) {
                    //version 1
                    debugger;
                    MessageToast.show("Error while submitting post!");
                    console.error("Error Response:", oError);
                }
            });
        }
    });
});

