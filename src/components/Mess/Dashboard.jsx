import React, { useState, useEffect } from "react";
import { setMessMenu } from "../../services/firestore";

// styles
import "../../styles/components/MessStyles";
import { Container } from "../../styles/Shared/Container";
import { Button } from "../../styles/Shared/Button";
import { FormStyles } from "../../styles/components/HomeStyles";

const Dashboard = ({ currentMenuData }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [selectedMeal, setSelectedMeal] = useState(0);
  const [selectedMenu, setSelectedMenu] = useState();
  const [selectedSpecial, setSelectedSpecial] = useState(false);

  const menuToText = arrayMenu => {
    let textMenu = arrayMenu.toString();
    textMenu = textMenu.replace(/,/g, "\n");
    return textMenu;
  };

  const textToMenu = textMenu => {
    const arrayMenu = [];
    const menu = textMenu.trim();
    const tempArrayMenu = menu.split("\n");
    for (let i = 0; i < tempArrayMenu.length; i += 1)
      if (tempArrayMenu[i].trim()) arrayMenu.push(tempArrayMenu[i]);

    return arrayMenu;
  };

  const createMenu = () => {
    const updatedMenu = currentMenuData;
    updatedMenu.meals[selectedMeal].menu = textToMenu(selectedMenu);
    updatedMenu.meals[selectedMeal].isSpecial = selectedSpecial;
    return updatedMenu.meals;
  };

  const handleUpdate = async () => {
    setIsLoading(true);
    try {
      await setMessMenu(createMenu());
      setMessage("Update Successful");
    } catch (error) {
      console.log(error);
      setMessage("Error Occurred");
    } finally {
      setIsLoading(false);
    }
  };

  const handleSelectChange = e => {
    const menuIndex = parseInt(e.target.value, 10);
    setSelectedMeal(menuIndex);
    setSelectedMenu(menuToText(currentMenuData.meals[menuIndex].menu));
  };

  const handleMenuChange = e => {
    setSelectedMenu(e.target.value);
  };

  const handleSpecialChange = e => {
    setSelectedSpecial(e.target.checked);
  };

  const renderForm = () => {
    if (isLoading) return <div>Loading...</div>;
    if (!currentMenuData) return <div>No data.</div>;
    if (currentMenuData.meals && typeof currentMenuData.meals === "object")
      return (
        <FormStyles>
          <div>
            <label>Meal</label>
            <select id="meal" onChange={handleSelectChange}>
              {currentMenuData.meals.map((meal, i) => (
                <option key={i.toString()} value={i}>
                  {meal.name}
                </option>
              ))}
            </select>
            <label>Menu</label>
            <textarea
              rows="20"
              cols="30"
              name="menu"
              value={selectedMenu}
              onChange={handleMenuChange}
            />

            <div
              style={{
                marginTop: "1rem",
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <input
                className="checkbox"
                type="checkbox"
                height="30vh"
                value="Special"
                defaultChecked={selectedSpecial}
                onChange={handleSpecialChange}
              />
              <p>Special Menu?</p>
            </div>

            <Button className="submitBtn" onClick={handleUpdate}>
              Update
            </Button>
          </div>
        </FormStyles>
      );
    return <div>No meals available.</div>;
  };

  useEffect(() => {
    setTimeout(() => {
      if (message) setMessage("");
    }, 5000);
  }, [message]);

  useEffect(() => {
    if (currentMenuData.meals)
      setSelectedMenu(menuToText(currentMenuData.meals[0].menu));
  }, [currentMenuData]);

  return (
    <Container center column>
      {renderForm()}
      {message || null}
    </Container>
  );
};

export default Dashboard;
