import React from 'react';
import styled from 'styled-components';
import styledConstants from '../constants/styledConstants'
import { Image, TouchableOpacity } from 'react-native'
// import { NavigationContainer } from '@react-navigation/native';
// import { useNavigation } from '@react-navigation/native';

const Menu = (props) => {
  // const navigation = useNavigation();
  return (
    <ParentContainer>
      <StatusBar />
      {props.defaultMenu ?
        // default menu
        <MenuContainer>
          <TouchableOpacity onPress={()=>props.navigation.openDrawer()}>
          <Image style={{ backgroundColor: 'white', width: 25, height: 25, left: 8 }} source={require('../assets/images/settings.svg')} />
          </TouchableOpacity>
          <Text style={{}}>{props.title}</Text>
          <Image style={{ backgroundColor: 'white', width: 25, height: 25, right: 8 }} source={require('../assets/images/menu.svg')}/>
        </MenuContainer>
        :
        //all other pages, delete, update, etc (future)
        <MenuContainer>
          <Text>{props.title}</Text>
        </MenuContainer>
      }


    </ParentContainer>
  );
}

export default Menu;

const ParentContainer = styled.View``;
const StatusBar = styled.View`
      position:relative;
      top:0;
      left:0;
      background:${styledConstants.STATUSBARCOLOR};
      width:100%;
      height: ${styledConstants.statusBarHeight};
  /* opacity: ${styledConstants.OPACITY}; */
      `;
const MenuContainer = styled.View`
      /* position: static; */
      width: 100%;
      height: 52px;
      left: 0px;
      top: 0px;
      flex-direction:row;
      justify-content:space-between;
      align-items:center;
      background: ${styledConstants.PROPBACKGROUNDCOLOR};
      opacity: ${styledConstants.OPACITY};
      `;
const Text = styled.Text`
      color: ${styledConstants.TEXTCOLOR};
      font-size: 20px;
      font-weight:bold;
      `;



const Background = styled.View`
  top:0;
  left:0;
  width: 100%;
  height: 100%;
  background-color: ${styledConstants.BACKGROUNDCOLOR};

`;
// const Text = styled.Text`
// `;
const View = styled.View`
    width:70%;
    background-color:black;
    height:100%;
    display:flex;
    margin-left:30%;
`;