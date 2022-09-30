import React from "react";
import { Layout } from "antd";
import "./Footer.css"


export default function Footer() {
    const { Header, Footer, Content } = Layout;
  return (
    <Footer className="ant-layout-footer"
      style={{
        textAlign: "center",
      }}
    >
      The Cocktail ©2022 Created by Kautsar Elwarbi
    </Footer>
  );
}
