import { Navigate, Route, Routes } from "react-router-dom";
import { ItemDetails } from "@pages/ItemDetails";
import { Home } from "@pages/Home";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/details" element={<ItemDetails />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}
