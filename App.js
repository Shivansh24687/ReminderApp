import * as React from 'react';
import {
  View,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      newItem: '',
      listOfItems: [],
    };
  }
  addItem = () => {
    if (this.state.newItem != '') {
      const newItemJSON = {
        id: 1 + Math.random(),
        value: this.state.newItem.slice(),
      };
      //copy the current list into the list variable
      const list = this.state.listOfItems;

      //add new items into list
      list.push(newItemJSON);

      this.setState({
        listOfItems: list,
        newItem: '',
      });
    }
  };

  deleteItem(id) {
    //get all the list items
    const list = this.state.listOfItems;
    const updatedList = list.filter((item) => item.id !== id);
    this.setState({
      listOfItems: updatedList,
    });
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.textView}>
          <Text style={styles.text}>Reminder App</Text>
        </View>
        <Image
          style={styles.imageIcon}
          source={{
            uri: 'https://www.shareicon.net/data/128x128/2015/09/18/642868_time_512x512.png',
          }}
        />
        <View>
          <TextInput
            placeholder="Type list here"
            style={styles.textInputBox}
            onChangeText={(text) => {
              this.setState({ newItem: text });
            }}
            value={this.state.newItem}></TextInput>

          <View>
            <TouchableOpacity style={styles.button} onPress={this.addItem}>
              <Text style={styles.buttonText}>Enter List</Text>
            </TouchableOpacity>
          </View>
          <View>
            <ScrollView>
              {this.state.listOfItems.map((item) => {
                return (
                  <View styles={styles.listView}>
                    <Text style={styles.textStyle}>{item.value}</Text>
                    <TouchableOpacity
                      style={styles.deleteButton}
                      onPress={() => this.deleteItem(item.id)}>
                      <Text>Delete List</Text>
                    </TouchableOpacity>
                  </View>
                );
              })}
            </ScrollView>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    background: 'Cyan',
  },
  text: {
    marginTop: 30,
    alignItems: 'center',
    fontSize: 30,
    justifyContent: 'center',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  imageIcon: {
    width: 100,
    height: 100,
    marginLeft: 115,
    marginTop: 15,
  },
  textView: {
    backgroundColor: 'white',
    height: 80,
  },
  textInputBox: {
    backgroundColor: 'gold',
    height: 40,
    fontSize: 20,
    marginTop: 50,
  },
  button: {
    position: 'relative',
    left: 10,
    top: 90,
    backgroundColor: 'orange',
    width: 90,
    height: 60,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 8,
  },
  buttonText: {
    fontWeight: 'bold',
    fontSize: 15,
  },
  deleteButton: {
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
  textStyle: {
    fontSize: 25,
    fontColor: 'lime',
  },
  listView: {
    backgroundColor: 'red',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
