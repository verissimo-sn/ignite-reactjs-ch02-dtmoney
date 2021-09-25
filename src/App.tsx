import { Header } from "./components/Header";
import { Dashboad } from "./components/Dashboad";
import { GlobalStyle } from "./styles/global"

export function App() {
  return (
    <>
      <GlobalStyle/>
      <Header/>
      <Dashboad/>
    </>
  );
}