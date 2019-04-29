let formElementTag, formType, appendElement, formId, formClass, formName, formLabel, formPlaceholder = "";

function formCreate(
    formElementTag,
    formType,
    appendElement,
    formId,
    formClass,
    formName,
    formLabel,
    formPlaceholder
) {
    // create Element
    formElement = document.createElement(formElementTag);

    // creation of Attributes
    formElementType = document.createAttribute("type");
    formElementId = document.createAttribute("id");
    formElementClass = document.createAttribute("class");
    formElementName = document.createAttribute("name");
    formElementPlaceholder = document.createAttribute("placeholder");

    // assigning values to the Attributes
    formElementType.value = formType;
    formElementId.value = formId;
    formElementClass.value = formClass;
    formElementName.value = formName;
    formElementPlaceholder.value = formPlaceholder;

    // assigning attributes to Element
    formElement.setAttributeNode(formElementType);
    formElement.setAttributeNode(formElementId);
    formElement.setAttributeNode(formElementClass);
    formElement.setAttributeNode(formElementName);
    formElement.setAttributeNode(formElementPlaceholder);

    // doing the same thing for Label
    if (formLabel === "") {
        // do nothing
    } else {
        // create element label
        formElementLabel = document.createElement("label");

        // add attributes to label
        formElementLabelFor = document.createAttribute("for");

        // assigning data to attribute & tag
        formElementLabelFor.innerHTML = formElementId;
        

        // setting attribute to Label
        formElementLabel.setAttributeNode(formElementLabelFor);
        formElementLabel.value = formLabel;
        document.getElementById(appendElement).appendChild(formElementLabel);
        
    }


    // append created Element to document
    document.getElementById(appendElement).appendChild(formElement);

}