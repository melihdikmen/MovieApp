import React, { Component } from 'react';
import { View, Text,FlatList } from 'react-native';
import { Card, ListItem, Button, Icon ,SearchBar} from 'react-native-elements'
import CastViewModel from  '../viewmodel/CastViewModel'
import { observer } from 'mobx-react';

@observer
export default class AwardPage extends Component {
    constructor(props){
        super(props)
      
    }


    componentDidMount(){
        var movieId = this.props.route.params.movieId
        CastViewModel.getAwards(movieId)
    }
 
  render(){
    return (
    
    <View style={{flex:1}}>
     
        <FlatList
        style={{flex:1}}
        data = {CastViewModel.resultData}
        renderItem ={(item) => {
            return (
            <ListItem>
            <ListItem.Content>
              <ListItem.Title>{item.item.awardName}</ListItem.Title>
            </ListItem.Content>
            <ListItem.Chevron/>
            </ListItem>
            )
        }}/>

     
      </View>
    );
  }

}




