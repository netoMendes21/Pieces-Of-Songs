import { SongType } from '../types';

type MusicCardProps = {
  NovoElemento: SongType;
};

function MusicCard({ NovoElemento }:MusicCardProps) {
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
    </div>
  );
}
export default MusicCard;
