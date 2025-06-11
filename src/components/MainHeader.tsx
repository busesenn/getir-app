import { View, Image, Dimensions, Text, TouchableOpacity } from 'react-native';
import Entypo from '@expo/vector-icons/Entypo';
import { colors } from '../Types';

export function MainHeader() {
    const { height } = Dimensions.get("window")
    return (
        <View style={{ height: height * .064, backgroundColor: "#f7d102" }}>
            <View style={{ backgroundColor: "white", width: "80%", height: height * .064, borderTopRightRadius: 50, borderBottomRightRadius: 50, flexDirection: "row", }}>
                <Image source={{ uri: "https://media.istockphoto.com/id/1145840259/tr/vekt%C3%B6r/ev-d%C3%BCz-simge-pixel-m%C3%BCkemmel-mobil-ve-web-i%C3%A7in.jpg?s=612x612&w=0&k=20&c=OSkXHaDERgtT-qbHGngKrFHErgzkfkcF7h4tnzUP3BY=" }} style={{ width: 35, height: 35, marginTop: 13, borderRightWidth: 3, borderColor: "#f3f2fd", marginLeft: 6 }} />
                <TouchableOpacity style={{ flexDirection: "row", alignItems: "center" }}>
                    <Text style={{ marginLeft: 8, fontWeight: 600, fontSize: 16 }}>Ev</Text>
                    <Text style={{ marginLeft: 6, color: "gray", fontWeight: 500, fontSize: 11 }}>Dedepaşa Blv. Yenişehir Mahallesi...</Text>
                    <Entypo name="chevron-right" size={24} color={colors.mainColor} style={{ marginLeft: 40 }} />
                </TouchableOpacity>

                <TouchableOpacity style={{ alignItems: "center", justifyContent: "center", marginLeft: 40 }}>
                    <Text style={{ fontSize: 10, fontWeight: "bold", color: colors.mainColor }}>TVS</Text>
                    <Text style={{ fontSize: 20, fontWeight: "bold", color: colors.mainColor }}>13<Text style={{ fontSize: 16 }}>dk</Text> </Text>
                </TouchableOpacity>
            </View>

        </View>
    );
}

