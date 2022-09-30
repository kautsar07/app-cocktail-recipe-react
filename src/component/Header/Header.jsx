import React from "react";
import { AiOutlineHome } from "react-icons/ai";
import { MdGridView } from "react-icons/md";
import { Link } from "react-router-dom";
import { Layout} from "antd";
import "./Header.css";



export default function Header() {
  const { Header, Footer, Content } = Layout;
  return (
    <Header className="ant-layout-header">
      <div className="nav">
      <div className="logo">
        <h1>The Cocktail</h1>
      </div>
      <div>
        <ul className="list">
          <li className="menu">
            <span>
              <AiOutlineHome className="icon" />
            </span>
            <Link to="/" style={{color:"white"}}><span>Home</span></Link>
          </li>
          <li className="menu">
            <span>
              <MdGridView className="icon" />
            </span>
            <Link to="/Cocktails" style={{color:"white"}}><span>Cocktail</span></Link>
          </li>
          <li className="menu">
            <span>
              <MdGridView className="icon" />
            </span>
            <Link to="/Ordinary" style={{color:"white"}}><span>Ordinary Drink</span></Link>
          </li>
          <li className="menu">
            <span>
              <MdGridView className="icon" />
            </span>
            <Link to="/Beer" style={{color:"white"}}><span>Beer</span></Link>
          </li>
        </ul>
      </div>
    </div>
    </Header>
    
  );
}
