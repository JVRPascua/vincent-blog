const Navbar = () => {
    return ( 
        <nav className="navbar">
            <h1>Vincent Blog</h1>
            <div className="links">
                <a href="/">Home</a>
                <a href="/create" style={{
                    color: "white",
                    backgroundColor: '#7393B3',
                    borderRadius: '8px'
                }}>New Blog</a>
            </div>
        </nav>
     );
}
 
export default Navbar;