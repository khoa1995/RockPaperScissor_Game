import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  ImageBackground,
  SafeAreaView,
  Platform,
  StatusBar,
} from 'react-native';
import {
  BackgroundImage,
  Bot,
  Player,
} from '../../assests/images';
import PlayerItem from './PlayerItem';
import SelectContent from './SelectContent';
import ResultContent from './ResultContent';
import { connect } from 'react-redux';

class RockPaperScissor extends Component {
  state = {
    status: false,
    isSelect: 'paper',
  };

  render() {
    const {playerSelect, botSelect} = this.props
    return (
      <ImageBackground
        style={styles.BackgroundContent}
        source={BackgroundImage}>
        <StatusBar barStyle="light-content" />
        <View style={styles.Overlay}>
          <SafeAreaView style={styles.Container}>
            <View style={styles.PlayerContent}>
              {/* Player  */}
              <PlayerItem
                game={playerSelect.image}
                player={Player}
              />

              {/* Computer */}
              <PlayerItem 
                game={botSelect.image} 
                player={Bot} />
            </View>

            {/* Image Select Content */}
            <SelectContent/>
            {/* Result and Buttons */}
            <ResultContent/>
          </SafeAreaView>
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    paddingVertical: Platform.OS === 'android' ? 25 : 0,
  },
  BackgroundContent: {
    flex: 1,
  },
  Overlay: {
    backgroundColor: 'rgba(0,0,0,0.5)',
    flex: 1,
  },
  PlayerContent: {
    flex: 2,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 10,
  },

  StyleBorder: {
    borderRadius: 5,
    borderColor: 'yellow',
    borderWidth: 3,
    padding: 10,
    width: 80,
    height: 80,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
const mapStateToProp = state => {
  return {
    playerSelect: state.gameReducer.playerSelect,
    botSelect: state.gameReducer.botSelect,
  }
}
export default connect(mapStateToProp)(RockPaperScissor)