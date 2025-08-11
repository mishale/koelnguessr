import React, { useContext } from "react";
// Importiere den React-Kontext "ExampleContext" aus der entsprechenden Datei
import ExampleContext from "../contexts/ExampleContext";

// Definiere die Funktionskomponente "Button" mit der übergebenen Prop "myOnClick"
const ChangeButton = ({ myOnClick }) => {
  // Verwende useContext, um den aktuellen Wert des React-Kontexts "ExampleContext" zu erhalten
  const ctxLocal = useContext(ExampleContext);

  return <button onClick={myOnClick}>Change State {ctxLocal}</button>;
};

export default ChangeButton;