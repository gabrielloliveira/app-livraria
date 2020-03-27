import React, { useState, Component } from 'react'
import { View, Text, StyleSheet, FlatList } from 'react-native'

import api from '../services/api'


class Main extends Component{

  constructor(props){
    super(props)
    this.state = {
      data: []
    }
  }

  loadData = () => {
    fetch("http://192.168.0.107:8000/api/books/")
      .then(res => res.json())
      .then(res => {
        this.setState({
          data: res || []
        })
      })

  }

  componentDidMount(){
    this.loadData()
  }

  render(){
    return(
      <>
      <Text style={styles.h1Header}>Lista de livros</Text>
      <View style={styles.listCard}>
        <FlatList
          data={this.state.data}
          renderItem={({item}) => (
            <View style={styles.card}>
              <Text style={styles.cardTitle}>{item.name}</Text>
            </View>
          )}
          keyExtractor={item => item.id}
        >
        </FlatList>
      </View>
      </>
    )
  }

}

const styles = StyleSheet.create({
  h1Header:{
    marginTop: 10,
    marginBottom: 10,
    fontSize: 30,
    textAlign: "center",
  },
  listCard:{
    flex:1,
    padding: 12, 
  },
  card:{
    padding: 15,
    marginTop: 10,
    marginBottom: 10, 
    backgroundColor: "#fff",
    borderRadius: 6,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowOffset: {
      width: 4,
      height: 4,
    },
    elevation: 2,
  },
  cardTitle:{
    fontSize: 14
  }
})

export default Main
