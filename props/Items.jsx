import React from 'react';
import styled from 'styled-components';
import styledConstants from '../constants/styledConstants'
import {Image} from 'react-native'

const Items = (props) => {
  return(
    <ItemContainer>
      <ItemDisplayContainer>
        <Image style = {{backgroundColor:'blue', width:20, height:20, marginLeft:10}} source={require('../assets/images/add.svg')}/>
        <Text style={{color:styledConstants.COLOR1,marginLeft:10}}>{props.Name}</Text>
      </ItemDisplayContainer>
      <ItemConfigContainer>
        <Image style = {{backgroundColor:'blue', width:20, height:20}} source={require('../assets/images/add.svg')}/>
        <Text style={{color:styledConstants.COLOR1}}>{props.Quantity}</Text>
        <Image style = {{backgroundColor:'blue', width:20, height:20}} source={require('../assets/images/remove.svg')}/>
      </ItemConfigContainer>
    </ItemContainer>
    )
}
export default Items;

const ItemContainer = styled.View`
  height:50px;
  width:100%;
  margin-top:5px;
  flex-direction:row;
  justify-content:space-between;
  align-items:center;
  border-radius:15px;
  background-color: ${styledConstants.COLOR2};
`;

const Text = styled.Text``;

const ItemDisplayContainer = styled.View`
  flex-direction:row;
  justify-content:flex-start;
  align-items:center;
  width:150px;
`;

const ItemConfigContainer = styled.View`
  flex-direction:row;
  justify-content:space-between;
  align-items:center;
  height:20px;
  width:80px;
  margin-right:10px;
`;