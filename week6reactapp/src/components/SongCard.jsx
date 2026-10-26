function SongCard({ title, artist, year }) {
  return (
    <article className="song-card">
      <div className="song-icon">♫</div>

      <div className="song-info">
        <span className="song-label">NOW PLAYING</span>
        <h3>{title}</h3>
        <p className="song-artist">{artist}</p>
        <p className="song-year">{year}</p>
      </div>
    </article>
  );
}

export default SongCard;