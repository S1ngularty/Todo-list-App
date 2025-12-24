import React from "react";
import { Modal, Text, View, Alert, Pressable,StyleSheet} from "react-native";

export default function ModalComponent({ showModal, closeModal }) {
  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={showModal}
      onRequestClose={() =>
        Alert.alert(
          "Warning",
          "Want to close the modal?",
          [
            { text: "Cancel", style: "cancel" },
            { text: "OK", onPress: closeModal }
          ]
        )
      }
    >
      <View style={style.centeredView}>
        <View style={style.modalView}>
          <Text>Hello!</Text>
          <Pressable onPress={closeModal} style={[style.button,style.buttonOpen]}>
            <Text>Close the Modal</Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  );
}

const style = StyleSheet.create({
  centeredView:{
    flex:1,
    justifyContent:"center",
    alignItems:"center",
  },
  modalView:{
    height:200,
    width:200,
    justifyContent:"space-around",
    alignItems:"center",
    backgroundColor:"lightblue",
    shadowColor:"#000",
    borderRadius:10,
    shadowOffset:{
      with:0,
      height:2
    }
  },
   button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
})