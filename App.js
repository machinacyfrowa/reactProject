import React, { useState } from 'react';
/* import type {Node} from 'react'; */
import {
  StyleSheet,
  Text,
  View,
  Button,
  Linking,
  ScrollView,
  SafeAreaView,
  RefreshControl,
  FlatList,
  SectionList,
} from 'react-native';

const App /*: () => Node */ = () => {

  const [data, setData] = useState([
    { key: 1534, row: "Wiersz 1" },
    { key: 2454, row: "Wiersz 2" },
    { key: 3435, row: "Wiersz 3" },
    { key: 4543, row: "Wiersz 4" },
    { key: 435, row: "Wiersz 5" },
    { key: 6453, row: "Wiersz 6" },
    { key: 745, row: "Wiersz 7" },
    { key: 3458, row: "Wiersz 8" },
    { key: 9345, row: "Wiersz 9" },
    { key: 13450, row: "Wiersz 10" },
  ])

  const bigData = [
    {
      title: "Nazwa 1",
      data: ['Element 1-1', 'Element 1-2', 'Element 1-3'],
    },
    {
      title: "Nazwa 2",
      data: ['Element 2-1', 'Element 2-2', 'Element 2-3'],
    },
    {
      title: "Nazwa 3",
      data: ['Element 3-1', 'Element 3-2', 'Element 3-3'],
    },
  ]

  const [listRefreshing, setListRefreshing] = useState(false)

  const onListRefresh = () => {
    setListRefreshing(true)
    setData([...data, { key: 34511, row: "Wiersz 11" }])
    setListRefreshing(false)
  }

  return (
    <SafeAreaView style={styles.appMain}>
      <SectionList
        sections={bigData}
        keyExtractor={(item, index) => index}
        renderSectionHeader={({section}) => (
          <View style={styles.sectionHeader} >
            <Text style={styles.sectionText}>{section.title}</Text>
          </View>
        )}
        renderItem={({ item }) => (
          <View style={styles.row} >
            <Text style={styles.text}>{item}</Text>
          </View>
        )

        }
      />
      {/* <FlatList
        // horizontal
        refreshControl=
        {<RefreshControl
          refreshing={listRefreshing}
          onRefresh={onListRefresh}
        />}
        data={data}
        keyExtractor={(item, index) => index}
        renderItem={({item, index}) => (
          <View style={styles.row} >
                <Text style={styles.text}>(Index:{index}){'\n'}{item.row}{'\n'}(Klucz:{item.key})</Text>
          </View>
        )}
      /> */}
      {/* <ScrollView
        horizontal={false}
        refreshControl=
        {<RefreshControl
          refreshing={listRefreshing}
          onRefresh={onListRefresh}
        />}
      >
        {
          data.map((row) => {
            return (
              <View style={styles.row} key={row.key}>
                <Text style={styles.text}>{row.row}</Text>
              </View>
            )
          })
        }
      </ScrollView> */}
      {/* <View style={styles.row}>
        <Text>Item 1</Text>
      </View>
      <View style={styles.row}>
        <Text>Item 2</Text>
      </View>
      <View style={styles.row}>
        <Text>Item 3</Text>
      </View> */}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  appMain: {
    flex: 1,
    backgroundColor: '#387094',
  },
  sectionHeader: {
    backgroundColor: '#60a4d1',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
    padding: 40,
  },
  sectionText: {
    fontWeight: 'bold',
    fontSize: 30,
    color: '#ffffff',
  },  
  row: {
    backgroundColor: '#60a4d1',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
    padding: 20,

  },
  text: {
    color: '#ffffff',
  }
});

export default App;
