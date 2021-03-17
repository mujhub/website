import React, { useState } from "react";
import {
  MenuTable,
  MenuRow,
  MenuData,
  PriceButton,
} from "../styles/components/EateriesStyles";

//sample data
import { data } from "./sampleMenu";

const Eateries = () => {
  const [menu, setMenu] = useState(data);

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

  return (
    <MenuTable>
      <tbody>
        <MenuRow className="tableHeader">
          <td>Item Name</td>
          <td description="true">Description</td>
          <td>Category</td>
          <td>Price</td>
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
                  cols="50"
                  rows="1"
                  value={item.description}
                  onChange={(e) => updateDescription(e, item.id)}
                  placeholder="no description "
                ></textarea>
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
                  Add Price
                </PriceButton>
              </MenuData>
            </MenuRow>
          );
        })}
      </tbody>
    </MenuTable>
  );
};

export default Eateries;
