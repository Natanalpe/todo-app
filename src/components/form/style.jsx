import styled from 'styled-components';

const screenHeight = window.screen.height;

export const FormWrapper = styled.div`
     width: 375px;
     height: 450px;
     background-color: #fff;
     border: 2px solid #000;
     position: absolute;
     left: calc(50% - 375px / 2);
     top: calc(${screenHeight}px / 8);

     form {
          width: 100%;
          height: 100%;
          background: #fff;
          padding-top: 10px;
          display: grid;
          grid-template-columns: 50% 50%;
          grid-template-rows: 25% 1fr 20%;
          grid-template-areas: 'title  title'
                               'todo   todo'
                               'calcel submit';

          #title-form {
               grid-area: title;
               align-self: center;
               gap: 10px;

               input {
                    border-top-color: transparent;
                    border-right-color: transparent;
                    border-left-color: transparent;
                    outline: none;

                    @media(max-width: 414px){
                         background-color: transparent;
                    }
               }
          }
          
          #todo-form {
               grid-area: todo;
               align-self: start;
               height: 90%;
               gap: 10px;

               textarea {
                    resize: none;
                    height: 75%;
                    outline: none;

                    @media(max-width: 414px){
                         background-color: transparent;
                    }
               }
          }
          
          a {
               text-decoration: none;
               
               h3 {
                    margin-top: 5px;
               }
          }
          .main-btn {
               width: 85%;
               height: 40%;
               justify-self: center;
               background-color: transparent;
               border: none;
               position: relative;
               z-index: 1;
               transition: .5s;
               
               .btn {
                    z-index: -2;
                    position: absolute;
                    top: -15%;
                    left: 4%;
                    width: 92%;
                    height: 100%;
               }
               

               h3 {
                    color: var(--light-green);
                    font-weight: 400;
                    text-align: center;
               }

               .cancel {
                    background-color: var(--light-soft-pink);
               }

               .submit {
                    background-color: var(--light-soft-green);
               }

               .border {
                    position: absolute;
                    top: 0;
                    left: 0;
                    z-index: -1;
                    width: 100%;
                    height: 100%;
                    border: 2px solid var(--light-green);
               }

               &:hover{
                    transform: scale(1.05);

               .btn {
                    z-index: -2;
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
               }
               }
          }

          @media(max-width: 414px){
               background-color: transparent;
          }
     }
     
     @media(max-width: 414px){
          border: none;
          background: transparent;
     }

     .lab {
          position: relative;
     }

     .length {
          position: absolute;
          right: 5px;
          font-size: 14px;
     }

     .title-length {
          bottom: 5px;
     }

     .text-length {
          bottom: 30px;
     }
`;