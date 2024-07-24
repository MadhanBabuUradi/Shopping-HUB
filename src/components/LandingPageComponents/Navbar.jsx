import Input from "../../UI/Input";
import { Link,useNavigate } from "react-router-dom";
import "./Navbar.css";
import 'primeicons/primeicons.css';
import Tooltip from '@mui/material/Tooltip';
import { useDispatch } from "react-redux";
import { addCategory } from "../../redux/categoryFilter";
import SearchResults from "../../UI/SearchResultsBox/SearchResults";
import { useState } from "react";


const Navbar = () => {

    const [searchValue, setSearchValue] = useState('');

    const navigate = useNavigate();
    const dealsSection = () => {
        navigate("/");
        window.scrollTo({
            top: window.innerHeight*3,
            behavior: 'smooth'
          });
    }
    const forYouSection = () => {
        navigate("/");
        window.scrollTo({
            top: window.innerHeight*1.3,
            behavior: 'smooth'
          });
    }

    const dispatch = useDispatch();

    const clickHandler = () => {
        dispatch(addCategory("Electronics"))
    }

  return (
    <div className="wrapper" >
        <div className="navbar">
        <Link to="/"><div className="shop-it">
                <img className="shop-it-img" src="/assets/pngwing.com.png" ></img>
                <span className="shop-it-text">
                    Shopping HUB
                </span>
            </div>
        </Link>
            <div className="tabs" onClick={clickHandler}>
                <Link to = "/product-listing"><div className="categories">
                    <Tooltip title="click to see products" >Catagories</Tooltip>
                </div>
                </Link>
                <div className="different-section" >
                    <div style={{paddingRight:"1rem"}} onClick={dealsSection}>Deals</div>
                    <div style={{paddingRight:"1rem"}} onClick={forYouSection}>Whats New</div>
                    <div style={{paddingRight:"1rem"}}>Delivery</div>
                </div>
            </div>
            <div className="search-in-nav" >
                <Input className="search-bar" name={"nav"} setSearchValue={setSearchValue} />
                <SearchResults name={"nav"} inputValue={searchValue} />
            </div>
            <div className="acc-and-cart">
               <Link to="/account"><div className="account" style={{paddingRight:".7rem"}}>
                    <i className="pi pi-user" style={{paddingRight:".1rem"}}></i>
                    <div>Account</div>
                </div>
                </Link> 
                <Link to="/cart"><div className="cart" >
               <i className="pi pi-shopping-cart" style={{paddingRight:".1rem"}}></i>
                    <div>Cart</div>
                </div>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Navbar