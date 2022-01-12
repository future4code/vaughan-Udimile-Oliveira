import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import CardPequeno from './components/CardPequeno/CardPequeno';

function App() {
  

  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem="https://lh3.googleusercontent.com/2x7CgcFJZhMGEH61V3OPyuzIsnLrLqbcc-SBrJjlVS8Qj0LJY5rfD0mt4JiuIQfPXlAutrU58UHEtFQithG-6trrnY1u4-38h4_blnoj6Un9KaavRLsApOdLEDCEX3sS1QasIah5unbotsc922WiubfEcruWquFR-mGGCQ5y9aMVNWLu5sj-eNn2hikhVBFkqTIszST0w9aKoHiaKvwYH3bnVssM4eDzhS6FaWhCC3cqbh2OngXvD6Trhv_VRizZFnaKsd3pkue-ohZFZO6gze0Aixqa1yVwA0DCPgVULyMjGzI9wMNi2Aq7FSf5TNAYRC0FtXjdkx9SalYTxMBATLkXQs5GW1_xnzywVnOQTPRC6uMJBpULm96DMqR-3iK4PGSGMYY8QsR0QNMo6V3EiHggqvLUHXWyPVXVocwdUTfRAO2pSozIaRMX8bKWJT_Wg13rIJyv5VXGCrX5-GumQ5D4nTeIrauekRn6TD8ntUMdCZqQzmqrQQ93pGgfoKhhGGsIuw8hxhWsIbMqhoGFJ8t1PsjUIHfxiKA6fox6zjOCPojNKO2mb_OKBAVPRqckF_BKLUFhoy0_uXO2TZT71XtnN7tVdxEmqnsaXkl8fnST8sEQrghWnDVoRsPddYb82py9F6dnqQGCV_Ygy61Hl_IzqKaPuQA-cBc52RpYmAmV9JcWhThAJcMP0bKD6HIXF-MRLHuFHaPMFJdxpxKprV7R=w713-h950-no?authuser=0" 
          nome="Udimile" 
          descricao="Oi, eu sou o Udimile. Sou estudante de Dev Full Stack na Labenu. Gosto muito de aprender e assistir vídeos sobre tecnologia."
        />
        
        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
        />
      </div>
      <div className="page-section-container">
        <CardPequeno
          email="udimile@gmail.com"
          endereco="Rua Ferreira de Oliveira, 540E"
        />

      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem="https://logospng.org/download/petrobras/logo-petrobras-escudo-512.png" 
          nome="Petrobras" 
          descricao="Trabalhei como jovem aprendiz de auxiliar administrativo." 
        />
        
        <CardGrande 
          imagem="https://cpp-prod-catho-company-image-uploads.s3-sa-east-1.amazonaws.com/1-logo/contax-logo.jpg" 
          nome="Liq" 
          descricao="Trabalhei como atendente de telemarketing ativa." 
        />
      </div>

     

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>
    </div>
  );
}

export default App;
