import { useState } from 'react';
import { SongType } from '../types';

type MusicCardProps = {
  NovoElemento: SongType;
};

function MusicCard({ NovoElemento }:MusicCardProps) {
  const checado = '/src/images/checked_heart.png';
  const naoChecado = '/src/images/empty_heart.png';
  const [box, setBox] = useState(false);
  return (
    <div>
      <p>{NovoElemento.trackId }</p>
      <p>{NovoElemento.trackName}</p>
      <p>
        <audio data-testid="audio-component" src={ NovoElemento.previewUrl } controls>
          <track kind="captions" />
        </audio>
      </p>
      <p>
        {NovoElemento.kind}
      </p>
      <label
        data-testid={ `checkbox-music-${NovoElemento.trackId}` }
      >

        <input
          type="checkbox"
          onChange={ () => setBox(!box) }
          checked={ box }
        />
        <img
          src={ box
            ? checado
            : naoChecado }
          alt="favorite"
        />
      </label>
    </div>
  );
}
export default MusicCard;
