import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Checkout } from "./components/Checkout/Checkout";
import { Menu } from "./components/Menu/Menu";
import { Success } from "./components/Success/Success";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Menu />} />
      <Route path="checkout" element={<Checkout />}/>
      <Route path="success" element={<Success />} />
    </Routes>
  );
}
