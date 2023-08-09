const categoryItems = document.querySelectorAll("#categories li.item");

console.log("Number of categories:", categoryItems.length);

categoryItems.forEach((categoryItem) => {
  const categoryName = categoryItem.querySelector("h2").textContent;

  const subCategories = categoryItem.querySelectorAll("ul li");

  console.log(`\nCategory: ${categoryName}`);
  console.log(`Elements: ${subCategories.length}`);
});
