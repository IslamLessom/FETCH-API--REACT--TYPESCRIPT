import React from "react";
import { Layout } from "antd";
import Cities from "./api-data/cities";
import Navbar from "./components/Navbar";
import { GlobalStyle } from "./GlobalStyles";
const { Header, Footer, Content } = Layout;

const App: React.FC = () => {
  return (
    <Content>
      <GlobalStyle />
      <Layout>
        <Header>
          <Navbar />
        </Header>
        <Content>
          <Cities />
        </Content>
        <Footer>Footer</Footer>
      </Layout>
    </Content>
  );
};

export default App;
