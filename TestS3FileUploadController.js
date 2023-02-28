({
    handleUploadDocuments : function(component, event, helper) {
        var s3Uploader = component.find("s3FileUploader");
        var recordId = component.get("v.recordId");
        component.set("v.showUploader", true);
    },
    handleShowUploader : function(component, event, helper) {
        var modalBody;
        $A.createComponent("c:S3FileUploaderMultiple", {}, function(content, status) {
            if (status === "SUCCESS") {
                modalBody = content;
                component.find('overlayLib').showCustomModal({
                    header: "Upload Documents",
                    body: modalBody,
                    showCloseButton: true,
                    cssClass: "slds-modal_medium"
                });
            }
        });
    }
})

({
    doInit: function(component, event, helper) {
        var recordId = component.get("v.recordId");
        var customCmp = component.find("customCmp");
        customCmp.set("v.recordId", recordId);
    }
})
