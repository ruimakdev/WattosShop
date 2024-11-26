import { useCallback, useState } from "react";
import Drawer from "./components/Drawer";
import Navbar from "./components/NavBar";
import Home from "./pages/Home";

const App = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen((prev: boolean) => !prev);
  };

  const closeDrawer = useCallback(() => {
    setIsDrawerOpen(false);
  }, []);

  return (
    <>
      <header>
        <Navbar toggleDrawer={toggleDrawer} />
      </header>
      <nav>
        <Drawer isOpen={isDrawerOpen} closeDrawer={closeDrawer} />
      </nav>
      <main>
        <Home />
      </main>
    </>
  );
};

export default App;
