import { useState } from 'react';
import { Link } from 'react-router-dom';
import searchAlbumsAPI from '../services/searchAlbumsAPI';
import { AlbumType } from '../types';

function Search() {
  // const navigate = useNavigate();
  const [name, setName] = useState('');
  const [disable, setDisable] = useState(true);
  const [loading, setLoading] = useState(false);
  const [albuns, setAlbuns] = useState<AlbumType[]>([]);

  function estadoBotao(evento:React.ChangeEvent<HTMLInputElement>) {
    const nome = evento.target.value;
    setName(nome);
    if (nome.length >= 2) {
      setDisable(false);
    } else {
      setDisable(true);
    }
  }

  async function form(evento: React.FormEvent<HTMLFormElement>) {
    evento.preventDefault();
    if (name.length > 0) {
      setLoading(true);
      const listaAlbuns = await searchAlbumsAPI(name);
      setAlbuns(listaAlbuns);
      setLoading(false);
      setName('');
    }
  }

  return (
    <div>
      <h1>Busca</h1>
      <form onSubmit={ form }>
        <input
          onChange={ estadoBotao }
          type="text"
          data-testid="search-artist-input"
          value={ name }
        />
        <button
          type="submit"
          disabled={ disable }
          data-testid="search-artist-button"
        >
          Pesquisar

        </button>
      </form>
      <div>
        {albuns && (
          <div>
            <p>
              Resultado de álbuns de:
              {' '}
              {name}
            </p>
            {albuns.map((album) => (
              <div key={ album.collectionId }>
                <Link
                  data-testid={ `link-to-album-${album.collectionId}` }
                  to={ `/album/${album.collectionId}` }
                >
                  {album.collectionName}
                </Link>
                <p>
                  {album.artistName}
                </p>
                <img src={ album.artworkUrl100 } alt="Capa do Disco" />

              </div>
            ))}
          </div>
        )}
        {!loading && albuns.length === 0 && (
          <span>Nenhum álbum foi encontrado</span>
        )}
      </div>
    </div>
  );
}
export default Search;
