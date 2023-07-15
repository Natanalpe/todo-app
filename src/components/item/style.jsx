import styled from 'styled-components';

export const ItemWrapper = styled.div`
     
     padding: 0 15px 10px 35px;
     width: 100%;
     height: 205px;
     position: relative;
     background-image: repeating-linear-gradient(white 0px, white 24px, steelblue 25px);
     box-shadow: -2px 2px 3px 0px #888;

     &::before {
          content: '';
          position: absolute;
          top: 0;
          left: 30px;
          height: 100%;
          width: 2px;
          background: rgba(255,0,0,0.4);
     }

     &::after {
          content: '';
          position: absolute;
          top: 0;
          right: 0;
          border-style: solid;
          border-width: 25px 0 0 25px;
          border-color: #eee #fff;
          transition: all ease .4s;
          box-shadow: -2px 2px 3px 0px #888;
     }

     
     div {
          position: absolute;
          top: -25px;
          background-color: ${(props) => props.bgcolor};
          width: 50%;
          height: 35px;
          padding: 10px 8px 0 15px;
          position: relative;

          span {
               position: absolute;
               border: 2px solid var(--light-green);
               width: 106%;
               left: -3%;
               top: 25%;
               height: 90%;
          }

          h1 {
               font-size: 18px;
               text-align: start;
               font-weight: 600;
               color: #fff;
               text-transform: lowercase;

               @media(max-width: 730px){
                    font-size: 16px;
                    font-weight: 500;
               }
          }
          @media(max-width: 730px){
               width: 85%;
          }

     }

     p {
          position: absolute;
          top: 25px;
          font-size: 20px;
          font-style: italic;
          font-family: 'Indie Flower', cursive;
          color: #353535;
          line-break: anywhere;
          padding-right: 5px;

          @media(max-width: 530px){
               font-size: 16px;
          }
     }

     .holes {
          position: absolute;
          height: 25px;
          width: 25px;
          background: #eee;
          border-radius: 50%;
          box-shadow: inset 2px 2px 3px 0px #888;
          left: 3px;
     }

     .hole-t {
          top: 20%;
     }

     .hole-b {
          top: 75%;
     }
`;