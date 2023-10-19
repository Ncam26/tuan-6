import * as React from "react";
import { AiOutlineRight } from "react-icons/ai";
import { Button, Image, Pressable, StyleSheet, Text, View } from "react-native";

export default function Screen01({ navigation, route }) {
  React.useEffect(() => {
    if (route.params?.post) {
      // Post updated, do something with `route.params.post`
      // For example, send the post to the server
    }
  }, [route.params?.post]);

  return (
    <View style={styles.container}>
      <View style={styles.image}>
        <Image
          style={styles.vsBlue}
          contentFit="cover"
          source={require("../assets/vs_blue.png")}
        />
      </View>
      <View style={styles.giaodien}>
        <Text style={[styles.titlePhone, styles.muChnMu1Typo]}>
          Điện Thoại Vsmart Joy 3 - Hàng chính hãng
        </Text>
        <View style={styles.gia}>
          <Text style={[styles.text, styles.texttext]}>1.790.000 đ</Text>
          <Text style={[styles.text1, styles.texttext]}>2.790.000 đ</Text>
        </View>
        <Text style={[ styles.texttext]}>
          Ở ĐÂU RẺ HƠN HOÀN TIỀN
        </Text>
      </View>
        <View style={styles.giua}>
          <Text style={styles.textContent}>4 MÀU-CHỌN MÀU</Text>
          <View style={styles.iconContainer}>
            <AiOutlineRight />
          </View>
        </View>
      <View style={[styles.button]}>
        <Button title="CHỌN MUA" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flex: 1,
    width: "100%",
    height: "100%",
    overflow: "hidden",
  },
  giaodien: {
    flex1: 1,
  },
  titlePhone: {
    marginTop: 10,
    marginLeft: 10,
  },
  
  muChnMu: {
    borderRadius: 5,
    border: "1px solid #000",
    textAlign: "center",
  },
  giua: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    fontSize: 20,
    
  },
  textContent: {
    flex: 1,
    textAlign: "center",
    fontSize: 20,
  },
  gia: {
    flexDirection: "row",
  },
 
  text: {
     color: "#000",
    fontFamily: "Roboto-Bold",
   
  },
  text1: {
    marginTop: 10,
    marginLeft: 10,
    color: "rgba(0, 0, 0, 0.58)",
    fontSize: 15,
    fontWeight: "700",
  },
  texttext: {
    textAlign: "left",
    fontSize: 20,
    fontFamily: "Roboto-Bold",
    fontWeight: "700",
  },
  button {
    marginTop: 50,
    marginLeft: "5%",
    width: "90%",
  },
  chonmua: {
    top: 12,
    left: 106,
    fontSize: 20,
    color: "#f9f2f2",
  },
  vsBlue: {
    resizeMode: "contain", 
    width: "100%", 
    height: "100%",
  },
  image: {
    width: "100%",
    height: "55%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#C0C0C0",
  },
});