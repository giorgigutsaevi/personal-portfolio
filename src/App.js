import './App.css'; 
import Header from "./components/Header/Header"
import AnimatedRoutes from './components/AnimatedRoutes/AnimatedRoutes';
import { BlurContextProvider } from "./context/BlurContext"
import { MenuContextProvider } from "./context/MenuContext"

const App = () => {

  return (
    <MenuContextProvider>
      <BlurContextProvider>
        <div>
          <Header />
          <AnimatedRoutes />
        </div>
      </BlurContextProvider>
    </MenuContextProvider>
  );
}

export default App;
