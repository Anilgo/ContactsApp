import React, { useState } from 'react';
import './SidebarMenu.css';

const SidebarMenu = () => {
    
    return (
        <div className = "sidebar">
            
                <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#services">Services</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
           
        </div>
    );
}

export default SidebarMenu;
