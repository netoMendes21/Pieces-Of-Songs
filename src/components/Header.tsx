import { useEffect, useState } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import { getUser } from '../services/userAPI';

function Header() {
  const [usuarios, setUsusarios] = useState('');
  const [loading, setLoading] = useState<boolean>(false);
  const getName = useParams;
  useEffect(() => {
    setLoading(true);
    const nomeUsuario = async () => {
      const { name } = await getUser();
      setLoading(false);
      setUsusarios(name);
    };
    nomeUsuario();
  }, [getName]);

  if (loading) {
    return <p>Carregando...</p>;
  }

  return (
    <div>
      <header data-testid="header-component">
        <NavLink to="/search" data-testid="link-to-search"> Pesquisar </NavLink>

        <NavLink to="/favorites" data-testid="link-to-favorites">Favoritos</NavLink>

        <NavLink to="/profile" data-testid="link-to-profile">Perfil</NavLink>
      </header>
      <span data-testid="header-user-name">
        { usuarios }
      </span>
    </div>
  );
}
export default Header;
