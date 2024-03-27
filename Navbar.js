import React from "react";
import styles from "../style/Navbar.module.css"


const Navbar = () => {
    return (
        <ul className={styles.menu}>
              <li><a href="#">Home</a></li>
        <li>
            <a href="#">Menu items</a>
            <ul className={styles.sub_menu}>
                <li><a href="#">Submenu item 1</a></li>
                <li><a href="#">Submenu item 2</a></li>
                <li><a href="#">Submenu item 3</a></li>
                <li><a href="#">Submenu item 4</a></li>
            </ul>
        </li>
        <li><a href="#">Products</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Contact</a></li>
        <li>
            <a href="#">Menu items</a>
            <ul className={styles.sub_menu}>
                <li><a href="#">Submenu item 1</a></li>
                <li><a href="#">Submenu item 2</a></li>
                <li><a href="#">Submenu item 3</a></li>
            </ul>			
        </li>

        </ul>
    )
}

export default Navbar