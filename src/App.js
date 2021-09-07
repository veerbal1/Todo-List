import "./App.css";
import logo from "./assets/bg.jpg";
import WorkflowBox from "./Components/WorkflowBox";

const styles = {
  main: {
    width: "100vw",
    height: "100vh",
    backgroundImage: `url(${logo})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundColor: "#C2B0A6",
    overflow: "hidden",
    position: "fixed",
    top: 0,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
};
function App() {
  return (
    <div style={styles.main}>
      <WorkflowBox />
    </div>
  );
}

export default App;
