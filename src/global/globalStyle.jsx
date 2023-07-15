import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
     :root {
          --light-soft-pink: #FFAEBC;
          --light-soft-blue: #A0E7E5;
          --light-soft-green: #B4F8C8;
          --light-green: #007D7A;
          
          --night-red: #EE0029;
          --night-blue: #00EDE6;
          --night-green: #00E844;
          --night-orange: #EB9200;
     }

     * {
          font-family: 'Roboto', sans-serif;
          margin: 0;
          box-sizing: border-box;
          transition: .2s;
     }
     
     button, a{
          cursor: pointer;
     }

     .p-f {
          display: flex;
          flex-direction: column;
     }

     .p-a {
          width: 75%;
          justify-self: center;
     }

     .bd {
          border: 2px solid var(--light-green);
     }

     label {
          color: var(--light-green);
     }
`;