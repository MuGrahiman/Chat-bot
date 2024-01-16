import "./App.css";
import SideBar from "./Components/SideBar";
import NavBar from "./Components/NavBar";
import Dashboard from "./Components/Dashboard";

function App() {
  return (
    <div className="App">
      <SideBar>
        <div className="w-full min-h-dvh">
          <NavBar />
          <Dashboard />
        </div>
      </SideBar>
    </div>
  );
}

export default App;
