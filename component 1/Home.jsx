import React, { Component } from 'react'
import Card from '../components/Card';
import Searchbar from'../components/searchBar';
import config from '../lib/config';
import button from '../components/Button';

export default class home extends Component {
    state = {
        accessToken: '',
        isAuthorize: false,
        tracks: [],
    }
}

getHashParams () {
    const hashparams = {};
    const r = /([^&;=]+)=?([^&;]*)/g;
    const q = window.locationhash.substring(1);
    let e = r.exec(q);

    while (e) {
        hashParams [e[1]] = decodeURIComponent (e[2]);
        e = r.exec(q);
    }
    return hashParmas;
}

componentDidMount() {
    const params = this.getHashParams();
    const { access_token: accessToken } = params

    this.setStake ({ accessToken, isAuthorize: accessToken ! == underfined })
}

getSportifyLinkAuthorized() {
    const state = Date.now().toString();
    const clientId = process.env.REACT_APP_SPORTIFY_CLIENT_ID;

    return `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=token&redirect_uri=http://localhost:3000&state=${state}&scope=${config.SPOTIFY_SCOPE}`;
}

onSuccessSearch(tracks) {
    this.setState({ tracks });
  }

  render() {
    return (
      <>
        {!this.state.isAuthorize && (
          <main className="center">
            <p>Login for next step...</p>
            <Button href={this.getSpotifyLinkAuthorize()}>Authorize</Button>
          </main>
        )}

        {this.state.isAuthorize && (
          <main className="container" id="home">
            <SearchBar
              accessToken={this.state.accessToken}
              onSuccess={(tracks) => this.onSuccessSearch(tracks)}
            />

            <div className="content">
              {this.state.tracks.length === 0 && (
                <p>No tracks</p>
              )}

              <div className="cards">
                {this.state.tracks.map((song) => (
                  <Card
                    key={song.id}
                    imageUrl={song.album.images[0].url}
                    title={song.name}
                    artist={song.artists[0].name}
                  />
                ))}
              </div>
            </div>
          </main>
        )}
      </>
    );
  }
}