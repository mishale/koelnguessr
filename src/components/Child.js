// Importiere React und die useContext-Funktion aus dem React-Modul
import React, { useContext } from "react";
// Importiere den React-Kontext "ExampleContext" und die Komponente "Button" aus den entsprechenden Dateien
import ExampleContext from "../contexts/ExampleContext";
import ChangeButton from "./ChangeButton";

// Definiere die Funktionskomponente "Child" mit den übergebenen Props {children, setContextValue}
const Child = ({ children, setContextValue }) => {
  // Verwende useContext, um den aktuellen Wert des React-Kontexts "ExampleContext" zu erhalten
  const ctxLocal = useContext(ExampleContext);

  return (
    <div>
      {/* Zeige den Kindkomponententext, den aktuellen Kontextwert und den übergebenen Wert an */}
      <h2>
        Child {children}: {ctxLocal}
      </h2>
      {/* Rendere die Button-Komponente und übergebe eine Funktion als Prop, um den Kontextwert zu aktualisieren */}
      <ChangeButton
        myOnClick={() => {
          // Aktualisiere den Kontextwert mit einem neuen Wert, der vom Kind und dem Button abgeleitet ist
          setContextValue("Button Value " + children);
        }}
      ></ChangeButton>
    </div>
  );
};

export default Child;