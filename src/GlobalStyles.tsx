import styled, { createGlobalStyle } from "styled-components";
import { Layout } from "antd";
const { Header, Footer, Content } = Layout;

export const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        font-family: 'Source Sans Pro' , sans-serif;
    }
`;

export const GlobalLayout = styled(Layout)``;

export const HeaderLayout = styled(Header)``;

export const FooterLayout = styled(Footer)``;

export const ContentLayout = styled(Content)``; 
