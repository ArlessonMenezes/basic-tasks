import React, { useState } from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  TextInput,
  TouchableOpacity,
  FlatList 
} from 'react-native';
import { Entypo } from '@expo/vector-icons';
import Tarefa from './src/components/tarefa';

export default function App() {

  const [tarefa, setTarefa] = useState('');
  const [list, setList] = useState([]);

  //adicionando item
  function handleAdd() {
     
    if (tarefa === '') {
      return;
    }

    const data = {
      key: Date.now(),
      item: tarefa
    }

    setList(oldArrray => [data, ...oldArrray])

    setTarefa('');
  }

  //deletando item
  function handleDelete(item) {
    let filtroItem = list.filter(tarefa => {
      return (tarefa.item !== item);
    })

    setList(filtroItem);
  }

  return (
    <View style={styles.container}>
      <Text style={ styles.title }>Tarefas!</Text>
    
      <View style={ styles.containerInput }>
        <TextInput
          placeholder="Digite sua tarefa..."
          placeho
          style={styles.input}
          value={ tarefa }
          onChangeText={text => setTarefa(text)}
        />

      <TouchableOpacity style={ styles.btnAdd } onPress={handleAdd}>
      <Entypo name="plus" size={33} color="#fff" />
      </TouchableOpacity>
      </View>
   
        <FlatList 
          data={list}
          keyExtractor={(item) => item.key}
          renderItem={({ item }) => <Tarefa data={item} deleteItem={() => handleDelete(item.item)} />}
          style={styles.List}
        />
      
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#22272e',
    paddingTop: 30,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 24,
    color: '#fff',
    marginTop: '5%',
    paddingStart: '5%',
    marginBottom: 12,
  },
  containerInput: {
    flexDirection: 'row',
    width: '100%',
    height: 44,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 25
  },
  input: {
    width: '75%',
    fontSize: 18,
    marginLeft: 35,
    backgroundColor: '#fbfbfb',
    height: 44,
    borderRadius: 4,
    paddingHorizontal: 8,
    textAlign: 'center',
    color: '#121212',
  },
  btnAdd: {
    padding: 5,
    width: '15%',
    height: 44,
    marginLeft: 8,
    marginRight: 25,
    backgroundColor: '#73f7ff',
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tarefas: {
    width: '75%',
    fontSize: 18,
    marginLeft: 35,
    backgroundColor: '#cecece',
    height: 44,
    borderRadius: 4,
    paddingHorizontal: 8,
    textAlign: 'center',
    color: '#121212',
  },
  List: {
    backgroundColor: '#fbfbfb',
    paddingLeft: '4%',
    paddingRight: '4%',
  }
});
