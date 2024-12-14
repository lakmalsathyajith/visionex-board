import Header from "./layouts/partials/header";
import Sidebar from "./layouts/partials/sidebar";

function App() {
  return (
    <div className="board">
      <Header />
      <Sidebar />
      <main>
        <section></section>
        <section></section>
      </main>
    </div>
  );
}

export default App;
