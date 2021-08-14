import React from 'react';
import styled from 'styled-components';
import styledConstants from '../constants/styledConstants'
import {Image} from 'react-native'

const Items = (props) => {
  return(
    <ItemContainer>
      <ItemDisplayContainer>
        <Image style = {{backgroundColor:styledConstants.BACKGROUNDCOLOR, width:25, height:25, marginLeft:10}} source={require('../assets/images/add.svg')}/>
        <Text style={{color:styledConstants.TEXTCOLOR,marginLeft:10}}>{props.Name}</Text>
      </ItemDisplayContainer>
      <ItemConfigContainer>
        <Image style = {{backgroundColor:styledConstants.BACKGROUNDCOLOR, width:25, height:25}} source={require('../assets/images/add.svg')}/>
        <Text>{props.Quantity}</Text>
        <Image style = {{backgroundColor:styledConstants.BACKGROUNDCOLOR, width:25, height:25}} source={require('../assets/images/remove.svg')}/>
      </ItemConfigContainer>
    </ItemContainer>
    )
}
export default Items;

const ItemContainer = styled.View`
  height:50px;
  width:100%;
  margin-top:10px;
  flex-direction:row;
  justify-content:space-between;
  align-items:center;
  border-radius:15px;
  background-color: ${styledConstants.PROPBACKGROUNDCOLOR};
`;

const Text = styled.Text`
  color: ${styledConstants.TEXTCOLOR};
  font-size: 15px;
`;

const ItemDisplayContainer = styled.View`
  flex-direction:row;
  justify-content:flex-start;
  align-items:center;
  width:60%;
`;

const ItemConfigContainer = styled.View`
  flex-direction:row;
  justify-content:space-between;
  align-items:center;
  height:100%;
  width:23%;
  margin-right:10px;
`;