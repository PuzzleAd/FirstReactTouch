import React from "react";
import "./Main.css"

const Main = () => {
  const items = [
    { title: "Card 1", description: "This is the description for Card 1." },
    { title: "Card 2", description: "This is the description for Card 2." },
    { title: "Card 3", description: "This is the description for Card 3." },
  ];

  return (
    <>
      <main>
        {items.map((element) => (
          <div>
            <h1 className="card">{element.title}</h1>
            <p>{element.description}</p>
          </div>
        ))}
      </main>
    </>
  );
};

export default Main;
