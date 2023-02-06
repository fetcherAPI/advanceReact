import React, {Suspense} from "react";
import "../style/index.scss";
import {Route, Routes} from "react-router";
import {Link} from "react-router-dom";
import {AboutPageLazy} from "./pages/AboutPage/AboutPage.lazy";
import {MainPageLazy} from "./pages/MainPage/MainPage.Lazy";
import {useTheme} from "../theme/useTheme";

type Props = {};

export const App = (props: Props) => {

  const {theme, toggleTheme} = useTheme()
  
  return (
    <div className={`app ${theme}`}>
      <button onClick={toggleTheme}>toggle</button>
      <Link to="/">Main</Link>
      <Link to="about">Abut</Link>
      <h2 className="app_title">Pages</h2>
      <Suspense fallback={"loading"}>
        <Routes>
          <Route path="about" element={<AboutPageLazy/>}/>
          <Route path="/" element={<MainPageLazy/>}/>
        </Routes>
      </Suspense>
    </div>
  );
};
