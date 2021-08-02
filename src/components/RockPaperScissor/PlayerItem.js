import React, {Component} from 'react';
import {StyleSheet, View, Image} from 'react-native';

export default class PlayerItem extends Component {
  render() {
    return (
      <View style={{alignItems: 'center'}}>
        <View style={styles.StyleBorder}>
          <Image style={styles.ImageGame} source={this.props.game} />
        </View>
        <View style={styles.Triangle}></View>
        <Image style={styles.ImagePlayer} source={this.props.player} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
    StyleBorder: {
        borderRadius: 5,
        borderColor: 'yellow',
        borderWidth: 3,
        padding: 10,
        width: 80,
        height: 80,
        backgroundColor: 'rgba(0,0,0,0.5)',
        justifyContent:'center',
        alignItems: 'center'
    },
    Triangle: {
        width: 0,
        height: 0,
        borderLeftWidth: 6,
        borderRightWidth: 6,
        // borderBottomWidth: 120,
        borderTopWidth: 12,
        borderLeftColor: 'transparent',
        borderRightColor: 'transparent',
        borderTopColor: 'yellow',
    },
    ImageGame: {
        width: 50,
        height: 50,
    },
    ImagePlayer: {
        width: 80,
        height: 80,
    },
});
