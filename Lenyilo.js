<<<<<<< HEAD
import React, { useEffect, useState } from "react";
import { ActivityIndicator, FlatList, Text, View, Button } from "react-native";
import { Picker } from "@react-native-picker/picker";
import Ipcim from "./Ipcim";
=======
import React, {useEffect, useState} from 'react';
import {ActivityIndicator, FlatList, Text, View, Button} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import Ipcim from './Ipcim'
>>>>>>> a0e08b727f093fdab518131f321e5fb65d076027

const App = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
<<<<<<< HEAD
  const [selectedSeged, setselectedSeged] = useState();

  const getMovies = async () => {
    try {
      const response = await fetch(Ipcim.Ipcim + "felhasznalo_cel");
=======
  const [selectedSeged, setSelectedSeged] = useState();

  const getMovies = async () => {
    try {
      const response = await fetch(Ipcim.Ipcim+'segedtabla');
>>>>>>> a0e08b727f093fdab518131f321e5fb65d076027
      const json = await response.json();
      setData(json);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

<<<<<<< HEAD
  const kattintas = () => {
    alert(selectedSeged);
  };
=======
  const kattintas=()=>{
    alert(selectedSeged)
  }

>>>>>>> a0e08b727f093fdab518131f321e5fb65d076027

  useEffect(() => {
    getMovies();
  }, []);

  return (
<<<<<<< HEAD
    <View style={{ flex: 1, padding: 24 }}>
      <Picker
        selectedValue={selectedSeged}
        onValueChange={(itemValue, itemIndex) => setselectedSeged(itemValue)}
      >
        {data.map((item) => {
          return <Picker.Item label={item.cel_elnevezes} value={item.cel_id} />;
        })}
      </Picker>
      <Button onPress={() => kattintas()} title="Teszt" />
=======
    <View style={{flex: 1, padding: 24}}>

<Picker
  selectedValue={selectedSeged}
  onValueChange={(itemValue, itemIndex) =>
    setSelectedSeged(itemValue)
  }>
{data.map((item)=>{
        return(
            <Picker.Item label={item.seged_nev} value={item.seged_id} />
        
	)}
	)}


</Picker>


<Button
        onPress={() => kattintas()}
        title="Teszt"
      />
      

>>>>>>> a0e08b727f093fdab518131f321e5fb65d076027
    </View>
  );
};

<<<<<<< HEAD
export default App;
=======
export default App;
>>>>>>> a0e08b727f093fdab518131f321e5fb65d076027
