import React from 'react';
import { StatusBar, ImageBackground, View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import COLORS from '../../assets/Colors';

const Bai2_FlexBox = () => {
  return (
    <>
      <StatusBar translucent backgroundColor="transparent" />
      <ImageBackground
        source={{ uri: 'https://i.pinimg.com/564x/d5/9a/63/d59a63cc883820ced036c184e5f95968.jpg' }}
        style={styles.backgroundImage}
        resizeMode="cover"
      >
        <View style={styles.container}>
          <Text style={styles.text}>Đại bàng</Text>
          <Text style = {styles.title}>Chim đại bàng biểu tượng cho sức mạnh, lòng can đảm, tầm nhìn xa và sự bất tử. Nếu như sư tử là chúa sơn lâm,
           cá mập là sát thủ của biển khơi thì loài đại bàng vàng từ lâu cũng được mệnh danh là chúa tể bầu trời với sức mạnh của mình.
          </Text>
          <TouchableOpacity style={styles.styleButton}>
            <Text style={styles.styleTextButton}>Explore now!</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 30,
  },
  text: {
    fontSize: 40,
    color: COLORS.GREEN,
    fontFamily: 'poppins-bold',
    marginBottom: 15,
  },
  title: {
    fontSize: 15,
    color: COLORS.WHITE,
    fontWeight: 'bold'
  },
  styleButton: {
    width: 170,
    padding: 10,
    backgroundColor: COLORS.WHITE,
    borderRadius: 10,
    marginTop: 10
  },
  styleTextButton: {
    color: COLORS.HEX_BLACK,
    fontFamily: 'poppins-bold',
    fontSize: 20,
    textAlign: 'center'
  },
});

export default Bai2_FlexBox;
