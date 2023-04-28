import Navbar from "./components/navbar/Navbar";
import Home from "./routes/home/Home";
import Auth from "./routes/auth/Auth"

function App() {
  return (
    <>
      <Navbar/>
      <Home/>
      <Auth/>
    </>
  );
}

export default App;
