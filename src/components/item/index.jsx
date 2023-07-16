import { ItemWrapper } from "./style";

const Item = (props) => {



     return (
          <ItemWrapper bgcolor={props.bgcolor}>
               <div>
                    <span></span>
                    <h1>{props.title}</h1>
               </div>
               <p>{props.text}</p>

               <div className="holes hole-t"></div>
               <div className="holes hole-b"></div>
          </ItemWrapper>
     )
}


export default Item;