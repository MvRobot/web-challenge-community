import nalgDonalds from './imgs/nalgonalds.jpg';
//import './App.css';
import React from 'react';
import { Article } from './components/articles';



function App() {
  return (
    <React.Fragment>
      <Article imgdir={nalgDonalds} imgname="SitioNalgon" title="Visitá NalgDonalds" btnTitle="A chingarle" btnAccion="document.location('http://google.com')"
      descrip="NalgDonalds esta celebrando su primer ano de servicio con todos esos gordos que les importa mas su hambre que sus ganas de vivir, gordo"
      />
    </React.Fragment>
  );
}

export default App;
