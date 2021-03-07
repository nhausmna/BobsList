import React, {useState} from 'react';
import {
    Nav,
    NavItem,
    NavLink,
    Navbar,
    NavbarBrand,
    Collapse,
    Dropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    Form,
    Input
} from 'reactstrap';

/*--------------------------------------------------------------------------------*/
/* Import images which are need for the HEADER                                    */
/*--------------------------------------------------------------------------------*/
import logodarkicon from '../../assets/images/logo-icon.png';
import logolighticon from '../../assets/images/logo-light-icon.png';
import logodarktext from '../../assets/images/logo-text.png';
import logolighttext from '../../assets/images/logo-light-text.png';
import profilephoto from '../../assets/images/users/1.jpg';

const Header = () => {

    const showMobilemenu = () => {
        document.getElementById('main-wrapper').classList.toggle('show-sidebar');
    }

    /*--------------------------------------------------------------------------------*/
    /*To open Search Bar                                                              */
    /*--------------------------------------------------------------------------------*/
    const toggleMenu = () => {
        document.getElementById('search').classList.toggle('show-search');
    }

    const [loginText, setLoginText] = useState("Login / Register");
    const changeLoginText = () => {
        if(sessionStorage.getItem('username')){
            setLoginText(sessionStorage.getItem('username'))
        } 
        else{
            setLoginText("Login / Register")
        }                             
    };

    const [dropdownOpen, setDropdownOpen] = useState(false);
    

    const toggle = () => {
        setDropdownOpen(prevState => !prevState)
        changeLoginText()};

    const resetStorage = () => {
        sessionStorage.clear()
        console.log('logged out...');
        changeLoginText();
    }

    const [listItemLink, setListItemLink] = useState("/#/login")
    const isLoggedIn_ListItem = () => {
        if (sessionStorage.getItem('username')){
            setListItemLink('/#/new_listing')
        }
    }


    return (
        <header className="topbar navbarbg" data-navbarbg="skin4">
            <Navbar className="top-navbar" dark expand="md">
                <div className="navbar-header" id="logobg" data-logobg="skin4">
                    {/*--------------------------------------------------------------------------------*/}
                    {/* Logos Or Icon will be goes here for Light Layout && Dark Layout                */}
                    {/*--------------------------------------------------------------------------------*/}
                    <NavbarBrand href="/">
                        <b className="logo-icon">
                            <img src={logodarkicon} alt="homepage" className="dark-logo" />
                            <img
                                src={logolighticon}
                                alt="homepage"
                                className="light-logo"
                            />
                        </b>
                        <span className="logo-text">
                            <img src={logodarktext} alt="homepage" className="dark-logo" />
                            <img
                                src={logolighttext}
                                className="light-logo"
                                alt="homepage"
                            />
                        </span>
                    </NavbarBrand>
                    {/*--------------------------------------------------------------------------------*/}
                    {/* Mobile View Toggler  [visible only after 768px screen]                         */}
                    {/*--------------------------------------------------------------------------------*/}
                    <button
                        className="btn-link nav-toggler d-block d-md-none text-white"
                        onClick={() => showMobilemenu()}
                    >
                        <i className="ti-menu ti-close" />
                    </button>
                </div>
                <Collapse
                    className="navbarbg"
                    navbar
                    data-navbarbg="skin4"
                >
                    <Nav className="float-left" navbar>
                        {/*--------------------------------------------------------------------------------*/}
                        {/* Start Search-box toggle                                                        */}
                        {/*--------------------------------------------------------------------------------*/}
                        <NavItem className="hidden-sm-down search-box">
                            <NavLink
                                href="#"
                                className="hidden-sm-down"
                                onClick={toggleMenu.bind(null)}
                            >
                                <i className="ti-search" />
                            </NavLink>
                            <Form className="app-search" id="search">
                                <Input type="text" placeholder="Search & enter" />
                                <button className="btn-link srh-btn" onClick={toggleMenu.bind(null)}>
                                    <i className="ti-close" />
                                </button>
                            </Form>
                        </NavItem>
                        {/*--------------------------------------------------------------------------------*/}
                        {/* End Search-box toggle                                                          */}
                        {/*--------------------------------------------------------------------------------*/}
                    </Nav>
                    <Nav className="ml-auto float-right" navbar>
                    <NavItem>
                            <a
                                onClick={isLoggedIn_ListItem}
                                href={listItemLink}
                                className="btn btn-warning mr-2"
                                style={{ marginTop: '20px' }}
                            >
                                List an item
                </a>
                        </NavItem>
                        <NavItem>
                            <a
                                href="https://github.com/nhausmna/BobsList/tree/frontend"
                                className="btn btn-danger mr-2"
                                style={{ marginTop: '20px' }}
                            >
                                View the Source
                </a>
                        </NavItem>
                        {/*--------------------------------------------------------------------------------*/}
                        {/* Start Profile Dropdown                                                         */}
                        {/*--------------------------------------------------------------------------------*/}
                        <Dropdown nav inNavbar isOpen={dropdownOpen} toggle={toggle}> 
                            <DropdownToggle nav caret className="pro-pic">
                                <img
                                    src={profilephoto}
                                    alt="user"
                                    className="rounded-circle"
                                    width="31"
                                />
                            </DropdownToggle>
                            <DropdownMenu right className="user-dd">
                                <DropdownItem className="border-bottom"
                                    href='/#/login'>
                                    <i className="ti-user mr-1 ml-1" /> {loginText}
                  </DropdownItem>
                                <DropdownItem className="border-bottom"
                                    href='/#/inbox'>
                                    <i className="ti-email mr-1 ml-1" /> Inbox
                  </DropdownItem>      
                                <DropdownItem 
                                    onClick={ resetStorage } >
                                    <i className="fa fa-power-off mr-1 ml-1" 

                                          /> Logout
                                    
                  </DropdownItem>
                            </DropdownMenu>
                        </Dropdown>
                        {/*--------------------------------------------------------------------------------*/}
                        {/* End Profile Dropdown                                                           */}
                        {/*--------------------------------------------------------------------------------*/}
                    </Nav>
                </Collapse>
            </Navbar>
        </header>
    );
}
export default Header;
