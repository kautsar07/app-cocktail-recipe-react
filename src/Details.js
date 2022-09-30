import { Layout, Breadcrumb, Menu, Grid } from "antd";
import React, { useState, useEffect, useNavigate } from "react";
import "./Details.css";
import { Card } from "antd";
import { Link, useParams } from "react-router-dom";

import axios from "axios";
import Headers from "./component/Header/Header";
import Footers from "./component/Footer/Footer";
import Ingredient from "./component/PageDetails/Ingredient/Ingredient";

import Steps from "./component/PageDetails/ServingSteps/Steps";
import Name from "./component/PageDetails/Category/Name";

const { Meta } = Card;
const { Header, Footer, Content } = Layout;
export default function App() {
  const [drinks, setDrinks] = useState([]);
  const { id } = useParams();
  const loadDrinks = async () => {
    try {
      const res = await axios.get(
        `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`
      );
      console.log(res.data.drinks);
      setDrinks(res.data.drinks);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    loadDrinks();
  }, []);

  return (
    <Layout className="layout">
      <Headers />
      <Content>
        <div className="cc">
        <div className="conte">
          <div className="main">
            {drinks.map((item) => (
              <div className="left">
                <img alt="example" src={item.strDrinkThumb} />
                {/* <Content>
                  <Card
                    className="card"
                    hoverable
                    cover={<img alt="example" src={item.strDrinkThumb} />}
                  >
                    <Meta
                      title={item.strDrink}
                      description={item.strCategory}
                    />
                  </Card>
                </Content> */}
              </div>
            ))}

            <div className="border">
              {drinks.map((item) => (
                <div className="right">
                  <Name Drink={item.strDrink} Category={item.strCategory} />
                  <div className="ingre">
                    <div className="name-ingre">
                      <ul>
                        <Ingredient name={item.strIngredient1} />
                        <Ingredient name={item.strIngredient2} />
                        <Ingredient name={item.strIngredient3} />
                        <Ingredient name={item.strIngredient4} />
                        <Ingredient name={item.strIngredient5} />
                        <Ingredient name={item.strIngredient6} />
                        <Ingredient name={item.strIngredient7} />
                        <Ingredient name={item.strIngredient8} />
                        <Ingredient name={item.strIngredient9} />
                        <Ingredient name={item.strIngredient10} />
                        <Ingredient name={item.strIngredient11} />
                        <Ingredient name={item.strIngredient12} />
                        <Ingredient name={item.strIngredient13} />
                        <Ingredient name={item.strIngredient14} />
                        <Ingredient name={item.strIngredient15} />
                      </ul>
                    </div>
                    <div className="size-ingre">
                      <ul>
                        <Ingredient name={item.strMeasure1} />
                        <Ingredient name={item.strMeasure2} />
                        <Ingredient name={item.strMeasure3} />
                        <Ingredient name={item.strMeasure4} />
                        <Ingredient name={item.strMeasure5} />
                        <Ingredient name={item.strMeasure6} />
                        <Ingredient name={item.strMeasure7} />
                        <Ingredient name={item.strMeasure8} />
                        <Ingredient name={item.strMeasure9} />
                        <Ingredient name={item.strMeasure10} />
                        <Ingredient name={item.strMeasure11} />
                        <Ingredient name={item.strMeasure12} />
                        <Ingredient name={item.strMeasure13} />
                        <Ingredient name={item.strMeasure14} />
                        <Ingredient name={item.strMeasure15} />
                      </ul>
                    </div>
                  </div>
                  <h3>Glass</h3>
                  <p>{item.strGlass}</p>
                  <h3>Instructions</h3>
                  <Steps language="English" val={item.strInstructions} />
                </div>
              ))}
            </div>
          </div>
        </div>
        </div>
        
      </Content>
      <Footers />
    </Layout>
  );
}
