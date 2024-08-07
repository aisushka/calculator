import { Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";
import MainLayout from "../components/layouts/MainLayout";
import { ReactNode } from "react";
import Calculator from "../components/organisms/Calculator";

const DynamicRoutes = () => {
  const getElement = (children: ReactNode) => (
    <MainLayout>{children}</MainLayout>
  );
  return (
    <Routes>
      <Route path="/" element={getElement(<Calculator />)} />
      <Route path="/asdd" element={getElement(<Calculator />)} />
    </Routes>
  );
};

const Router = () => {
  return (
    <BrowserRouter basename="/">
      <DynamicRoutes />
    </BrowserRouter>
  );
};
export default Router;
