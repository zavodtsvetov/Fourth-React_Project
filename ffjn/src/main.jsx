import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App.jsx";
import AppSelect from "./App3Select.jsx";
import { AppValidation } from "./ValidationFiledForm.jsx";
import { AppValidTxt } from "./ValidationTXT.jsx";
import { YupValidation } from "./YupTxt.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
    <AppSelect />
    <AppValidation />
    <AppValidTxt />
    <YupValidation />
  </StrictMode>
);
