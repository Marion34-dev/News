const Header = () => {

    const date = new Date().toLocaleDateString();

    return (
        <header className="headerSection">
            <img src="https://images.pexels.com/photos/936137/pexels-photo-936137.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="logo" alt="logo" />
            <h1 className="header">Get the latest news</h1>
            <h1 className="date">{date}</h1>
            <ul className="nav" >
                <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#">Home</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Career</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Contact</a>
                </li>
            </ul>
        </header>
    );
};

export default Header;