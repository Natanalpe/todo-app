import { styled } from "styled-components";
import { backgroundLight } from '../../assets/exports';

export const HomeWrapper = styled.main`

     width: 100vw;
     min-height: 100vh;
     display: flex;
     padding: 30px 0;
     align-items: center;
     flex-direction: column;

     #title {
          width: 300px;
          height: 60px;
          display: flex;
          justify-content: space-around;
          align-items: center;

          h1 {
               color: var(--light-green);
               font-weight: 400;
               width: 300px;
               
          }

          a { 
               font-size: 20px;
               outline: none;
               padding: 6px 0;
               color: #fff;
               width: 50px;
               height: 40px;
               border: 2px dashed var(--light-soft-green);
               border-radius: 10px;
               text-align: center;
               background-color: var(--light-green);
               box-shadow: 0 0 0 4px var(--light-green), 2px 2px 4px 2px rgba(0, 0, 0, 0.5);
               transition: .1s ease-in-out, .4s color;
               text-decoration: none;

               &:active {
                    transform: translateX(0.1em) translateY(0.1em);
               }
          }
     }

     ul {
          width: 90%;
          margin-top: 75px;
          display: grid;
          grid-template-columns: 50% 50%;
          row-gap: 45px;
          justify-content: center;
          
          li {
               width: 85%;
               list-style: none;
               position: relative;
               transition: all ease .6s;
               
               #remove-btn {
                    position: absolute;
                    z-index: 5;
                    top: 3px;
                    right: 3px;
                    background: transparent;
                    border: none;
                    text-transform: uppercase;
                    transition: .1s;

                    &:hover {
                         background-color: rgba(0, 0, 0, .1);
                         transform: scale(1.1);
                    }
               }
          }

          @media(max-width: 1000px) {
               grid-template-columns: 80%;
          }

          @media(max-width: 800px){
               grid-template-columns: 95%;
          }

          @media(max-width: 550px){
               grid-template-columns: 100%;
          }
     }
`;