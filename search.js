alphabetFilter.checked = true;

okGoogle.addEventListener("input", (event) => {
  const searchedGame = catalog.filter((item) => {
    if (item.name.toLowerCase().includes(event.target.value.toLowerCase()))
      return true;
    return false;
  });

  const filteredGame = checkboxFilteredItems(
    searchedGame,
    objOfFilteredProperties
  );
  const sortedGame = sortedItems(filteredGame, valueOfRadioCollection);
  renderList(sortedGame);
});

function searchInput(arr) {
  const filteredItems = arr.filter((item) => {
    if (item.name.toLowerCase().includes(okGoogle.value.toLowerCase()))
      return true;
    return false;
  });
  if (!filteredItems.length) return arr;
  return filteredItems;
}

const checkboxFilterCollection = document.querySelectorAll(".style-checkbox");

let arrayOfFilteredItems = [];

let objOfFilteredProperties = {
  cheap: false,
  optimal: false,
  premium: false,
};

checkboxFilterCollection.forEach((item) => {
  item.addEventListener("change", (event) => {
    if (event.target.checked) {
      objOfFilteredProperties[event.target.value] = true;
      const searchGame = searchInput(catalog);
      const filteredGames = checkboxFilteredItems(
        searchGame,
        objOfFilteredProperties
      );
      const sortedGames = sortedItems(filteredGames, valueOfRadioCollection);
      renderList(sortedGames);
    } else {
      objOfFilteredProperties[event.target.value] = false;
      const searchGame = searchInput(catalog);
      const filteredGames = checkboxFilteredItems(
        searchGame,
        objOfFilteredProperties
      );
      const sortedGames = sortedItems(filteredGames, valueOfRadioCollection);
      renderList(sortedGames);
    }
  });
});

function checkboxFilteredItems(arr, value) {
  let ArrayWithFiltered = [];
  let checkedProp = false;
  for (let prop in value) {
    if (value[prop]) {
      checkedProp = true;
      let filteredArr = arr.filter((item) => {
        if (item.priceSegment === prop) {
          return true;
        }
        return false;
      });
      ArrayWithFiltered.push(...filteredArr);
    }
  }
  if (!ArrayWithFiltered.length && !checkedProp) return arr;
  return ArrayWithFiltered;
}

function initSortedArray(arr) {
  return [...arr].sort((a, b) => {
    return a.name > b.name ? 1 : -1;
  });
}

const radioFilterCollection = document.querySelectorAll(".filtered-radio");

let valueOfRadioCollection = "";

radioFilterCollection.forEach((item) => {
  item.addEventListener("change", (event) => {
    valueOfRadioCollection = event.target.value;
    if (event.target.checked) {
      const searchGame = searchInput(catalog);
      const filteredGames = checkboxFilteredItems(
        searchGame,
        objOfFilteredProperties
      );
      let sortedGames = [];
      if (valueOfRadioCollection === "date") {
        sortedGames = filteredGames.sort((a, b) => {
          return new Date(
            a[valueOfRadioCollection].split(".").reverse().join("-")
          ).getTime() >
            new Date(
              b[valueOfRadioCollection].split(".").reverse().join("-")
            ).getTime()
            ? 1
            : -1;
        });
      } else {
        sortedGames = filteredGames.sort((a, b) => {
          return a[valueOfRadioCollection] > b[valueOfRadioCollection] ? 1 : -1;
        });
      }
      renderList(sortedGames);
    } else {
      renderList();
    }
  });
});

function sortedItems(arr, value) {
  let sortedArr = [];
  if (value) {
    let sortedGames = [];
    if (value === "date") {
      sortedGames = arr.sort((a, b) => {
        return new Date(a[value].split(".").reverse().join("-")).getTime() >
          new Date(b[value].split(".").reverse().join("-")).getTime()
          ? 1
          : -1;
      });
    } else {
      sortedGames = arr.sort((a, b) => {
        return a[value] > b[value] ? 1 : -1;
      });
    }
    sortedArr = sortedGames;
  } else {
    sortedArr = initSortedArray(arr);
  }
  if (!sortedArr.length) {
    return initSortedArray(arr);
  }
  return sortedArr;
}
