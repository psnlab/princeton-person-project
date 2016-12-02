app.config([
  "$translateProvider",
  function($translateProvider) {
    var translations = {
      "mwForm":{
	"form":{
	  "name": "Form name",
	  "name.placeholder": "Form title",
	  "description": "Description"
	},
	"buttons":{
	  "addPage":"Add page",
	  "moveDown": "Move down",
	  "moveUp": "Move up",
	  "removePage": "Remove page",
	  "remove": "Remove",
	  "addElement": "Add element",
	  "questionReady": "Ready",
	  "next": "Next",
	  "back": "Back",
	  "submit": "Submit",
	  "begin": "Begin",
	  "fold": "Fold",
	  "unfold": "Unfold",
	  "edit": "Edit",
	  "clone": "Clone",
	  "view": "View"
	},
	"page":{
	  "tab":{
	    "heading":"Page {{page}} of {{allPages}}"
	  },
	  "elements":{
	    "empty": "Empty page"
	  },
	  "pageWithNameCheckbox": "named",
	  "name": "Page name"
	},
	"pageFlow":{
	  "afterPage":"After page {{page}}:",
	  "afterQuestionAnswer": "Go to page based on answer",
	  "goToPage": "Go to page {{page.number}}",
	  "goToNextPage": "Continue to next page",
	  "submitForm": "Submit form"
	},
	"elements":{
	  "question":"Question",
	  "image":"Image",
	  "paragraph": "Paragraph"
	},
	"question":{
	  "types":{
	    "text":{
	      "name": "Short text"
	    },
	    "textarea":{
	      "name": "Long text"
	    },
	    "radio":{
	      "name": "Radio"
	    },
	    "select":{
	      "name": "Select"
	    },
	    "checkbox":{
	      "name": "Checkboxes"
	    },
	    "grid":{
	      "name": "Grid"
	    },
	    "priority":{
	      "name": "Priority"
	    },
	    "division":{
	      "name": "Division"
	    },
	    "number":{
	      "name": "Number"
	    },
	    "date":{
	      "name": "Date"
	    },
	    "datetime":{
	      "name": "Datetime"
	    },
	    "time":{
	      "name": "Time"
	    },
	    "email":{
	      "name": "Email"
	    },
	    "range":{
	      "name": "Range"
	    },
	    "url":{
	      "name": "URL"
	    }
	  },
	  "text": "Question text",
	  "type": "Question type",
	  "required": "Required",
	  "preview":{
	    "text":"Short answer text",
	    "textarea":"Long answer text",
	    "otherAnswer": "Other"
	  },
	  "division":{
	    "quantity": "Quantity",
	    "unit": "Unit label",
	    "assignedSumLabel": "Assigned",
	    "fromRequiredLabel":"from required"
	  },
	  "priority":{
	    "sorted": "Sorted",
	    "available": "Available",
	    "clickToAddItem": "Click to add item"
	  },
	  "grid":{
	    "rowLabel": "Row {{row}}",
	    "clickToAddRow": "Click to add row",
	    "columnLabel": "Column {{col}}",
	    "clickToAddColumn": "Click to add column"
	  },
	  "range":{
	    "from": "Range from",
	    "to": "to"
	  },
	  "number": {
	    "min": "Min",
	    "max": "Max"
	  },
	  "orLabel": "or ",
	  "otherLabel": "Other: ",
	  "userAnswer": "User answer",
	  "buttons":{
	    "addOption":"Click to add option",
	    "addOther":"Add 'Other'",
	    "saveSurvey":"Save Survey"
	  }
	},
	"image":{
	  "selectImageButton": "Select image",
	  "caption": "Image caption"
	},
	"paragraph":{
	  "placeholder": "Enter paragraph text"
	},
	"confirmationPage":{
	  "title": "Confirmation page",
	  "customMessage": "Custom confirmation message",
	  "defaultMessage": "Your response has been recorded",
	  "errorMessage": "Error! Your response has not been recorded",
	  "pendingMessage": "Your response is being saved."
	}
      }

    };
    $translateProvider.translations('en', translations).preferredLanguage('en');
  }
]);
