import { Link } from 'react-router-dom';

export default function Header() {

    return (

                <section className='Header'>
                        <h1>node.js || Databases Training-App</h1>
                        <nav className='navlist'>
                                <Link to="/" className='nav-link'>Main</Link> |{" "}
                                <Link to="/mongoDB" className='nav-link'>MongoDB</Link>
                        </nav>
                </section>

    );

};