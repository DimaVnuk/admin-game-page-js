const containerForSave = document.createElement("div");
document.body.append(containerForSave);
containerForSave.id = "forSave";
containerForSave.classList.add("cont-for-save-style");

const renderList = (model = initSortedArray(catalog)) => {
  forSave.innerHTML = "";
  model.forEach((item) => {
    const contElem = document.createElement("div");

    contElem.classList.add("cont-game-style");

    if (item.priceSegment === "cheap") {
      contElem.classList.add("container-card_cheap");
    }
    if (item.priceSegment === "optimal") {
      contElem.classList.add("container-card_optimal");
    }
    if (item.priceSegment === "premium") {
      contElem.classList.add("container-card_premium");
    }

    const divName = document.createElement("div");

    divName.innerHTML = `name: ${item.name}`;

    const divArticle = document.createElement("div");

    divArticle.innerHTML = `article: ${item.article}`;

    const divCount = document.createElement("div");

    divCount.innerHTML = `count: ${item.count}`;

    const divPrice = document.createElement("div");

    divPrice.innerHTML = `price: ${item.price}$`;

    const divDate = document.createElement("div");

    divDate.innerHTML = `date: ${item.date}`;

    const divImg = document.createElement("div");
    divImg.innerHTML = `<img class = "img-size" src = ${item.img} onerror="this.src='https://image.shutterstock.com/image-vector/no-user-profile-picture-hand-260nw-99335579.jpg'">`;

    const divDesc = document.createElement("div");
    divDesc.innerHTML = `description:`;

    const divDescHidden = document.createElement("div");
    divDescHidden.innerHTML = `${item.desc}`;

    const divLastOne = document.createElement("div");
    divLastOne.innerHTML = "Last one";
    /* divLastOne.classList.add('last-one') */

    forSave.append(contElem);
    contElem.append(divName);
    contElem.append(divArticle);
    contElem.append(divCount);
    contElem.append(divPrice);
    contElem.append(divDate);
    contElem.append(divDesc);
    contElem.append(divDescHidden);
    contElem.append(divImg);
    contElem.prepend(divLastOne);
    divDescHidden.hidden = true;
    divDesc.addEventListener("click", () => {
      divDescHidden.hidden = false;
    });

    divDescHidden.addEventListener("click", () => {
      divDescHidden.hidden = true;
    });

    if (item.count === 1) {
      divLastOne.hidden = false;
      divLastOne.classList.add("last-one");
    } else {
      divLastOne.hidden = true;
    }

    const btSave = document.createElement("button");
    btSave.innerHTML = "Save";
    btSave.itemID = item.itemID;

    const btDelete = document.createElement("button");
    btDelete.innerHTML = "Delete";
    btDelete.itemID = item.itemID;

    btSave.addEventListener("click", (event) => {
      renderList();
    });

    btDelete.addEventListener("click", (event) => {
      elementForDelete = btDelete.itemID;

      event.preventDefault();
      const filteredModel = catalog.filter((item) => {
        return item.itemID != elementForDelete ? true : false;
      });

      catalog = filteredModel;
      elementForDelete = null;
      renderList();
    });

    const editButton = document.createElement("button");
    editButton.itemID = item.itemID;
    editButton.innerText = "Edit";

    contElem.append(editButton);

    editButton.addEventListener("click", (event) => {
      editButton.hidden = true;

      const editForm = document.createElement("form");

      const editDivName = document.createElement("div");
      const editInputName = document.createElement("input");
      const editLabelName = document.createElement("label");

      editLabelName.innerHTML = "Name";
      editInputName.type = "text";
      editInputName.id = "errName";
      editInputName.className = "edit-input";

      const editInputArticle = document.createElement("input");
      const editDivArticle = document.createElement("div");
      const editLabelArticle = document.createElement("label");

      editLabelArticle.innerHTML = "Article";
      editInputArticle.type = "text";
      editInputArticle.id = "errArticle";
      editInputArticle.className = "edit-input";

      const editInputCount = document.createElement("input");
      const editDivCount = document.createElement("div");
      const editLabelCount = document.createElement("label");

      editLabelCount.innerHTML = "Count";
      editInputCount.type = "number";
      editInputCount.id = "errCount";
      editInputCount.className = "edit-input";

      const editInputPrice = document.createElement("input");
      const editDivPrice = document.createElement("div");
      const editLabelPrice = document.createElement("label");

      editLabelPrice.innerHTML = "Price";
      editInputPrice.type = "number";
      editInputPrice.id = "errPrice";
      editInputPrice.className = "edit-input";

      const editInputDate = document.createElement("input");
      const editDivDate = document.createElement("div");
      const editLabelDate = document.createElement("label");

      editLabelDate.innerHTML = "Date";
      editInputDate.type = "text";
      editInputDate.id = "errDate";
      editInputDate.className = "edit-input";

      const editInputImg = document.createElement("input");
      const editDivImg = document.createElement("div");
      const editLabelImg = document.createElement("label");

      editLabelImg.innerHTML = "Image";
      editInputImg.type = "text";
      editInputImg.id = "errName";
      editInputImg.className = "edit-input";

      const editInputDesc = document.createElement("input");

      const editLabelDesc = document.createElement("label");

      editLabelDesc.innerHTML = "Description";
      editInputDesc.type = "text";
      editInputDesc.id = "errName";
      editInputDesc.className = "edit-input";

      const elemName = catalog.find(
        (item) => item.itemID === editButton.itemID
      );
      editInputName.value = "";
      divName.innerHTML = "";

      const divEditErrName = document.createElement("div");
      divEditErrName.style.color = "red";
      divEditErrName.hidden = true;
      const divEditErrArticle = document.createElement("div");
      divEditErrArticle.style.color = "red";
      divEditErrArticle.hidden = true;
      const divEditErrCount = document.createElement("div");
      divEditErrCount.style.color = "red";
      divEditErrCount.hidden = true;
      const divEditErrPrice = document.createElement("div");
      divEditErrPrice.style.color = "red";
      divEditErrPrice.hidden = true;

      divEditErrName.innerHTML = "Enter more than 5 word";
      divEditErrArticle.innerHTML = "Enter your symbol in format 'B12'";
      divEditErrCount.innerHTML = "Enter only positive integers number";
      divEditErrPrice.innerHTML = "Enter only positive integers number";

      contElem.append(editForm);
      editForm.append(editDivName);
      editDivName.append(editLabelName);
      editLabelName.append(editInputName);
      editDivName.append(divEditErrName);

      const elemArticle = catalog.find(
        (item) => item.itemID === editButton.itemID
      );
      editInputArticle.value = "";
      divArticle.innerHTML = "";
      contElem.append(editForm);
      editForm.append(editDivArticle);
      editDivArticle.append(editLabelArticle);
      editLabelArticle.append(editInputArticle);
      editDivArticle.append(divEditErrArticle);

      const elemCount = catalog.find(
        (item) => item.itemID === editButton.itemID
      );
      editInputCount.value = "";
      divCount.innerHTML = "";
      contElem.append(editForm);
      editForm.append(editDivCount);
      editDivCount.append(editLabelCount);
      editLabelCount.append(editInputCount);
      editDivCount.append(divEditErrCount);

      const elemPrice = catalog.find(
        (item) => item.itemID === editButton.itemID
      );
      editInputPrice.value = "";
      divPrice.innerHTML = "";
      contElem.append(editForm);
      editForm.append(editDivPrice);
      editDivPrice.append(editLabelPrice);
      editLabelPrice.append(editInputPrice);
      editDivPrice.append(divEditErrPrice);

      const elemDate = catalog.find(
        (item) => item.itemID === editButton.itemID
      );
      editInputDate.value = "";
      divDate.innerHTML = "";

      const elemImg = catalog.find((item) => item.itemID === editButton.itemID);
      editInputImg.value = "";
      divImg.innerHTML = "";
      contElem.append(editForm);
      editForm.append(editDivImg);
      editDivImg.append(editLabelImg);
      editLabelImg.append(editInputImg);

      const elemDesc = catalog.find(
        (item) => item.itemID === editButton.itemID
      );
      editInputDesc.value = "";
      divDesc.innerHTML = "";

      contElem.append(btSave);
      contElem.append(btDelete);
      editInputName.addEventListener("change", (event) => {
        const nameNew = event.target.value;

        divName.hidden = true;
        divName.innerHTML = `Name: ${elemName.name}`;
        if (nameNew.length < 5) {
          divEditErrName.hidden = false;
        } else {
          divEditErrName.hidden = true;
          elemName.name = nameNew;
        }
      });

      editInputArticle.addEventListener("change", (event) => {
        const articleNew = event.target.value;
        divArticle.hidden = true;
        divArticle.innerHTML = `Article: ${elemName.article}`;
        if (
          articleNew[0] >= "A" &&
          articleNew[0] <= "Z" &&
          +articleNew[1] &&
          +articleNew[2]
        ) {
          divEditErrArticle.hidden = true;
          elemArticle.article = articleNew;
        } else divEditErrArticle.hidden = false;
      });

      editInputCount.addEventListener("change", (event) => {
        const countNew = +event.target.value;
        const countNewStr = event.target.value;

        divCount.hidden = true;

        divCount.innerHTML = `Count: ${elemCount.count}`;
        if (countNew === 1) {
          divLastOne.hidden = false;
          divLastOne.classList.add("last-one");
        } else {
          divLastOne.hidden = true;
        }
        if (
          countNew &&
          countNew > 0 &&
          !countNewStr.includes(".") &&
          !countNewStr.includes(",")
        ) {
          divEditErrCount.hidden = true;
          elemCount.count = countNew;
        } else {
          divEditErrCount.hidden = false;
        }
      });

      editInputPrice.addEventListener("change", (event) => {
        const priceNew = +event.target.value;
        const priceNewStr = event.target.value;

        divPrice.hidden = true;
        divPrice.innerHTML = `Price: ${elemPrice.price}`;
        if (
          priceNew >= 0 &&
          !priceNewStr.includes(".") &&
          !priceNewStr.includes(",")
        ) {
          divEditErrPrice.hidden = true;
          elemPrice.price = priceNew;
        } else {
          divEditErrPrice.hidden = false;
        }
      });

      editInputDate.addEventListener("change", (event) => {
        const dateNew = event.target.value.split(" ");
        elemDate.date = dateNew;

        divDate.hidden = true;
        divDate.innerHTML = `Date: ${elemDate.date}`;
      });

      editInputDesc.addEventListener("change", (event) => {
        const descNew = event.target.value.split(" ");
        elemDesc.desc = descNew;

        divDesc.hidden = true;
        divDesc.innerHTML = `Desc: ${elemDesc.desc}`;
      });

      editInputImg.addEventListener("change", (event) => {
        const imgNew = event.target.value.split(" ");
        elemImg.img = imgNew;

        divImg.hidden = true;
        divImg.innerHTML = `<img class = "img-size" src = ${elemImg.img}>`;
      });
    });
  });
};
