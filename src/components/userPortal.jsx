import { Routes,Route } from "react-router-dom";
import BookList from "./bookList";
import ReadBook from "./raedBook";
import UserDashBoard from "./userDashboard";
import UserNavbar from "./userNavbar";

const UserPortal = () => {
    return ( 
        <div className="userPortal">
            <UserNavbar/>
            <Routes>
                <Route path='/' element={<UserDashBoard/>} />
                <Route path='/book-list' element={<BookList/>} />
                <Route path="/book-list/:id" element={<ReadBook/>} />

            </Routes>
        </div>
     );
}
 
export default UserPortal;