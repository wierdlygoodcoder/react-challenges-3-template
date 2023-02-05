import css from "./App.module.css";
import Sidebar from "./components/Sidebar";
import NavBarForm from "./components/NavBarForms"

function App() {
  return (
    <div className={css.App}>
      {/* Add your components here */}
      <NavBarForm />
      <Sidebar />
    </div>
  );
}

export default App;