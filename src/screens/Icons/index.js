import { View, Text } from "react-native";
import { AntDesign } from '@expo/vector-icons'

export default function Icons() {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text> Icones na aplicação </Text>

            <View
                style={{
                    width: 60,
                    height: 60,
                    borderRadius: 10,
                    backgroundColor: '#9c6de3',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginTop: 10,
                }}
            >
                <AntDesign name="exclamationcircle" size={24} color="black" />
            </View>
            <View
                style={{
                    width: 60,
                    height: 60,
                    borderRadius: 10,
                    backgroundColor: '#9c6de3',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginTop: 10,
                }}
            >
                <AntDesign name="filter" size={24} color="black" />
                <Text>Filtro</Text>
            </View>
        </View>
    )
}

