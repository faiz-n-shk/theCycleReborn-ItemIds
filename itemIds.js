let items = [];
// Fetch items dynamically from the JSON file
fetch("itemIds.json")
  .then((response) => response.json())
  .then((data) => {
    items = data;
    items.sort((a, b) => a.displayName.localeCompare(b.displayName));
    displayItems(items);
  })
  .catch((error) => console.error("Error loading items:", error));

const itemsContainer = document.getElementById("itemsContainer");

function displayItems(filteredItems) {
  itemsContainer.innerHTML = "";
  filteredItems.forEach((item) => {
    const tile = document.createElement("div");
    tile.className = "item-tile";
    if (item.bgImg) {
      tile.style.backgroundImage = `url(${item.bgImg})`;
      tile.style.backgroundColor = "transparent"; // Remove grey background
    } else {
      tile.style.backgroundImage = "none";
      tile.style.backgroundColor = "grey"; // Default grey background
    }
    tile.innerHTML = `
      <h3>${item.displayName}</h3>
      <button onclick='copyItem(${JSON.stringify(
        item
      )}, this)'>Copy JSON</button>
    `;
    itemsContainer.appendChild(tile);
  });
}
// Filter items based on the search query, by displayName and tags fields

function filterItems() {
  const query = document.getElementById("searchBar").value.toLowerCase();
  const filteredItems = searchItems(items, query);
  displayItems(filteredItems);
}

function searchItems(items, query) {
  const lowerCaseQuery = query.toLowerCase();
  return items.filter(
    (item) =>
      item.displayName.toLowerCase().includes(lowerCaseQuery) ||
      item.tags.some((tag) => tag.toLowerCase().includes(lowerCaseQuery)) ||
      item.baseItemId.toLowerCase().includes(lowerCaseQuery)
  );
}

// exclude displayName, bgImg, and tags fields from the copied object from the JSON file and copy the rest of the fields to the clipboard as JSON
function copyItem(item, button) {
  const { displayName, tags, bgImg, ...filteredItem } = item;
  navigator.clipboard
    .writeText(JSON.stringify(filteredItem))
    .then(() => {
      button.textContent = "Copied!";
      setTimeout(() => (button.textContent = "Copy JSON"), 2000);
    })
    .catch((err) => console.error("Failed to copy:", err));
}
