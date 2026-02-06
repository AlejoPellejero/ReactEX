import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { FirstStepApp } from "./FirstStepApp";
//import { MyAwesomeApp } from "./MyAwesomeApp";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <FirstStepApp />
    {/*<MyAwesomeApp />*/}
  </StrictMode>,
);
