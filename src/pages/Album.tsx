import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import getMusics from '../services/musicsAPI';
import { AlbumType, SongType } from '../types';
import MusicCard from '../components/MusicCard';

function Album() {
  const [msg, setMsg] = useState<boolean>(false);
  const [CapturaAlbum, setCapturaAlbum] = useState<AlbumType>();
  const [musica, setMusica] = useState<SongType[]>([]);
  const pegarParametro = useParams();
  useEffect(() => {
    const pegarMusica = async () => {
      setMsg(true);
      const [colecao, ...musics] = await getMusics(pegarParametro.id as string);
      setCapturaAlbum(colecao);
      setMusica(musics);
      setMsg(false);
    };
    pegarMusica();
  }, [pegarParametro]);
  if (msg) {
    return <h3>Carregando...</h3>;
  }

  return (
    <div>
      <div>
        <p data-testid="artist-name">
          { CapturaAlbum?.artistName }
        </p>
      </div>
      <div>
        <span data-testid="album-name">
          {CapturaAlbum?.collectionName}
        </span>
      </div>
      <div>
        {
          musica.map((music, index) => (
            <MusicCard
              key={ index }
              NovoElemento={ music }
            />
          ))
}
      </div>

    </div>
  );
}
export default Album;
