import React, { useRef, useContext } from "react";

const InputField = ({ setContextValue }) => {
  // Verwende useRef, um eine Referenz zum Input-Element zu erstellen
  const inputRef = useRef(null);

  // Rendere die Komponente mit JSX
  return (
    <div>
      {/* Erstelle ein Input-Feld und verbinde es mit der useRef-Referenz */}
      <input
        ref={inputRef}
        placeholder="Context Value"
        // Füge einen Event-Handler hinzu, der auf Änderungen im Input-Feld reagiert
        onChange={() => {
          // Aktualisiere den Kontextwert, indem die Funktion setContextValue aufgerufen wird
          setContextValue(inputRef.current.value);
        }}
      />
    </div>
  );
};

export default InputField;
