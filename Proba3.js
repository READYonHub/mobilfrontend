import React, { useEffect, useState } from "react";
import { FlatList, Text, View } from "react-native";
import { Picker } from "@react-native-picker/picker";
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
      <FlatList
        data={data}
        keyExtractor={({ id }) => id}
        renderItem={({ item }) => (
          <Text>
            {item.gyakorlat_nev}, {item.gyakorlat_img}
          </Text>
        )}
      />
    </View>
  );
};

export default App;
