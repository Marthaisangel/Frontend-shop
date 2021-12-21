import React from 'react';
import '../styles/CreateAccount.scss';

const CreateAccount = () => {
	return (
		<div className="CreateAccount">
			<div className="CreateAccount-container">
				<h1 className="title">Crear cuenta</h1>
				<form action="/" className="form">
					<div>
						<label for="name" className="label">Nombre</label>
						<input type="text" id="name" placeholder="" className="input input-name" />
						<label for="email" className="label">Email</label>
						<input type="text" id="email" placeholder="" className="input input-email" />
						<label for="password" className="label">Contraseña</label>
						<input type="password" id="password" placeholder="*********" className="input input-password" />
					</div>
					<input type="submit" value="Crear" className="primary-button login-button" />
				</form>
			</div>
		</div>
	);
}

export default CreateAccount;
