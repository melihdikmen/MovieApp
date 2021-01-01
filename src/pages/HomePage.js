import React, { Component } from 'react';
import { View, Text,FlatList } from 'react-native';
import { Card, ListItem, Button, Icon ,SearchBar} from 'react-native-elements'
import HomeViewModel from  '../viewmodel/HomeViewModel'
import { observer } from 'mobx-react';

@observer
export default class HomePage extends Component {
 
  render(){
    return (
    
    <View style={{flex:1}}>
      <SearchBar platform={"android"} round={true}  value ={HomeViewModel.searchText} onChangeText={(text)=>{
        HomeViewModel.onChangeSearchText(text)
      }} />
        <FlatList
        style={{flex:1}}
        data = {HomeViewModel.resultData}
        renderItem ={(item) => {
        return  <Card>
          <Card.Title>{item.item.l}</Card.Title>
          <Card.Divider/>
          <Card.Image  source={{uri:item.item.i.imageUrl,justifyContent: 'center',alignItems: 'center',}} >
            <Text style={{marginTop: 30,color:"white"}}>
              {item.item.l + " / "+item.item.q +" / "+ item.item.s + " / "+item.item.y}
            </Text>
            <Button
              onPress = {()=>{
                this.props.navigation.navigate("Awards",{movieId:item.item.id})
              }}
              icon={<Icon name='code' color='#ffffff' />}
              buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0,marginTop:30}}
              title='AWARDS' />
          </Card.Image>
          </Card>
        }}
        />


      {/* <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>No Results</Text>
      </View> */}
      </View>
    );
  }

}




