import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import styledConstants from '../constants/styledConstants';
import { Image, TextInput, FlatList } from 'react-native';
import Menu from '../components/Menu';
import Item from '../props/Items'
import { useSelector, useDispatch } from 'react-redux';
import { getItems, getCategories } from '../actions';

//Text used to update the category to the top item of the flat list
const ChangeCategory = (props) => {
  return (
    <CategoriesContainer>
      <Text style={{ marginTop: 5 }}>{props.name}</Text>
    </CategoriesContainer>
  )
}
const Home = ({ navigation }) => {
  //Lists for items and categories
  const items = useSelector(item => item.itemsReducer)
  const categories = useSelector(category => category.categoriesReducer)
  const dispatch = useDispatch()

  //currentCategory finds the "category" the current item falls under
  //On initial load it is "Meat"
  let [currentCategory, setCurrentCategory] = useState("Meat")
  let [filteredList, setList] = useState()
  //Like ComponentDidMount (runs only once on load)
  //Gets the current list of items and categories
  useEffect(() => {
    dispatch(getItems())
    dispatch(getCategories())
    setList(items)
  }, [items, categories]);
  //finds the category of the top item


  /**
 * 
 * @param {float} offset 
 * @returns 
 */
  const CalculateCategory = (offset) => {
    offset < 0 ? offset = 0 : null
    setCurrentCategory(categories.find(obj => obj.Id === items[Math.floor((offset + 5) / 55)].CategoryId).Name)

  }
  return (
    <Background>
      <ItemContentContainer>
        <SearchItemContainer>
          {/* Text box for searching */}
          <TextInput
            editable
            maxLength={10}
            placeholder="Search"
            //Calculates new filtered list and top item in list
            onChangeText={(text) => {
              let tempList = items.filter(obj => obj.Name.toLowerCase().includes(text.toLowerCase()))
              setList(tempList)
              if (tempList.length != 0) {
                setCurrentCategory(categories.find(obj => obj.Id === tempList[0].CategoryId).Name)
              }
              else {
                setCurrentCategory("There are no items with such name")
              }
            }
            }
          />
        </SearchItemContainer>
        <ChangeCategory name={currentCategory} />
        <FlatList
          data={filteredList}
          keyExtractor={(item) => item.Id.toString()}
          renderItem={({ item }) => {
            return (
              <Item
                Name={item.Name} Quantity={item.Quantity} />
            )
          }
          }
          showsVerticalScrollIndicator={false}
          style={{ width: "95%", height: "84%" }}
          onScroll={(e) => {
            CalculateCategory(e.nativeEvent.contentOffset.y)
          }}
          maxToRenderPerBatch={12}
        />
      </ItemContentContainer>
      <AddButtons>
        <Image style={{ backgroundColor: 'white', width: 25, height: 25, left: 8 }} source={require('../assets/images/settings.svg')} />
        <Image style={{ backgroundColor: 'white', width: 25, height: 25, right: 8 }} source={require('../assets/images/settings.svg')} />
      </AddButtons>


    </Background>
  );
}

export default Home;

const Background = styled.View`
  top:0;
  left:0;
  width: 100%;
  height: 100%;
  background-color: ${styledConstants.BACKGROUNDCOLOR};
`;
const Text = styled.Text`
`;
const ItemContentContainer = styled.View`
  margin-left:5%;
`;
const SearchItemContainer = styled.View`
  border-width:1px;
  width:95%;
  border-radius:5px;
  margin-top:3%;
`;
const CategoriesContainer = styled.View`
`

const AddButtons = styled.View`
  width: 95%;
  flex-direction:row;
  justify-content:space-between;
  align-items:center;
  margin-top:2.5%;
  margin-left:2.5%
`;