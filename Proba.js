<<<<<<< HEAD
import React, { useEffect, useState } from "react";
import { ActivityIndicator, FlatList, Text, View } from "react-native";
import Ipcim from "./Ipcim";

const App = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const getMovies = async () => {
    try {
      const response = await fetch(Ipcim.Ipcim + "gyakorlatok");
      const json = await response.json();
      setData(json);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <View style={{ flex: 1, padding: 24 }}>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <FlatList
          data={data}
          keyExtractor={({ id }) => id}
          renderItem={({ item }) => (
            <Text>
              {item.gyakorlat_nev}, {item.gyakorlat_img}
            </Text>
          )}
        />
      )}
=======
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Proba = ({route}) => {
 

  return (
    <View style={styles.container}>
      <Text>Próba képernyője</Text>
     
>>>>>>> a0e08b727f093fdab518131f321e5fb65d076027
    </View>
  );
};

<<<<<<< HEAD
export default App;
=======
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Proba;
>>>>>>> a0e08b727f093fdab518131f321e5fb65d076027
