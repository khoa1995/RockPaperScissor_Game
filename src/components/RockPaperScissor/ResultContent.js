import React, {Component} from 'react';
import {Text, StyleSheet, View, TouchableOpacity, Alert} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {connect} from 'react-redux';
import {play, result, reset} from '../../redux/actions/gameAction';

class ResultContent extends Component {
  constructor(props) {
    super(props);
  }
  onPressPlayButton = () => {
    if (this.props.time > 0) {
      const random = setInterval(() => {
        const id = Math.floor(Math.random() * 3);
        this.props.onPressPlayButton(id);
      }, 200);
      setTimeout(() => {
        clearInterval(random);
        this.props.getResult();
      }, 1500);
    } else {
      Alert.alert('Alert Title', 'My Alert Msg', [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {text: 'OK', onPress: () => console.log('OK Pressed')},
      ]);
    }
  };

  render() {
    const {disabled, score, time} = this.props;
    return (
      <>
        <View style={styles.InfoContent}>
          <Text style={styles.InfoText}>Score:{score}</Text>
          <Text style={styles.InfoText}>Times:{time}</Text>
        </View>

        <View style={styles.ButtonContent}>
          <TouchableOpacity
            disabled={disabled}
            onPress={this.onPressPlayButton}
            style={[
              styles.ButtonContainer,
              styles.ButtonPlay,
              disabled && {backgroundColor: '#bbb'},
            ]}>
            <Text style={styles.ButtonText}>Play</Text>
          </TouchableOpacity>
          <LinearGradient
            style={styles.ButtonContainer}
            start={{x: 0.0, y: 0.75}}
            end={{x: 1, y: 0}}
            colors={['#F37335', '#FDC830']}>
            <TouchableOpacity
              onPress={this.props.onPressResetButton}>
              <Text style={styles.ButtonText}>Reset</Text>
            </TouchableOpacity>
          </LinearGradient>
        </View>
      </>
    );
  }
}

const styles = StyleSheet.create({
  InfoContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  InfoText: {
    color: '#00fecd',
    fontSize: 30,
  },
  ButtonContent: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row',
  },
  ButtonText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
  ButtonContainer: {
    borderRadius: 15,
    paddingVertical: 10,
    paddingHorizontal: 20,
    width: 120,
    alignItems: 'center',
  },
  ButtonPlay: {
    backgroundColor: '#ff9aff',
  },
});
const mapStateToProp = state => {
  return {
    time: state.gameReducer.time,
    score: state.gameReducer.score,
    disabled: state.gameReducer.disabled,
  };
};
const mapDispatchToProp = dispatch => {
  return {
    onPressPlayButton: id => {
      dispatch(play(id));
    },
    getResult: () => {
      dispatch(result());
    },
    onPressResetButton: () => {
      dispatch(reset());
    },
  };
};
export default connect(mapStateToProp, mapDispatchToProp)(ResultContent);
