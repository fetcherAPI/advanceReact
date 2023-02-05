import React, { Suspense } from "react";
import "./index.scss";
import { Route, Routes } from "react-router";
import { Link } from "react-router-dom";
import { AboutPageLazy } from "./pages/AboutPage/AboutPage.lazy";
import { MainPageLazy } from "./pages/MainPage/MainPage.Lazy";

type Props = {};

export const App = (props: Props) => {
  return (
    <>
      <Link to="/">Main</Link>
      <Link to="about">Abut</Link>
      <h2 className="app_title">Pages</h2>
      <Suspense fallback={"laoding"}>
        <Routes>
          <Route path="about" element={<AboutPageLazy />} />
          <Route path="/" element={<MainPageLazy />} />
        </Routes>
      </Suspense>
    </>
  );
};
