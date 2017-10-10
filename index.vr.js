import React from 'react';
import { AppRegistry, asset, Pano, Text, View } from 'react-vr';
import images from './images';

export default class panoImageViewer extends React.Component {
  constructor() {
    super();
    this.state = {
      panoImages: [],
    };
  }

  componentWillMount() {
    this.setState({ panoImages: images });
  }

  renderImages() {
    // this.state.panoImages.map(panoImage => (
    //   <Pano source={asset(panoImage.secure_url)} />
    // ));
    return <Pano source={{ uri: this.state.panoImages[1].secure_url }} />;
  }

  render() {
    return <View>{this.renderImages()}</View>;
  }
}

AppRegistry.registerComponent('panoImageViewer', () => panoImageViewer);
