import React, { useState } from "react";
import {
  MenuTable,
  MenuRow,
  MenuData,
  PriceButton,
  DeleteButton,
  AddButton,
} from "../styles/components/EateriesStyles";

import { AiOutlineDelete } from "react-icons/ai";

// make a useeffect function that makes a[] off all categories so that
// they can choose the category if they have entered the value
// if they havent it will get added to the category list

//sample data
import { data } from "./sampleMenu";

const Eateries = () => {
  const [menu, setMenu] = useState([]);

  const updateName = (e, id) => {
    let updated = { ...menu[id], name: e.target.value };
    menu[id] = updated;
    setMenu([...menu]);
  };

  const updateDescription = (e, id) => {
    let updated = { ...menu[id], description: e.target.value };
    menu[id] = updated;
    setMenu([...menu]);
  };

  const updateCategory = (e, id) => {
    let updated = { ...menu[id], category: e.target.value };
    menu[id] = updated;
    setMenu([...menu]);
  };

  const updateType = (e, id) => {
    let updated = { ...menu[id], type: e.target.value };
    menu[id] = updated;
    setMenu([...menu]);
  };

  const updatePriceArray = (e, id, i) => {
    // validation
    if (isNaN(e.target.value)) {
      alert("Enter a number");
      return;
    }
    const updated = [...menu];
    updated[id].price[i] = Number(e.target.value);
    setMenu([...updated]);
  };

  const addPrice = (e, id) => {
    const updated = [...menu];
    updated[id].price.push(0);
    setMenu([...updated]);
  };

  const removePrice = (e, id) => {
    const updated = [...menu];
    updated[id].price.pop();
    setMenu([...updated]);
  };

  const deleteItem = (e, id) => {
    const updated = menu.filter((item) => item.id !== id);
    setMenu([...updated]);
  };

  const addItem = (e, id) => {
    // const updated = menu.unshift({
    //   id: menu.length,
    //   name: "",
    //   type: "",
    //   description: "",
    //   price: [0],
    //   category: "",
    // });

    const updated = [
      ...menu,
      {
        id: menu.length,
        name: "",
        type: "",
        description: "",
        price: [0],
        category: "",
      },
    ];
    // console.log(updated);
    setMenu([...updated]);
  };

  return (
    <MenuTable>
      <tbody>
        <MenuRow className="tableHeader">
          <td>Item Name</td>
          <td description="true">Description</td>
          <td>Type</td>
          <td>Category</td>
          <td>Price</td>
          <td>Price Commands</td>
          <td>Commands</td>
        </MenuRow>

        {menu.map((item) => {
          return (
            <MenuRow key={item.id}>
              <MenuData>
                <input
                  id={item.id + "name"}
                  type="text"
                  value={item.name}
                  onChange={(e) => updateName(e, item.id)}
                ></input>
              </MenuData>
              <MenuData description="true">
                <textarea
                  name="desc"
                  id={item.id + "desc"}
                  cols="40"
                  rows="1"
                  value={item.description}
                  onChange={(e) => updateDescription(e, item.id)}
                  placeholder="no description "
                ></textarea>
              </MenuData>
              <MenuData>
                <input
                  className="typeField"
                  id={item.id + "type"}
                  type="text"
                  value={item.type}
                  onChange={(e) => updateType(e, item.id)}
                ></input>
              </MenuData>
              <MenuData>
                <input
                  id={item.id + "category"}
                  type="text"
                  value={item.category}
                  onChange={(e) => updateCategory(e, item.id)}
                ></input>
              </MenuData>

              <MenuData>
                {item.price.map((p, i) => (
                  <input
                    id={item.id + "" + i + "price"}
                    key={i}
                    type="text"
                    className="priceField"
                    value={p}
                    onChange={(e) => updatePriceArray(e, item.id, i)}
                  ></input>
                ))}
              </MenuData>
              <MenuData>
                <PriceButton id={item.id} onClick={(e) => addPrice(e, item.id)}>
                  +
                </PriceButton>
                <PriceButton
                  Outline
                  id={item.id}
                  onClick={(e) => removePrice(e, item.id)}
                >
                  -
                </PriceButton>
              </MenuData>
              <MenuData>
                <DeleteButton
                  id={item.id}
                  onClick={(e) => deleteItem(e, item.id)}
                >
                  <AiOutlineDelete />
                </DeleteButton>
              </MenuData>
            </MenuRow>
          );
        })}
        <MenuRow>
          <MenuData>
            <AddButton id="@2w2" onClick={(e) => addItem(e)}>
              + ADD ITEM
            </AddButton>
          </MenuData>
        </MenuRow>
      </tbody>
    </MenuTable>
  );
};

export default Eateries;
