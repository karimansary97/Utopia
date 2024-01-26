import {StyleSheet} from 'react-native';
import colors from '../../../styles/colors';
import unit from '../../../styles/unit';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: 26 * unit,
    alignItems: 'flex-end',
    backgroundColor: colors.white,
    paddingHorizontal: 12 * unit,
    paddingTop: 12 * unit,
    paddingBottom: 24 * unit,
    marginHorizontal: 20 * unit,
    borderRadius: 32 * unit,
    marginLeft: 28 * unit,
  },
  item: {
    flexBasis: '25%',
    alignItems: 'center',
  },
  text: {
    marginTop: 6 * unit,
    fontWeight: '500',
  },
  focused: {
    color: 'black',
  },
  unFocused: {
    color: 'gray',
  },
});
