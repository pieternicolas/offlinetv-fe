import React from 'react';
import { Link, NavLink } from 'react-router-dom';


const LoggedOutHeader = (props) => {
	return (
		<nav className="navbar navbar-expand-md navbar-dark bg-dark">
			<Link className="navbar-brand" to="/">Navbar</Link>
			<button className="navbar-toggler" data-toggle="collapse" data-target="#publicNavbar">
				<i className="fas fa-bars"></i>
			</button>
			<div className="collapse navbar-collapse" id="publicNavbar">
				<ul className="navbar-nav mr-auto">
					<li className="nav-item">
						<NavLink className="nav-link" to="/disguisedtoasths">Disguised Toast</NavLink>
					</li>
				</ul>

				<form className="form-inline my-0 my-md-0">
					<input className="form-control mr-sm-2" type="text" placeholder="Search"/>
					<button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
				</form>
			</div>
		</nav>
	);
};


export default LoggedOutHeader;