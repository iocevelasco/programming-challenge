import { createGlobalStyle } from "styled-components";
export const GlobalStyle = createGlobalStyle`
:root {
    --blancotransp: rgba(250,250,250,0.2);
    --blancotransp2: rgba(250,250,250,0.6);
    --azultransp: rgba(0,0,110,0.2);
    --fondocarta: rgba(250,250,250,0.9);
    --azul: rgb(0, 48, 73);
    --rojo: rgb(214, 40, 40);
    --naranja: rgb(247, 127, 0);
    --amarillo: rgb(252, 191, 73);
    --blanco: rgb(234, 226, 183);
    --naranjatransp:  rgba(247,127,0, 0.4);
    --rojofuerte: #C21010;
    --negroheader: #000000;
    --fondobody: #FDF6EC;
    --naranja2: #F0A500;
    --grisbody: #EDF1D6;
    --naranjasuyai: #f86a00;

   --fuente1: 'Chakra Petch', sans-serif;
   --fuente2: 'Play', sans-serif;
   --fuente3: 'Secular One', sans-serif;
}
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: var(--fuente1);

}
body {
    width:100%;
    background-color: var(--negroheader);
    color: white;
}
a {
    text-decoration: none;
    color: white;
    
}
`;
