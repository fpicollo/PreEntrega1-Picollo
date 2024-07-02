import Principal from "./components/Principal";
import Footer from "./components/Footer";
import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar";;
import Bienvenidos from "./components/Bienvenidos";

function App() {
  return (
    <>
      <Bienvenidos />
      <NavBar />
      <Principal />
      <ItemListContainer texto={"Pronto abriremos!"} />
      <Footer />
    </>
  )
}

export default App
