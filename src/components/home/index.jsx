import { useState } from 'react';
import { HomeWrapper } from "./style";
import Item from "../item";
import NoItems from '../add';
import { Link } from 'react-router-dom';

function Home() {
     var localTodoItems = JSON.parse(localStorage.getItem("to-do-items"));
     const [data, setData] = useState(localTodoItems || []);

     function removeItem(tdTitle) {
          const newItems = data.filter((el) => el.todoTitle !== tdTitle);
          localTodoItems = JSON.stringify(newItems);
          localStorage.setItem("to-do-items", localTodoItems);
          setData(newItems);
     };

     const MappingItems = data.length === 0 ? <NoItems /> : data.map((e, idx) => (
          <li key={idx}>
               <button id="remove-btn" type='button' onClick={() => removeItem(e.todoTitle)}>x</button>
               <Item
                    title={e.todoTitle}
                    text={e.todoText}
                    bgcolor={getLightColor(idx)}
               />
          </li>
     ));

     function getLightColor(num) {
          if (num % 3 === 0) {
               return '#ff9bac'
          } else if (num % 2 === 0) {
               return '#81cecb'
          } else {
               return '#8bfaac'
          }
     }

     return (
          <HomeWrapper>
               <div id="title">
                    <h1>MY TO DO LIST</h1>
                    <Link to="/add">+</Link>
               </div>
               <ul>
                    {MappingItems}
               </ul>
          </HomeWrapper>
     );
}

export default Home;
