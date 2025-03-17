import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App.jsx";
import AppSelect from "./App3Select.jsx";
import { AppValidation } from "./ValidationFiledForm.jsx";
import { AppValidTxt } from "./ValidationTXT.jsx";
import { YupValidation } from "./YupTxt.jsx";
import { UsingRefCompo } from "./UsingRefCompo.jsx";
import { AppHookForm } from "./ReactHookForm/ReactHookForm.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <App />
    <AppSelect />
    <AppValidation />
    <AppValidTxt />
    <YupValidation />
    <UsingRefCompo /> */}
    <AppHookForm />
  </StrictMode>
);
