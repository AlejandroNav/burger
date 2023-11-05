
import { FormEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './login.css'
import burgerIamge from '../../assets/6.png'
function Login() {

    const secretUser: string = 'Lomito'
    const secretPassword: string = '7456'
    const navigate = useNavigate();
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')

    const handleLogin = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault(); // Prevent default form submission behavior
        if (username === secretUser) {
            if (password === secretPassword) {
                navigate('/menu');
            } else {
                setError('Wrong password')
            }
        }
        else {
            setError('The user doesnt exist')
        }
    }

    return (
        <main className="login-page">
            <header className="header">
                <h1>BURGER FI<span>y Salsa</span></h1>
            </header>

            <section className="login-container">
                <figure className="login-images">
                    <img src={burgerIamge} alt="Burger Queen Mascot" />
                </figure>
                <form className="login-form" onSubmit={handleLogin}>
                    <h2>Login to BurgerFi</h2>
                    <input
                        type="text" 
                        placeholder='Write your user'
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <input
                        type='password' 
                        placeholder='Password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <button type="submit">Login</button>
                    {error && <p className="error-message">{error}</p>}
                </form>
            </section>
            
        </main>
    );
}

export default Login;