import React from 'react';
import { AppRegistry, asset, Pano, Text, View, StyleSheet } from 'react-vr';
import Button from './Button';
import images from './images';

export default class panoImageViewer extends React.Component {
  constructor() {
    super();
    this.state = {
      imageIndex: 0,
      panoImages: [],
    };
    this.styles = StyleSheet.create({
      menu: {
        flexDirection: 'column',
        width: 0.5,
        alignItems: 'stretch',
        transform: [{ translate: [2, 2, -5] }],
      },
    });

    this.handleClick = this.handleClick.bind(this);
  }

  componentWillMount() {
    this.setState({ panoImages: images });
  }

  renderImages() {
    const { imageIndex } = this.state;
    return (
      <Pano source={{ uri: this.state.panoImages[imageIndex].secure_url }} />
    );
  }

  handleClick(e) {
    const direction = e.target === 7 ? 1 : -1;
    this.setState(prevState => ({
      imageIndex: prevState.imageIndex + direction,
    }));
    this.resetIndex(e.target);
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
      <View>
        {this.renderImages()}
        <View style={this.styles.menu}>
          <Button text=">" handleClick={this.handleClick} />
          <Button text="<" handleClick={this.handleClick} />
        </View>
      </View>
    );
  }
}

AppRegistry.registerComponent('panoImageViewer', () => panoImageViewer);
