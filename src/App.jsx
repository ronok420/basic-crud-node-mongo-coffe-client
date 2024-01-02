import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { useLoaderData } from "react-router-dom";
import CoffeCart from "./Componenets/CoffeCart";

function App() {
  const coffeData = useLoaderData();

  const [deleteCoffe, setDeleteCoffe] = useState(coffeData);

  return (
    <div className="bg-white">
      <h1 className="text-3xl">
        {" "}
        Diffrent type of coffe available {deleteCoffe.length}
      </h1>
      <div className="md:grid grid grid-cols-1 md:grid-cols-2 md:gap-6 gap-5  md:m-20 m-2 mb-5">
        {deleteCoffe.map((coffe) => (
          <CoffeCart
            key={coffe._id}
            coffe={coffe}
            deleteCoffe={deleteCoffe}
            setDeleteCoffe={setDeleteCoffe}
          ></CoffeCart>
        ))}
      </div>
    </div>
  );
}

export default App;
