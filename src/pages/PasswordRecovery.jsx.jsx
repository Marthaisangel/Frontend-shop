import React from 'react';
import '../styles/PasswordRecovery.scss';

const PasswordRecovery = () => {
	return (
		<div className="PasswordRecovery">
			<div className="PasswordRecovery-container">
				<img src="./logos/logo_yard_sale.svg" alt="logo" className="logo" />
				<h1 className="title">Recuperación de contraseña</h1>
				<p className="subtitle">Escribe tu dirección de correo para recuperar tu contraseña</p>
				<form action="/send-email" className="form">
					<label htmlFor="email" className="label">Dirección de correo electrónico</label>
					<input type="text" id="email" className="input input-email" />
					<input type="submit" value="Confirm" className="primary-button login-button" />
				</form>
			</div>
		</div>
	);
}

export default PasswordRecovery;

