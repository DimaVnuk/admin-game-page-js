function createInput(
  inputType,
  name,
  labelName,
  id,
  field,
  styleInp,
  value,
  placeholder,
  pattern,
  idDiv,
  title,
  required,
  idDivErr
) {
  const divElem = document.createElement("div");
  divElem.id = idDiv;

  const divErr = document.createElement("div");
  divErr.id = idDivErr;

  const inputElem = document.createElement("input");
  inputElem.type = inputType;
  inputElem.name = name;
  inputElem.id = id;
  inputElem.className = styleInp;
  inputElem.value = value;
  inputElem.placeholder = placeholder;
  inputElem.pattern = '^[a-zA-Z0-9,]*$';
  inputElem.title = title;
  inputElem.required = required;

  const labelElem = document.createElement("label");
  labelElem.innerText = labelName;

  field.append(divElem);
  divElem.append(labelElem);
  labelElem.prepend(inputElem);
  divElem.prepend(divErr);
}

function createFieldset(legendText, form,style) {
  const fieldset = document.createElement("fieldset");
  form.append(fieldset);
  fieldset.classList.add(style)
  const legend = document.createElement("legend");
  fieldset.append(legend);
  legend.innerText = legendText;
  return fieldset;
}

function createTextArea(labelText, field) {
  const textArea = document.createElement("textarea");
  field.append(textArea);
  textArea.id = "textArea";

  const labelTextArea = document.createElement("label");
  labelTextArea.innerText = labelText;
}

function createForm(styleForm, idForm) {
  const divElem = document.createElement("div");
  const form = document.createElement("form");
  form.className = styleForm;
  form.id = idForm;

  mainContainerWrap.append(divElem);
  divElem.append(form);

  return form;
}
function createButton(buttonText, id, field) {
  let buttonCreate = document.createElement("button");
  buttonCreate.id = id;

  field.append(buttonCreate);
  buttonCreate.innerText = buttonText;
}

const mainForm = createForm("style-form",'formCreate');
//inputType, name, labelName, id, field, styleInp, value, placeholder, pattern,idDiv
const mainInformation = createFieldset("Main information", mainForm);
createInput(
  "text",
  "name",
  "Name",
  "nameGame",
  mainInformation,
  "input-main-form-validation",
  "",
  "",
  "",
  "divName",
  "",
  "required",
  "nameValid"
);
createInput(
  "text",
  "article",
  "Article",
  "articleGame",
  mainInformation,
  "input-main-form-validation",
  "",
  "",
  "",
  "divArticle",
  "",
  "required",
  "articleValid"
);
createInput(
  "number",
  "count",
  "Count",
  "countGame",
  mainInformation,
  "input-main-form-validation",
  "",
  "",
  "",
  "divCount",
  "",
  "required",
  "countValid"
);
createInput(
  "number",
  "price-name",
  "Price",
  "priceGame",
  mainInformation,
  "input-main-form-validation",
  "",
  "",
  "",
  "divPrice",
  "",
  "required",
  "priceValid"
);
createInput(
  "date",
  "creation-date",
  "Creation date",
  "creationDate",
  mainInformation,
  "input-main-form",
  "",
  "",
  "",
  "divDate",
  "",
  "required",
  "dateValid"
);


const priceSegment = createFieldset("Price segment", mainForm);
createInput(
  "radio",
  "price",
  "Cheap",
  "cheap",
  priceSegment,
  "radio-style",
  "cheap",
  "",
  "",
  ""
);
createInput(
  "radio",
  "price",
  "Optimal",
  "optimal",
  priceSegment,
  "radio-style",
  "optimal",
  "",
  "",
  ""
);
createInput(
  "radio",
  "price",
  "Premium",
  "premium",
  priceSegment,
  "radio-style",
  "premium",
  "",
  "",
  ""
);

const secondaryInformation = createFieldset("Secondary information", mainForm);
createInput(
  "url",
  "picture",
  "Picture",
  "pictureGame",
  secondaryInformation,
  "input-main-form",
  "",
  "",
  "",
  ""
);
createTextArea("Description", secondaryInformation);
createInput(
  "submit",
  "submit",
  "",
  "buttonCreate",
  secondaryInformation,
  "button-style",
  "Submit",
  "",
  "",
  "divButton"
);
const searchForm = createForm("form-style-search-filtered", "searchForm");
const search = createFieldset("Search", searchForm);
createInput(
  "text",
  "ok-google",
  "OK, Google",
  "okGoogle",
  search,
  "",
  "",
  ""
);

const filterByPriceSegmentFirst = createFieldset(
  "Filter by price segment",
  searchForm
);
createInput(
  "checkbox",
  "checkCheap",
  "Cheap",
  "cheapCheck",
  filterByPriceSegmentFirst,
  "style-checkbox",
  "cheap"
);
createInput(
  "checkbox",
  "checkOptimal",
  "Optimal",
  "optimalCheck",
  filterByPriceSegmentFirst,
  "style-checkbox",
  "optimal"
);
createInput(
  "checkbox",
  "checkPremium",
  "Premium",
  "premiumCheck",
  filterByPriceSegmentFirst,
  "style-checkbox",
  "premium"
);

const filterByPriceSegmentSecond = createFieldset(
  "Filter by price segment",
  searchForm,
  "filter-fieldset"
);

createInput(
  "radio",
  "filter",
  "Alphabet",
  "alphabetFilter",
  filterByPriceSegmentSecond,
  "filtered-radio",
  "name"
);
createInput(
  "radio",
  "filter",
  "Price",
  "priceFilter",
  filterByPriceSegmentSecond,
  "filtered-radio",
  "price"
);
createInput(
  "radio",
  "filter",
  "Count",
  "countFilter",
  filterByPriceSegmentSecond,
  "filtered-radio",
  "count"
);
createInput(
  "radio",
  "filter",
  "Date",
  "dateFilter",
  filterByPriceSegmentSecond,
  "filtered-radio",
  "date"
);
