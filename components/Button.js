import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import colors from '../assets/color';



class Button extends React.Component {
  render() {
    const { label, onPress } = this.props;
    return (
      <TouchableOpacity style={styles.container} onPress={onPress}>
        <Text style={styles.text}>{label}</Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: "92%",
    marginLeft:"4%",
    marginRight:"10%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.DODGER_BLUE,
    marginBottom: 12,
    paddingVertical: 12,
    borderRadius: 4,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: "rgba(255,255,255,0.7)"
  },
  text: {
    color: colors.WHITE,
    textAlign: "center",
    height: 20
    
  }
});

export default Button;