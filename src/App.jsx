import './App.css'

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

  return (
    // FRAGMENT
    <> 
      <h1>React + Vite</h1>

      <h2>RM98760</h2>

      <p className='text'>Melhor goleiro: {nome} </p>

      <ul>
        {time.map((item, indice)=>
          <li key={indice}>{`${item} - ${item}`}</li>
        )}
      </ul>
    </>
  )
}

export default App
