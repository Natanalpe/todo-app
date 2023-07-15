import styled from 'styled-components';

export const NoItemsWrapper = styled.a`
     
     outline: none;
     color: #fff;
     font-size: 20px;
     padding: 20px;
     border: 2px dashed var(--light-soft-green);
     border-radius: 15px;
     background-color: var(--light-green);
     box-shadow: 0 0 0 4px var(--light-green), 2px 2px 4px 2px rgba(0, 0, 0, 0.5);
     transition: .1s ease-in-out, .4s color;
     place-self: center;
     position: absolute;
     top: calc(50% - (68px / 2));
     left: calc(50% - (167px / 2));
     text-decoration: none;

     &:active {
          transform: translateX(0.1em) translateY(0.1em);
     }
`;