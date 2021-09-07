import React from "react";
import "./App.css";
import backgroundImage from "./assets/bg.jpg";

const styles = {
  main: {
    width: "100vw",
    height: "100vh",
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundColor: "#B9A9A1",
  },
};

function App() {
  return (
    <div style={styles.main}>
      <h1>React Todo List</h1>
    </div>
  );
}

export default App;
