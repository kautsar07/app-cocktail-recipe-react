import { Layout } from "antd";
import React, { useState, useEffect } from "react";
import { Card } from "antd";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import Headers from "../Header/Header";
import Footers from "../Footer/Footer";
import { Input } from "antd";
import "./App.css";

const { Meta } = Card;

const { Header, Footer, Content } = Layout;

export default function App() {
  const [drinks, setDrinks] = useState([]);
  const loadDrinks = async () => {
    try {
      const res = await axios.get(
        "https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a"
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
  const [drin, setDrin] = useState([]);
  const [kueri, setKueri] = useState();
  const navigate = useNavigate();
  const loadDrin = async () => {
    try {
      const res = await axios.get(
        `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${kueri}`
      );
      console.log(res.data.drinks);
      setDrin(res.data.drinks);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    loadDrin();
  }, [kueri]);

  const handleChange = async (e) => {
    e.preventDefault();
    setKueri(searchTerm);
    setSearchTerm(e.target.value);
  };

  const { Search } = Input;
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <Layout className="layout">
      <Headers />
      <div className="welcome">
        <h1>Welcome</h1>
        <h3>
          to the <b>Drink recipe website</b>, please choose the type of drink
          you like and enjoy making
        </h3>
      </div>
      <div className="cont">
        <Content>
          <div className="cari">
            <h1>All Drinks</h1>
            <div className="input">
              <input
                className="put"
                type="text"
                placeholder="Search Drink"
                onChange={(e) => handleChange(e)}
              />
            </div>
          </div>

          <div className="content-search">
            <div className="search-bar">
              {drin &&
                drin.map((item) => (
                  <Link to={`/Details/${item.idDrink}`}>
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
                  </Link>
                ))}
            </div>
          </div>
          <div>
            <div className="content">
              {drinks
                // .filter((item) => {
                //       if (searchTerm === "") {
                //           return item;
                //         } else if (
                //             item.strDrink.toLowerCase().includes(searchTerm.toLowerCase())
                //     ) {
                //       return item;
                //     }
                //   })
                .map((item) => (
                  <Link to={`/Details/${item.idDrink}`}>
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
                  </Link>
                ))}
            </div>
          </div>
        </Content>
      </div>
      <Footers />
    </Layout>
  );
}
