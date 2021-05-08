import React from 'react';
import "./navbar.css";

// COMPONENT adalah sebuah function / class pada javascript yang akan mer Return code JSX

export default function Navbar() {
    return (
        <nav className="navbar">
            <h1 className="brand">JVALLEY</h1>
            <div className="search_bar">
                <input type="search" className="search_input" placeholder="mau cari apa..?" />
                <button>search</button>
            </div>
        </nav>
    )
}
