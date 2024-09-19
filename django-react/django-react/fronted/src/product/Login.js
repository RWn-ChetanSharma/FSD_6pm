import React, { useState ,useEffect} from 'react';
import './Login.css';
import { useNavigate  } from 'react-router-dom';
const Login = () => {

  const navigate = useNavigate()

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const info={
    email:email,
    password:password
}

  const handleSubmit = async(e) => {
    e.preventDefault();
    console.log(`Email: ${email}, Password: ${password}`);
    try {
        const response = await fetch('http://localhost:8000/api/login/', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'X-CSRFToken': csrfToken,
          },
          body: JSON.stringify(info),
        });
        const data = await response.json();
        const data1 = JSON.parse(data);
        const u1=data1[0];
        if (u1.fields.email===info.email){
          navigate(`/home?username=${encodeURIComponent(u1.fields.name)}&email=${encodeURIComponent(u1.fields.email)}`)
        }
        } 
        catch (error) {
            console.error('Error:', error);
        }

  
  };

  const [csrfToken, setCsrfToken] = useState('');

        useEffect(() => {
            const getCsrfToken = async () => {
              const response = await fetch('/get-csrf-token/');
              const data = await response.json();
              setCsrfToken(data.csrfToken);
            };
            getCsrfToken();
          }, []);

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Login</h2>
        <hr />
        <br />
        <div className="form-group">
          <label htmlFor="email">Email Address *</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password *</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
    
        <button type="submit" className="login-button">Log In</button>
        
      </form>
    </div>
  );
};

export default Login;
