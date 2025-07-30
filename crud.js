import React, { useState } from "react";

function AddItemForm({ addItem }) {
  const [itemName, setItemName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (itemName.trim() === "") return;      
    addItem(itemName);
    setItemName('');                       
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Add new item"
        value={itemName}
        onChange={(e) => setItemName(e.target.value)}
      />
      <button type="submit">Add</button>
    </form>
  );
}

export default AddItemForm;
