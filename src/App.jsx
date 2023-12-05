import React from "react";

const App = () => {
  console.log(import.meta.env.VITE_TEST);

  return (
    <div>
      <h1>{import.meta.env.VITE_TEST}</h1>
    </div>
  );
};

export default App;
