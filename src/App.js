


import imagenes from './assent/imagenes';

const App = _ =>{


 
  return (
    <div >
      <header>
          <div style={{ 
                backgroundColor: '#228B22', 
                width: '100%', 
                padding: '10px',
                display: 'flex',          
                justifyContent: 'center',  
                alignItems: 'center'       
          }}>
              <text style={{ 
                fontWeight: 'bold', 
                fontSize: '50px',
                color: 'white'
          }}
                >Bosque Escuela
              </text>
          </div>
      </header>
    <div >
    <div >
          <div style={{ 
                display: 'flex', 
                flexDirection: 'column', 
                backgroundColor: 'lightgreen', 
                alignItems: 'center', 
                textAlign: 'center',
                padding: '40px 20px',      
                       
          }}>
               <span style={{ 
              fontWeight: '500',          
              fontSize: '20px',
              color: 'black',
              maxWidth: '400px',          
              lineHeight: '1.6',          
              fontFamily: 'Verdana, sans-serif'
          }}>
          <span style={{
             color: '#228B22', 
             fontWeight: 'bold' 
          }}>¿Qué es?: 
          </span> 
                Es un enfoque pedagógico que promueve el aprendizaje mediante la exploración,
                el juego y experiencias prácticas en la naturaleza, en lugar de estar siempre 
                en aulas convencionales.
          </span>

          </div>
          <div style={{ 
                display: 'flex', 
                flexDirection: 'row', 
                backgroundColor: 'lightgreen', 
                alignItems: 'center', 
                textAlign: 'center',
                padding: '40px 20px',      
                minHeight: '100vh'          
          }}>
          <img 
                src={imagenes.img1} 
                alt='Descripcion'
                style={{ 
                width: '500px', 
                height: 'auto', 
                borderRadius: '20px',    //Bordes cool we xd
                marginBottom: '20px',   
                boxShadow: '0px 10px 20px rgba(0,0,0,0.2)' //Para que se vea asthetic xd
          }}
          />
          <div style={{
                display: 'flex',
                flexDirection: 'column',
                flex:1,
                padding: '40px 20px',
          }}>
              <span style={{ 
                fontWeight: 'bold',
                fontSize: '45px',           //Tamaño del titulo we
                color: 'white',
                fontFamily: 'Arial, sans-serif',
                marginBottom: '10px',
                padding: 50
          }}>
            Limón - Citrus limon. 
          </span>
          <span style={{ 
                fontWeight: '500',          
                fontSize: '20px',
                color: 'black',
                maxWidth: '800px',          
                lineHeight: '1.6',
                textAlign: 'justify', 

                fontFamily: 'Verdana, sans-serif'
          }}>
                  El limón (Citrus × limon) es una especie de árbol frutal perenne de la familia 
                  Rutaceae, perteneciente al género Citrus, conocido por su fruto ácido de color 
                  amarillo cuando madura. Es un híbrido natural entre otros cítricos, 
                  principalmente cidra (Citrus medica) y naranja amarga (Citrus × aurantium).
            </span>
             <span style={{ 
              fontWeight: '500',          
              fontSize: '20px',
              color: 'black',
              maxWidth: '800px',          
              lineHeight: '1.6',          
              fontFamily: 'Verdana, sans-serif'
          }}>
          <span style={{
             color: '#228B22', 
             fontWeight: 'bold' 
          }}>Habitat: 
          </span> 
                se adapta a suelos bien drenados y profundos, soleados o parcialmente 
                sombreados, y se cultiva en huertos agrícolas o jardines.
          </span>
          </div>
          
          </div>
          <div style={{ 
                display: 'flex', 
                flexDirection: 'row-reverse',
                backgroundColor: 'lightgreen', 
                alignItems: 'center', 
                textAlign: 'center', 
                padding: '40px 20px',
                minHeight: '100vh' 
          }}>
              <img 
                src={imagenes.img2} 
                alt='Descripcion'
                style={{
                width: '500px', 
                height: 'auto' ,
                borderRadius: '20px',    
                marginBottom: '20px',   
                boxShadow: '0px 10px 20px rgba(0,0,0,0.2)' 
          }}
              />
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                flex:1,
                padding: '40px 20px',
          }}>
                <span style={{ 
                fontWeight: 'bold',
                fontSize: '45px',           //Tamaño del titulo we
                color: 'white',
                fontFamily: 'Arial, sans-serif',
                marginBottom: '10px' 
          }}>
                  Pino Ayacahuite — Pinus ayacahuite
              </span>
              <span style={{ 
                fontWeight: '500',          
                fontSize: '20px',
                color: 'black',
                maxWidth: '800px',          
                lineHeight: '1.6',          //Espacio entre renglones we
                textAlign: 'justify',
                fontFamily: 'Verdana, sans-serif'
          }}>
                  El ayacahuite es una especie de pino (conífera) del género Pinus, conocido 
                  en español por nombres como pino ayacahuite, pino cahuite, acalocahuite, 
                  ocote blanco, pinabete o pino real. Su nombre científico es Pinus ayacahuite 
                  y pertenece a la familia Pinaceae.
            </span>
           <span style={{ 
              fontWeight: '500',          
              fontSize: '20px',
              color: 'black',
              maxWidth: '800px',          
              lineHeight: '1.6',          
              fontFamily: 'Verdana, sans-serif'
          }}>
          <span style={{
             color: '#228B22', 
             fontWeight: 'bold' 
          }}>Habitat: 
          </span> 
                  El pino ayacahuite es nativo de México y Centroamérica, 
                  especialmente en regiones montañosas.
          </span>
              </div>
          </div>

          <div style={{ 
                display: 'flex', 
                flexDirection: 'row', 
                backgroundColor: 'lightgreen', 
                alignItems: 'center', 
                textAlign: 'center',
                padding: '40px 20px',      
                minHeight: '100vh'          
          }}>
          <img 
                src={imagenes.img3} 
                alt='Descripcion'
                style={{ 
                width: '500px', 
                height: 'auto', 
                borderRadius: '20px',    //Bordes cool we xd
                marginBottom: '20px',   
                boxShadow: '0px 10px 20px rgba(0,0,0,0.2)' //Para que se vea asthetic xd
          }}
          />
         
          <div style={{
                display: 'flex',
                flexDirection: 'column',
                flex:1,
                padding: '40px 20px',
          }}>
             <span style={{ 
                fontWeight: 'bold',
                fontSize: '45px',           //Tamaño del titulo we
                color: 'white',
                fontFamily: 'Arial, sans-serif',
                marginBottom: '10px'        //Separa el titulo we
          }}>
           Pera — Pyrus communis
          </span>
            <span style={{ 
                fontWeight: '500',          
                fontSize: '20px',
                color: 'black',
                maxWidth: '800px',          
                lineHeight: '1.6',          //Espacio entre renglones we
                textAlign:"justify",
                fontFamily: 'Verdana, sans-serif'
          }}>
                 La pera es el fruto comestible de un árbol llamado peral, cuya especie más cultivada
                 y común es Pyrus communis. Este árbol pertenece a la familia Rosaceae, 
                 la misma familia de otros frutales como la manzana o el membrillo. La pera es una fruta jugosa, 
                 carnosa y de sabor dulce o ligeramente ácido, con forma típica que estrecha hacia el pedúnculo
                 (“forma de pera”).
            </span>
             <span style={{ 
              fontWeight: '500',          
              fontSize: '20px',
              color: 'black',
              maxWidth: '800px',          
              lineHeight: '1.6',          
              fontFamily: 'Verdana, sans-serif'
          }}>
          <span style={{
             color: '#228B22', 
             fontWeight: 'bold' 
          }}>Importancia:
          </span> 
                Contiene alto contenido de agua y fibra, lo que facilita la digestión, y 
                aporta vitaminas y compuestos beneficiosos para la salud.
          </span>
          </div>
          </div>
          <div style={{ 
                display: 'flex', 
                flexDirection: 'row-reverse', 
                backgroundColor: 'lightgreen', 
                alignItems: 'center', 
                textAlign: 'center',
                padding: '40px 20px',      
                minHeight: '100vh'          
          }}>
          <img 
                src={imagenes.img4} 
                alt='Descripcion'
                style={{ 
                width: '500px', 
                height: 'auto', 
                borderRadius: '20px',    //Bordes cool we xd
                marginBottom: '20px',   
                boxShadow: '0px 10px 20px rgba(0,0,0,0.2)' //Para que se vea asthetic xd
          }}
          />
          <div style={{
                display: 'flex',
                flexDirection: 'column',
                flex:1,
                padding: '40px 20px',
          }}>
             <span style={{ 
                fontWeight: 'bold',
                fontSize: '45px',           //Tamaño del titulo we
                color: 'white',
                fontFamily: 'Arial, sans-serif',
                marginBottom: '10px'        //Separa el titulo we
          }}>
            Pino — Pinus spp 
          </span>
          <span style={{ 
                fontWeight: '500',          
                fontSize: '20px',
                color: 'black',
                maxWidth: '800px',          
                lineHeight: '1.6',          //Espacio entre renglones we
                fontFamily: 'Verdana, sans-serif'
          }}>
                  El pino (Pinus spp.) es un género de plantas vasculares que incluye árboles 
                  (generalmente) y rara vez arbustos, conocidos comúnmente como pinos, pertenecientes 
                  al grupo de las coníferas dentro de la familia Pinaceae
            </span>
             <span style={{ 
              fontWeight: '500',          
              fontSize: '20px',
              color: 'black',
              maxWidth: '800px',          
              lineHeight: '1.6',          
              fontFamily: 'Verdana, sans-serif'
          }}>
          <span style={{
             color: '#228B22', 
             fontWeight: 'bold' 
          }}>Habitat: 
          </span> 
                Los pinos son nativos casi exclusivamente del hemisferio norte,
                desde regiones cercanas al Ártico hasta zonas templadas y subtropicales 
                montañosas de América, Europa y Asia.
          </span>
          </div>
          </div>
          <div style={{ 
                display: 'flex', 
                flexDirection: 'row', 
                backgroundColor: 'lightgreen', 
                alignItems: 'center', 
                textAlign: 'center',
                padding: '40px 20px',      
                minHeight: '100vh'          
          }}>
          <img 
                src={imagenes.img5} 
                alt='Descripcion'
                style={{ 
                width: '500px', 
                height: 'auto', 
                borderRadius: '20px',    //Bordes cool we xd
                marginBottom: '20px',   
                boxShadow: '0px 10px 20px rgba(0,0,0,0.2)' //Para que se vea asthetic xd
          }}
          />
          <div style={{
                display: 'flex',
                flexDirection: 'column',
                flex:1,
                padding: '40px 20px',
          }}>
             <span style={{ 
                fontWeight: 'bold',
                fontSize: '45px',           //Tamaño del titulo we
                color: 'white',
                fontFamily: 'Arial, sans-serif',
                marginBottom: '10px'        //Separa el titulo we
          }}>
            Manzana — Malus domestica
          </span>
          <span style={{ 
                fontWeight: '500',          
                fontSize: '20px',
                color: 'black',
                maxWidth: '800px',          
                lineHeight: '1.6',          //Espacio entre renglones we
                textAlign:"justify",
                fontFamily: 'Verdana, sans-serif'
          }}>
                  La manzana es el fruto comestible del manzano, un árbol frutal caducifolio de la familia 
                  Rosaceae cultivado desde hace miles de años por el ser humano. Su nombre científico es Malus
                  domestica y es uno de los frutales más populares y ampliamente consumidos en todo el mundo.
            </span>
             <span style={{ 
              fontWeight: '500',          
              fontSize: '20px',
              color: 'black',
              maxWidth: '800px',          
              lineHeight: '1.6',          
              fontFamily: 'Verdana, sans-serif'
          }}>
          <span style={{
             color: '#228B22', 
             fontWeight: 'bold' 
          }}>Habitat: 
          </span> 
                En cultivo, se encuentra principalmente en huertos, jardines y áreas agrícolas;
                algunas poblaciones también se naturalizan en bordes de caminos y 
                terrenos alterados por el humano.
          </span>
          </div>
          </div>
          <div style={{ 
                display: 'flex', 
                flexDirection: 'row-reverse', 
                backgroundColor: 'lightgreen', 
                alignItems: 'center', 
                textAlign: 'center',
                padding: '40px 20px',      
                minHeight: '100vh'          
          }}>
          <img 
                src={imagenes.img6} 
                alt='Descripcion'
                style={{ 
                width: '500px', 
                height: 'auto', 
                borderRadius: '20px',    //Bordes cool we xd
                marginBottom: '20px',   
                boxShadow: '0px 10px 20px rgba(0,0,0,0.2)' //Para que se vea asthetic xd
          }}
          />
          <div style={{
                display: 'flex',
                flexDirection: 'column',
                flex:1,
                padding: '40px 20px',
          }}>
            <span style={{ 
                fontWeight: 'bold',
                fontSize: '45px',           //Tamaño del titulo we
                color: 'white',
                fontFamily: 'Arial, sans-serif',
                marginBottom: '10px'        //Separa el titulo we
          }}>
            Durazno — Prunus persica
          </span>
          <span style={{ 
                fontWeight: '500',          
                fontSize: '20px',
                color: 'black',
                maxWidth: '800px',          
                lineHeight: '1.6',          //Espacio entre renglones we
                textAlign:"justify",
                fontFamily: 'Verdana, sans-serif'
          }}>
                  El durazno (también llamado melocotón en algunos países) es el fruto comestible del árbol
                  Prunus persica,un árbol frutal caducifolio de la familia Rosaceae. 
                  La fruta es de tipo drupa (fruto con un solo hueso o semilla grande en el centro), 
                  con pulpa jugosa y sabor dulce, y su piel suele tener una textura suavemente
                  aterciopelada.
            </span>
             <span style={{ 
              fontWeight: '500',          
              fontSize: '20px',
              color: 'black',
              maxWidth: '800px',          
              lineHeight: '1.6',          
              fontFamily: 'Verdana, sans-serif'
          }}>
          <span style={{
             color: '#228B22', 
             fontWeight: 'bold' 
          }}>Habitat: 
          </span> 
                Prefiere suelos bien drenados (arenosos o limosos)
                y pleno sol para un buen desarrollo y producción de frutos.
          </span>
          </div>
          </div>
          <div style={{ 
                display: 'flex', 
                flexDirection: 'row', 
                backgroundColor: 'lightgreen', 
                alignItems: 'center', 
                textAlign: 'center',
                padding: '40px 20px',      
                minHeight: '100vh'          
          }}>
          <img 
                src={imagenes.img7} 
                alt='Descripcion'
                style={{ 
                width: '500px', 
                height: 'auto', 
                borderRadius: '20px',    //Bordes cool we xd
                marginBottom: '20px',   
                boxShadow: '0px 10px 20px rgba(0,0,0,0.2)' //Para que se vea asthetic xd
          }}
          />
         <div>
           <span style={{ 
                fontWeight: 'bold',
                fontSize: '45px',           //Tamaño del titulo we
                color: 'white',
                fontFamily: 'Arial, sans-serif',
                marginBottom: '10px'        //Separa el titulo we
          }}>
            Chabacano — Prunus armeniaca 
          </span>
          <span style={{ 
                fontWeight: '500',          
                fontSize: '20px',
                color: 'black',
                maxWidth: '800px',          
                lineHeight: '1.6',          //Espacio entre renglones we
                textAlign:"justify",
                fontFamily: 'Verdana, sans-serif'
          }}>
                El chabacano es una fruta comestible del árbol Prunus armeniaca, también conocida como albaricoque
                o damasco en otras regiones del mundo. Pertenece a la familia Rosaceae y es una drupa 
                (fruto con un único hueso o semilla dura en el centro) parecido a un durazno, 
                pero más pequeño y de sabor dulce.
            </span>
             <span style={{ 
              fontWeight: '500',          
              fontSize: '20px',
              color: 'black',
              maxWidth: '800px',          
              lineHeight: '1.6',          
              fontFamily: 'Verdana, sans-serif'
          }}>
          <span style={{
             color: '#228B22', 
             fontWeight: 'bold' 
          }}>Importancia: 
          </span> 
                Se consume fresco, en mermeladas, conservas, jugos o deshidratado;
                su sabor dulce lo hace popular en diversas preparaciones culinarias.
          </span>
         </div>
          </div>
          <div style={{ 
                display: 'flex', 
                justifyContent: 'center', 
                width: '100%', 
                padding: '20px 0' 
          }}>
          <span style={{ 
                color: '#228B22',      
                fontWeight: 'bold', 
                textAlign: 'center',
                fontSize: '16px',
                fontFamily: 'Arial, sans-serif'
          }}>
            Creado por Alexander Milton Franco Melchor
          </span>
          </div>
                  

      

       </div>
    </div>
    </div>
  );
};

export default App;
