import React,{useState} from "react";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({items}) {
  const [selectedCategory,setSelectedCategory]=useState("All");

  function onCategoryChange(event) {
    let category=event.target.value
    setSelectedCategory(category);
  }

  const itemsToDisplay=items.filter((item) => {
    if(selectedCategory==="All") return true;

    return item.category===selectedCategory;
  });

  return (
    <div className="ShoppingList">
      <Filter onCategoryChange={onCategoryChange} selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
