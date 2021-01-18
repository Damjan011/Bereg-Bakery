import React, { useState } from "react";
import Home from "./containers/Home";
import About from "./containers/About";
import Contact from "./containers/Contact";
import Gallery from "./containers/Gallery";
import ItemsForSale from "./containers/Products";
import Scroll from "./components/scroll";
import {
  Switch,
  Route,
  NavLink,
  Link,
  withRouter
} from "react-router-dom";
import TopBar from "./components/TopBar";
import Footer from "./components/footer";

const App = (props) => {
  const [responsiveMenu, setResponsiveMenu] = useState(false);
  const [productsDropdown, setProductsDropdown] = useState(false);
  const toggleMenu = () => setResponsiveMenu(!responsiveMenu);
  const closeMenu = () => setResponsiveMenu(false);
  const [responsiveProducts, setResponsiveProducts] = useState(false);
  return (
    <div className="view">
      <TopBar />
      <div className="menu-wrapper">
        <div className="menu-logo" />
        <div className="main-menu">
          <Scroll showBelow={250} />
          <NavLink activeClassName="active" exact to="/">Почетна</NavLink>
          <NavLink activeClassName="active" to="/aboutUs">О нама</NavLink>
          <Link
            onMouseEnter={() => setProductsDropdown(true)}
            onMouseLeave={() => setProductsDropdown(false)}
            className={props.location.pathname.includes('/products') ? 'active' : ''}
          >
            Производи
              <div className={`products-dropdown ${productsDropdown ? 'dropdown-visible' : ''}`}>
              <Link to="/products/hleb">
                Хљеб
              </Link>
              <Link to="/products/peciva">
                Пецива
              </Link>
              <Link to="/products/pite">
                Пите
              </Link>
              <Link to="/products/kolaci">
                Колачи (шните)
              </Link>
              <Link to="/products/sitni-kolaci">
                Ситни колачи паковани
              </Link>
              <Link to="/products/zaledjena-peciva">
                Залеђена пецива
              </Link>
              <Link to="/products/tjestenine">
                Тјестенине
              </Link>
              <Link to="/products/ostalo">
                Остало
              </Link>
            </div>
          </Link>
          <NavLink activeClassName="active" to="/gallery">Галерија</NavLink>
          <NavLink activeClassName="active" to="/contactUs">Контакт</NavLink>
        </div>
      </div>
      <div className="responsive-menu">
        <div id="menuToggle">
          <input
            onClick={toggleMenu}
            type="checkbox"
            className={responsiveMenu ? "toggle-menu" : ""}
          />
          <span></span>
          <span></span>
          <span></span>
          <ul id="menu">
            <NavLink activeClassName="active" exact to="/">
              <li>Почетна</li>
            </NavLink>
            <NavLink activeClassName="active" to="/aboutUs">
              <li>О нама</li>
            </NavLink>
            <div
              className={props.location.pathname.includes('/products') ? 'activeResponive' : ''}
              onClick={() => setResponsiveProducts(!responsiveProducts)}>
              <li>Производи</li>
            </div>
            {
              responsiveProducts && (
                <>
                <Link
                  to="/products/hleb"
                  onClick={() => {
                    setResponsiveMenu(false)
                    setResponsiveProducts(false)
                  }}
                  
                >
                  <li style={{ paddingLeft: '65px' }}>
                    Хљеб
                  </li>
                </Link>
                <Link
                  to="/products/peciva"
                  onClick={() => {
                    setResponsiveMenu(false)
                    setResponsiveProducts(false)
                  }}
                >
                  <li style={{ paddingLeft: '65px' }}>
                    Пецива
                  </li>
                </Link>
                <Link
                  to="/products/pite"
                  onClick={() => {
                    setResponsiveMenu(false)
                    setResponsiveProducts(false)
                  }}
                >
                  <li style={{ paddingLeft: '65px' }}>
                    Пите
                  </li>
                </Link>
                <Link
                  to="/products/kolaci"
                  onClick={() => {
                    setResponsiveMenu(false)
                    setResponsiveProducts(false)
                  }}
                >
                  <li style={{ paddingLeft: '65px' }}>
                    Колачи (шните)
                  </li>
                </Link>
                <Link
                  to="/products/sitni-kolaci"
                  onClick={() => {
                    setResponsiveMenu(false)
                    setResponsiveProducts(false)
                  }}
                >
                  <li style={{ paddingLeft: '65px' }}>
                    Ситни колачи паковани
                  </li>
                </Link>
                <Link
                  to="/products/zaledjena-peciva"
                  onClick={() => {
                    setResponsiveMenu(false)
                    setResponsiveProducts(false)
                  }}
                >
                  <li style={{ paddingLeft: '65px' }}>
                    Залеђена пецива
                  </li>
                </Link>
                <Link
                  to="/products/tjestenine"
                  onClick={() => {
                    setResponsiveMenu(false)
                    setResponsiveProducts(false)
                  }}
                >
                  <li style={{ paddingLeft: '65px' }}>
                    Тјестенине
                  </li>
                </Link>
                <Link
                  to="/products/ostalo"
                  onClick={() => {
                    setResponsiveMenu(false)
                    setResponsiveProducts(false)
                  }}
                >
                  <li style={{ paddingLeft: '65px' }}>
                    Остало
                  </li>
                </Link>
                </>
              )
            }
            <NavLink to="/gallery">
              <li>Галерија</li>
            </NavLink>
            <NavLink to="/contactUs">
              <li>Контакт</li>
            </NavLink>
          </ul>
        </div>
        <div className='menu-logo'/>
        <div className='empty' />
      </div>
      <Switch>
        <Route exact path="/">
          <Home closeResponsiveMenu={closeMenu} />
        </Route>
        <Route path="/products/:category">
          <ItemsForSale closeResponsiveMenu={closeMenu} />
        </Route>
        <Route path="/gallery">
          <Gallery closeResponsiveMenu={closeMenu} />
        </Route>
        <Route path="/aboutUs">
          <About closeResponsiveMenu={closeMenu} />
        </Route>
        <Route path="/contactUs">
          <Contact closeResponsiveMenu={closeMenu} />
        </Route>
      </Switch>
      <Footer 
        address="Иве Андрића 2 A, Соколац"
        email="pekarabereg@business.rs"
        phone="+387/65-573-727"
      />
    </div>
  );
}

export default withRouter(App);
