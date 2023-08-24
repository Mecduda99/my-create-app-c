import './App.css'
import Cabecalho from './assets/Components/Cabecalho';
import Footer from './assets/Components/Footer';
import Section from './assets/Components/Section';
import Times from './assets/Components/Times';
import logoReact from "./assets/react.svg"

function App() {
  var nome = "Cássio";

  const time =[
    "Corinthians",
    "<NAME>",
    "Palmeiras",
    "Santos",
    "Grêmio",
    "Flamengo",
    "Vasco da gama",
    "Sport Recife",
    "Chapecoense"
  ];

  let texto = "Novo Texto, uhul!"

  let altLogo = "Logomarca de Tecnologia React!"

  return (
    // FRAGMENT
    <>
      {/* {Crie um cabeçalho com um h1 um título e uma lista de 3 itens} */}
      <Cabecalho />

      {/* Crie uma Section com uma div e 3 parágrafos com texto lorem de 3 linhas */}
      <Section novoProps={texto} uriLogoReact={logoReact} altLogoReact={altLogo} />

      {/* Crie um rodapé com um p e o código do símbolo de copyright mais o texto que se segue*/}
      <Footer />

     {/* <Times nome={nome} time={time}/> */}
    </>
  )
}

export default App
