import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { Link } from 'react-router';

import LyricCreate from './LyricCreate';
import LyricList from './LyricList';
import query from '../queries/fetchSong';

class SongDetail extends Component {
  render() {
    const { song, loading } = this.props.data;

    if (loading) {
      return <div>loading...</div>;
    }

    return (
      <div>
        <Link to="/">Back</Link>
        <h3>
          {song.title}
        </h3>
        <LyricList lyrics={song.lyrics} />
        <LyricCreate songId={this.props.params.id}/>
      </div>
    );
  }
}

export default graphql(
  query,
  {
    options: (props) => ({
      variables: {
        id: props.params.id
      }
    })
  }
)(SongDetail);
