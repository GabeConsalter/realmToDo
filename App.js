/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {TouchableOpacity, Platform, StyleSheet, Text, View, FlatList, TextInput} from 'react-native';
import Task from './src/components/Task';
import { Utils } from './src/Utils';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      input: '',
      search: false,
      tasks: [{_id: '121', description: 'Hello', createdAt: new Date(), color: Utils.colors.red, done: true}]
    }
  }

  render() {
    const { search, tasks } = this.state;

    return (
      <View style={styles.container}>
        <FlatList
          data={tasks}
          style={styles.tasks}
          renderItem={({ item }) => <Task
            key={item._id}
            description={item.description}
            color={item.color}
            createdAt={item.createdAt}
            done={item.done}
            onPress={() => this.taskPressed(item._id)}
          />}
        />
        <View style={styles.footer}>
          <View style={{marginVertical: 8, marginHorizontal: 16, flexDirection: 'row'}}>
            <TouchableOpacity style={[styles.color, {backgroundColor: Utils.colors.yellow}]} 
              onPress={() => this.filter('yellow')}
            />
            <TouchableOpacity style={[styles.color, {backgroundColor: Utils.colors.red}]}
              onPress={() => this.filter('red')}
            />
            <TouchableOpacity style={[styles.color, {backgroundColor: Utils.colors.blue}]}
              onPress={() => this.filter('blue')}
            />
            <TouchableOpacity style={[styles.color, {backgroundColor: Utils.colors.purple}]}
              onPress={() => this.filter('purple')}
            />
            <TouchableOpacity style={[styles.color, {backgroundColor: Utils.colors.grey}]}
              onPress={() => this.filter('grey')}
            />
            <TouchableOpacity style={[styles.search, {backgroundColor: search ? '#2C93B8' : '#FFF'}]}
              onPress={() => this.setState({ search: !search })}>
              <Text>Buscar</Text>
            </TouchableOpacity>
          </View>
          <View>
            <View style={{flexDirection: 'row'}}>
              <TextInput
                style={styles.input}
                onChange={input => this.setState({ input })}
              />
              <View style={{flex: .4, marginRight: 16}}>
                <TouchableOpacity style={styles.btnSend}
                  onPress={() => search ? this.search() : this.new()}>
                  <Text style={{fontWeight: 'bold', textAlign: 'center', textAlignVertical: 'center', color:'#FFF'}}>OK</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </View>
    );
  }

  filter(color) {

  }

  search() {
    const { input } = this.state;
  }

  new() {
    const { input } = this.state;
  }

  taskPressed(_id) {

  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },

  tasks: {
    width: '100%'
  },

  footer: {
    width: '100%',
    height: '20%',
    backgroundColor: '#E9F8FD'
  },

  input: {
    backgroundColor: '#FFF',
    borderRadius: 50,
    marginHorizontal: 16,
    height: 40,
    flex: 3
  },

  btnSend: {
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#2C93B8'
  },

  color: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginHorizontal: 4
  },

  search: {
    height: 40,
    alignItems: 'center',
    marginLeft: 20,
    justifyContent: 'center',
    borderRadius: 20,
    paddingHorizontal: 16
  }
});
