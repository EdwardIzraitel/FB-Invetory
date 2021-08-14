import { getStatusBarHeight } from 'react-native-status-bar-height';


const styledConstants = {
  BACKGROUNDCOLOR: '#F3EFF5',
  PROPBACKGROUNDCOLOR: '#090101',
  STATUSBARCOLOR:'#F3EFF5',
  TEXTCOLOR: '#FFFFFF',
  OPACITY: 0.9,
  statusBarHeight: Math.ceil(getStatusBarHeight())+'px'
}
export default styledConstants;