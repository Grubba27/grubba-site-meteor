import React from 'react';
import { Data, Context } from '../services/data'
import { createGlobalStyle } from "styled-components";
import { GlobalStyle, ThemeProvider } from "@react95/core";
import Desktop from "./Desktop";
import Taskbar from "./Taskbar";

const BodyFontSizeOverride = createGlobalStyle`
  body {
    font-size: 15px
  }
`;
const dataService = Data();

const App = () => ( true ? <div>foo</div> :
  <Context.Provider value={dataService}>
    <ThemeProvider>
      <GlobalStyle/>
      <BodyFontSizeOverride/>

      <Desktop/>
    </ThemeProvider>
  </Context.Provider>
);
export default App;
