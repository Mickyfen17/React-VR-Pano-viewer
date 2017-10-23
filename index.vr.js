import React from 'react';
import { AppRegistry, asset, Pano, Text, View, StyleSheet } from 'react-vr';
import Button from './Button';
import images from './static_assets/images';

export default class panoImageViewer extends React.Component {
  constructor() {
    super();
    this.state = {
      imageIndex: 0,
      panoImages: [],
      zoom: 0.05,
    };
    this.styles = StyleSheet.create({
      buttons: {
        flexDirection: 'column',
        width: 0.5,
        alignItems: 'stretch',
        transform: [{ translate: [2, 2, -5] }],
      },
      images: {
        transform: [{ scale: this.state.zoom }],
      },
    });

    this.handleClick = this.handleClick.bind(this);
    this.handleZoom = this.handleZoom.bind(this);
  }

  componentWillMount() {
    this.setState({ panoImages: images });
  }

  renderImages() {
    const { imageIndex } = this.state;
    return (
      <Pano
        style={this.styles.image}
        source={{ uri: this.state.panoImages[imageIndex].secure_url }}
      />
    );
  }

  handleClick(e) {
    const direction = e.target === 7 ? 1 : -1;
    this.setState(prevState => ({
      imageIndex: prevState.imageIndex + direction,
    }));
    this.resetIndex(e.target);
  }

  handleZoom(e) {
    const direction = e.target === 19 ? 0.05 : -0.05;
    this.setState(prevState => ({
      zoom: prevState.zoom + direction,
    }));
  }

  resetIndex(button) {
    const { imageIndex, panoImages } = this.state;
    if (button === 7 && imageIndex === panoImages.length - 1) {
      this.setState({ imageIndex: 0 });
    } else if (button === 13 && imageIndex === 0) {
      this.setState({ imageIndex: panoImages.length - 1 });
    }
  }

  render() {
    return (
      <View style={this.styles.image}>
        {this.renderImages()}
        <View style={this.styles.buttons}>
          <Button text=">" handleClick={this.handleClick} />
          <Button text="<" handleClick={this.handleClick} />
        </View>
        <View style={this.styles.buttons}>
          <Button text="+" handleClick={this.handleZoom} />
          <Button text="-" handleClick={this.handleZoom} />
        </View>
      </View>
    );
  }
}

AppRegistry.registerComponent('panoImageViewer', () => panoImageViewer);
