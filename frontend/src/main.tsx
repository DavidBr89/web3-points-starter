// GRADE: 4

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter } from "react-router-dom";

const browserRouter = createBrowserRouter([
  // TODO: Maak de routes aan voor de applicatie, deze moeten de volgende routes bevatten:
  // 1. De root route ("/") die de CoursesPage component rendert;
  // 2. De route voor de course details ("/courses/:id/attempt/:attemptNumber") die de CoursesDetailsPage component rendert.
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    {/* TODO: Gebruik de juiste component zodanig dat de GradesContext in deze app kan gebruikt worden */}
    {/* TODO: Voeg ook de juiste component toe om te kunnen navigeren in deze app */}
  </StrictMode>
);
