import { Link } from 'react-router-dom';
import { NoItemsWrapper } from './style.jsx';

function NoItems() {
     return (
          <Link to="/add">
               <NoItemsWrapper href="">
                    + Add new item
               </NoItemsWrapper>
          </Link>
     )
}

export default NoItems;