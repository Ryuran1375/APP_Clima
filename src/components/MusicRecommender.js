import React, { useState, useEffect } from 'react';

const SPOTIFY_CLIENT_ID = 'ffa3debcaf894caf9629ded5ecd0dbb1';
const SPOTIFY_CLIENT_SECRET = 'f53cfd3404dc4e0bbb486d7cfbe8357a';

const getSearchQuery = (description) => {
  const lowerDesc = description.toLowerCase();
  if (lowerDesc.includes('lluvia') || lowerDesc.includes('llovizna')) {
    return 'lofi study relax';
  }
  if (lowerDesc.includes('nieve') || lowerDesc.includes('frío')) {
    return 'cozy winter fireplace jazz';
  }
  if (lowerDesc.includes('sol') || lowerDesc.includes('despejado')) {
    return 'upbeat summer pop hits';
  }
  if (lowerDesc.includes('nubes') || lowerDesc.includes('nublado')) {
    return 'chill focus indie';
  }
  if (lowerDesc.includes('tormenta') || lowerDesc.includes('truenos')) {
    return 'epic background music';
  }
  return 'driving chill electronic';
};

const MusicRecommender = ({ weatherDescription }) => {
  const [playlistEmbedUri, setPlaylistEmbedUri] = useState(null);
  const [token, setToken] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchToken = async () => {
      try {
        const response = await fetch('https://accounts.spotify.com/api/token', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': 'Basic ' + btoa(SPOTIFY_CLIENT_ID + ':' + SPOTIFY_CLIENT_SECRET),
          },
          body: 'grant_type=client_credentials',
        });

        if (!response.ok) {
          throw new Error('Error al obtener el token de Spotify. Revisa Client ID y Secret.');
        }

        const data = await response.json();
        setToken(data.access_token);
        setError(null);
      } catch (err) {
        setError(err.message);
        console.error('Spotify Token Error:', err);
      }
    };
    fetchToken();
  }, []);

  useEffect(() => {
    if (!token || !weatherDescription) return;

    const fetchPlaylist = async () => {
      const searchQuery = getSearchQuery(weatherDescription);
      try {
        const searchResponse = await fetch(`https://api.spotify.com/v1/search?q=${searchQuery}&type=playlist&limit=1`, {
          method: 'GET',
          headers: {
            'Authorization': 'Bearer ' + token,
          },
        });

        if (!searchResponse.ok) {
          throw new Error('Error en la búsqueda de Spotify.');
        }

        const searchData = await searchResponse.json();
        const firstPlaylist = searchData.playlists.items[0];

        if (firstPlaylist) {
          const playlistId = firstPlaylist.uri.split(':').pop();
          setPlaylistEmbedUri(`https://open.spotify.com/embed/playlist/${playlistId}`);
        } else {
          setPlaylistEmbedUri(null);
        }

      } catch (err) {
        setError('Error buscando playlists: ' + err.message);
      }
    };
    fetchPlaylist();
  }, [token, weatherDescription]);

  if (error) {
    return <p className="error-message">Error de Spotify: {error}</p>;
  }

  if (!playlistEmbedUri) {
    return <p>Cargando recomendación musical...</p>;
  }

  return (
    <div className="music-recommender-container">
      <h3>🎶 Música para **{weatherDescription}**</h3>
      <iframe
        title="Spotify Embed"
        src={playlistEmbedUri}
        width="100%"
        height="300"
        allowFullScreen=""
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
        frameBorder="0"
      ></iframe>
    </div>
  );
};

export default MusicRecommender;