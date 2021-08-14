import {StatusBar} from 'react-native'
import { getStatusBarHeight } from 'react-native-status-bar-height';


const styledConstants = {
  COLOR1: '#DBDBDB',
  COLOR2: '#4A0CAE',
  OPACITY: 0.9,
  statusBarHeight: Math.ceil(getStatusBarHeight())+'px'
}
export default styledConstants