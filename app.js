import React, { useEffect, useState, Component } from 'react';

import { StyleSheet, View, Button, FlatList, Text, Image } from 'react-native';
 
export default class MyProject extends Component {
  constructor(){
    super();
    this.state={

      // This is our Default number value
      NumberHolder : 1,
      books: []

    }
  }

GenerateRandomNumber=()=>
{
var RandomNumber = Math.floor(Math.random() * 5000) + 1;
 fetch("https://icanhazdadjoke.com/", {
        headers: {
            Accept: "application/json"
        }
    })
.then((response) => response.json())
.then(booksList => {
    this.setState({ books: booksList });
});
this.setState({
  NumberHolder : RandomNumber

})
}

  render() {
    let Image_Http_URL ={ uri: 'https://reactnativecode.com/wp-content/uploads/2017/05/react_thumb_install.png'};
    return (
   
      <View style={styles.MainContainer} >

      <Text style={{marginBottom: 10, fontSize: 30}}>{this.state.books.joke}</Text>
       <Button title="Get Joke!" onPress={this.GenerateRandomNumber} />
        
      </View>

    );
  }
}

const styles = StyleSheet.create(
{
  MainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }

});
