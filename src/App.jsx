import React from "react";

const App = () => {
  const names = [
    "Alice",
    "Bob",
    "Charlie",
    "Diana",
    "Evan",
    "Fiona",
    "George",
    "Hannah",
    "Ian",
    "Julia",
  ];

  function randomizer() {
    return Math.round(Math.random() * (names.length - 1));
  }

  console.log(randomizer());

  let firstName = names[randomizer()];

  return (
    <>
      <h1>Hello {firstName}</h1>
    </>
  );
};

export default App;
