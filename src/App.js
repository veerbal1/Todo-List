import "./App.css";
import logo from "./assets/bg.jpg";

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
  workflowBox: {
    background: "rgba(255,255,255,0.2)",
    backdropFilter: "saturate(180%) blur(10px)",
  },
};
function App() {
  return (
    <div style={styles.main}>
      <div className="w-8/12 h-4/6 rounded-md" style={styles.workflowBox}></div>
    </div>
  );
}

export default App;
