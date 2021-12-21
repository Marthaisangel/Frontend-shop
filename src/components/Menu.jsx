import React from 'react';
import '../styles/Menu.scss';

const Menu = () => {
	return (
		<div className="Menu">
			<ul>
				<li>
					<a href="/orders" className="title">My orders</a>
				</li>
				<li>
					<a href="/account">Mi cuenta</a>
				</li>
				<li>
					<a href="/checkout">Cerrar sesión</a>
				</li>
			</ul>
		</div>
	);
}

export default Menu;