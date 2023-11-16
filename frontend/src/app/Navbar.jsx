import React from 'react'
import { Link } from 'react-router-dom'


export const Navbar = () => {
    return (
        <nav>
            <section>
                <h1>Recipes</h1>
                <div>
                    <div>
                        <Link to="/">Recipes</Link>
                    </div>
                </div>
            </section>
        </nav>
    )
}