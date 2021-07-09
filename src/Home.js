import React from 'react';
import Article from './Estrutura/Article';
import Headers from './Estrutura/Headers';
import Footer from './Estrutura/Footer';



//criando componente Geral Main
class Home extends React.Component{
  render(){
    return (
      <div>
        <Headers />
        <Article />
        <Footer />
      </div>
    ); 
  }
}
//fim do componente Geral Main
export default Home;

