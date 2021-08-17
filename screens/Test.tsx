import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import styledConstants from '../constants/styledConstants';
import { Image, TextInput, FlatList } from 'react-native';
import Menu from '../components/Menu';
import Item from '../props/Items'
import { useSelector, useDispatch } from 'react-redux';
import { getItems, getCategories } from '../actions';

const Test = ({ navigation }) => {
  return (
    <Background>
        <View>

        <Text>xxx</Text>
</View>
    </Background>
  );
}

export default Test;

const Background = styled.View`
  top:0;
  left:0;
  width: 100%;
  height: 100%;
  background-color: ${styledConstants.BACKGROUNDCOLOR};

`;
const Text = styled.Text`
`;
const View = styled.View`
    width:70%;
    background-color:black;
    height:100%;
    display:flex;
    margin-left:30%;
`;