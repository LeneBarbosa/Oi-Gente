import { BrowserRouter, Route, Routes } from "react-router-dom";
import Inicio from "./paginas/inicio";
import SobreMim from "./paginas/inicio/SobreMim";
import Menu from "./componentes/Menu";
import Rodape from "componentes/Rodape";
import PaginaPadrao from "componentes/PaginaPadrao";
import Post from "paginas/Post";
import NaoEncontrada from "paginas/NaoEncontrada";
import ScrollToTop from "componentes/ScrollToTop";




function AppRoutes() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Menu />
      <Routes>
        <Route path="/" element={<PaginaPadrao />}>
          <Route index element={<Inicio />} />
          <Route path="sobremim" element={<SobreMim />} />

        </Route>

        {/* Na rota “/”, a estrutura a ser renderizada é:
          <PaginaPadrao>
          <Inicio />
          </PaginaPadrao> 
          
          Na rota “/sobremim”, a estrutura a ser renderizada é:
          <PaginaPadrao>
          <SobreMim />
          </PaginaPadrao>
          Então, na rota /, que é a rota index, vamos ter página padrão como se fosse pai direto do início.
          Isso é uma forma mais interessante de visualizar o que está acontecendo, porém, estamos utilizando essa estrutura de rota pai e rotas filhas, que são justamente as rotas alinhadas.
          É um recurso muito legal para quando queremos aproveitar uma estrutura mesmo de página para diferentes rotas, não para todas, mas nesse caso utilizamos só para início e sobre mim.
        
        */}
        <Route path="posts/:id/*" element={<Post />} />
        <Route path="*" element={<NaoEncontrada />} />
      </Routes>
      <Rodape />
    </BrowserRouter>

  );
}

export default AppRoutes;
