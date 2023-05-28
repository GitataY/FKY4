import './NavbarStyles.css';

function NavBar() {
    return (
        <>
        <div class="hero">
        <nav>
            <h2 class="logo">FeedKenya</h2>
            <ul>
                <li><a href="index.html">Home</a></li>
                <li><a href="aboutus.html">About Us</a></li>
                <li><a href="services.html">Donate Food</a></li>
                <li><a href="contact.html">FoodBanks</a></li>
            </ul>
            <button type="button">Login</button>
        </nav>
        </div>
        </>
    )
}

export default NavBar;