import React, {Component} from 'react';
import {StyleSheet, View, Image, TouchableOpacity} from 'react-native';
import { connect } from 'react-redux';
import {playSelect} from '../../redux/actions/gameAction'

class SelectContent extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const {isSelect, disabled} = this.props;
    return (
      <View style={styles.SelectContent}>
        {this.props.arrayGame.map(item => (
          <TouchableOpacity
            disabled={disabled}
            onPress={()=> this.props.onSelectItem(item)}
            key={item.id}
            style={[styles.StyleBorder, item.status && styles.SelectedItem]}
            >
            <Image
              style={[styles.ImageGame, styles.ImageSelect]}
              source={item.image}
            />
          </TouchableOpacity>
        ))}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  SelectContent: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginHorizontal: 20,
  },
  StyleBorder: {
    borderRadius: 5,
    padding: 10,
    width: 80,
    height: 80,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  ImageSelect: {
    width: 50,
    height: 50,
  },
  SelectedItem: {
    borderColor: 'yellow',
    borderWidth: 3,
  },
});
const mapStateToProp = state => ({
  arrayGame: state.gameReducer.arrayGame
})
const mapDispatchToProp = dispatch => {
  return {
    onSelectItem: (item) => dispatch(playSelect(item))
  }
}
export default connect(mapStateToProp, mapDispatchToProp)(SelectContent)