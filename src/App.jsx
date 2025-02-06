import React from "react";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import CardTitle from "react-bootstrap/esm/CardTitle";
import CardText from "react-bootstrap/esm/CardText";
import CardBody from "react-bootstrap/esm/CardBody";
import CardSubtitle from "react-bootstrap/esm/CardSubtitle";


const QRCodePage = () => {
  return (
    <div>
      
      <>
      
     <Navbar bg="dark" data-bs-theme="dark" >
        <Container>
          <Navbar.Brand>
            <img
              alt=""
              src="/ANPI_logo.jpeg"
              width="50"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            Anpi Saluzzo e Valle Po
          </Navbar.Brand>
        </Container>
      </Navbar>
    </>
    <div>
     
    <Container fluid className="d-flex flex-column align-items-center justify-content-center min-vh-100 bg-light text-black px-3">
    <div>
    <Card >
        <div className="bg-white shadow-lg">
        <CardBody>
          <CardTitle style={{fontStyle:'bold', textAlign:"center"}} ><h2>Andrea Aimar</h2></CardTitle>
          <CardSubtitle style={{fontStyle:'italic', textAlign:"center"}}>Revello, 17.02.1924 –Saluzzo, 26.07.1944</CardSubtitle>
          <div><h1> </h1> </div>
          <CardText>
          In questa piazza, alla quarta colonna dell’Ala di ferro, nel giorno di mercato mercoledì 26 luglio 1944 si svolse l’atroce sequenza dell’impiccagione del ventenne impiegato comunale di Revello Andrea Matteo Aimar, quale rappresaglia delle perdite subite dai nazifascisti nella “battaglia di Sanfront”. La corda si spezzò, ma il giovane, anziché esser graziato secondo l’usanza, fu finito con un colpo di rivoltella al cuore da un ragazzotto in camicia nera e appeso già morto alla trave, dove fu lasciato esposto a lungo quale tragico avvertimento tra il raccapriccio e la pena generale. Addirittura vi furono condotti a vederlo i ragazzi delle scuole. 
          All’epoca si diceva che Andrea fosse stato sorpreso da una camionetta tedesca il 19 aprile verso sera, mentre si trovava  per strada a Revello in compagnia di due amici in età di leva, che erano riusciti a dileguarsi, e arrestato forse a causa di una vecchia storia di irregolarità nel rilascio delle tessere annonarie. Né Andrea, durante i mesi di detenzionenella Castiglia a Saluzzo, ammise mai altro, neppure con i familiari.
          Poi, dopo la Liberazione, a poco a poco affiorò la storia vera dell’ uomo, il  partigiano garibaldino “Sereno”, un ragazzo orfano di madre e dotato di una buona cultura acquisita nel  Seminario di Bagnolo. Andrea faceva parte dell’11^ Divisione garibaldina Cuneo 15^Brigata Saluzzo con la qualifica di commissario politico e, sfruttando il suo impiego pubblico, forniva documenti falsi e informazioni riservate sui movimenti dei repubblichini e dei tedeschi  ai compagni combattenti in valle Po. Abitava in via dei Fortini a Revello con il padre Francesco e le sue frequenti uscite con gli amici, di cui la fidanzata Rosina era un po’ gelosa, coprivano gli incontri di collegamento con la Resistenza: infatti, uno dei due giovani fuggiti la sera del suo arresto era in realtà il comandante garibaldino Andrea Bruno “Santabarbara”.
          La lapide commemorativa dell’esecuzione di Andrea Aimarè posta sulla facciata del Palazzo Italia, già Palazzo del Littorio, costruito tra il 1927 e il 1929 per ospitarvi tutte le organizzazioni di regime, nonché la biblioteca, la scuola di musica e il cinema comunali.Sotto la RSI i repubblichini si appropriarono della gestione diretta della struttura,allestendovi i propri schedari e facendone la base delle Brigate Nere.
          Per questo nella notte tra il 26 e il 27 febbraio 1945 un commando di Garibaldini e GL fece saltare l’intera ala sinistra dell’edificio, in cui erano collocati gli uffici.

        </CardText>
        </CardBody>
        
      </div>
      </Card>
    </div>
    </Container>
    </div>
    
    </div>
  );
};

export default QRCodePage;
