import React, { useState } from "react";
import Menu from "./Menu";
import items from "./data";
import NewCategories from "./NewCategories";
import "./index.css";
const allCategories = ["all", ...new Set(items.map((item) => itemcategory))];
console.log(allCategories);

function App() {
  const [menuItems, setMenueItems] = useState(items);
  const [categories, setCategories] = useState([allCategories]);

  const filterItems = (category) => {
    if (category == "all") {
      setCategories(items);
    }
    const newItems = items.filter((item) => {
      item.category === category;
      setCategories(newItems);
    });
  };
  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>Our Menu</h2>
          <div className="underline"></div>
        </div>
        <NewCategories categories={categories} filterItems={filterItems} />
        <Menu menuItem={items} />
      </section>
    </main>
  );
}

export default App;
