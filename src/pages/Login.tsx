import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createUser } from '../services/userAPI';
import Loading from '../components/Loading';

function Login() {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [disable, setDisable] = useState(true);
  const [loading, setLoading] = useState(false);

  function estadoBotao(evento:React.ChangeEvent<HTMLInputElement>) {
    const nome = evento.target.value;
    setName(nome);
    if (nome.length >= 3) {
      setDisable(false);
    } else {
      setDisable(true);
    }
  }

  function form(evento: React.FormEvent<HTMLFormElement>) {
    evento.preventDefault();
    setLoading(true);
    createUser({ name }).then((newUser) => {
      setName('');
      if (newUser === 'OK') {
        setLoading(false);
        navigate('/search');
      }
    });
  }

  return (
    <div>
      {loading && (<Loading />)}
      <form onSubmit={ form }>
        <input
          onChange={ estadoBotao }
          type="text"
          data-testid="login-name-input"
          value={ name }
        />
        <button disabled={ disable } data-testid="login-submit-button">Entrar</button>
      </form>
    </div>
  );
}
export default Login;
