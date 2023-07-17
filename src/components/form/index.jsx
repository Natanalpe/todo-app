import { useState, useEffect } from 'react';
import { FormWrapper } from './style.jsx';
import { Link } from 'react-router-dom';

function AddNewItem() {

     var titleLen = 0, textLen = 0;
     const [title, setTitle] = useState();
     const [text, setText] = useState();
     const [titleLength, setTitleLength] = useState(0);
     const [textLength, setTextLength] = useState(0);

     useEffect(() => {
          titleLen = String(title).length;
          setTitleLength(titleLen);
     }, [title]);

     useEffect(() => {
          textLen = String(text).length;
          setTextLength(textLen);
     }, [text]);

     const AddingTask = e => {
          e.preventDefault();

          let updatedItems;
          const localItems = localStorage.getItem("to-do-items");

          if (localItems) {
               const parsedItems = JSON.parse(localItems);
               parsedItems.push({
                    todoTitle: title,
                    todoText: text
               })

               updatedItems = JSON.stringify(parsedItems);
          } else {
               updatedItems = JSON.stringify([{
                    todoTitle: title,
                    todoText: text
               }])
          }

          localStorage.setItem("to-do-items", updatedItems);
          //window.location.href = "https://natanalpe.github.io/todo-app#/";
          window.history.back();
     }

     return (
          <FormWrapper>
               <form onSubmit={AddingTask}>
                    <label className="lab p-f p-a" id='title-form'>
                         Title:
                         <input
                              onChange={(e) =>
                                   setTitle(e.target.value)
                              }
                              className="bd"
                              type="text"
                              maxLength="10"
                              autoFocus
                              required />
                         <span className="length title-length">{titleLength}/10</span>
                    </label>
                    <label className="lab p-f p-a" id='todo-form'>
                         To do:
                         <textarea
                              onChange={(e) => setText(e.target.value)}
                              className="bd"
                              required
                              maxLength="130"
                         />
                         <span className="length text-length">{textLength}/130</span>
                    </label>
                    <Link to="/#" className="main-btn" type="button">
                         <span className="border"></span>
                         <h3>cancel</h3>
                         <span className="cancel btn"></span>
                    </Link>
                    <button className='main-btn' type="submit">
                         <h3>Confirm</h3>
                         <span className="submit btn"></span>
                         <span className="border"></span>
                    </button>
               </form>
          </FormWrapper>
     )
}

export default AddNewItem;