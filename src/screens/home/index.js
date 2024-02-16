import { View, Text, TouchableOpacity, FlatList } from 'react-native'
import { Header } from '../../components/Header'
import { useNavigation } from '@react-navigation/native'

const DATA = [
    {
        id: 1,
        name: 'Listas',
        routeName: 'Lists',
    },
    {
        id: 2,
        name: 'Icones',
        routeName: 'Icons',
    },
    {
        id: 3,
        name: 'Mapa',
        routeName: 'Map',
    },
    {
        id: 4,
        name: 'Lottie',
        routeName: 'Lottie',
    },
    {
        id: 5,
        name: 'Animations',
        routeName: 'Animations',
    },
    {
        id: 6,
        name: 'Images',
        routeName: 'Images',
    }
]

export default function Home() {
    const { navigate } = useNavigation();
    return (
        <View style={{ flex: 1, paddingVertical: 60, paddingLeft: 10 }}>
            <FlatList
                data={DATA /* array de informações da lista */}
                numColumns={3} /*exige o marginHorizontal*/
                renderItem={({ item, index }) => (
                    <TouchableOpacity
                        activeOpacity={0.6}
                        onPress={() => {
                            navigate(item.routeName)
                        }}

                        style={{
                            width: 100,
                            height: 100,
                            alignItems: 'center',
                            justifyContent: 'center',
                            margin: 10,
                            borderRadius: 10,
                            backgroundColor: '#1E90FF'
                        }}>
                        <Text style={{ color: '#FFF' }}> {item.name} </Text>
                    </TouchableOpacity>
                )
                }
                keyExtractor={(item) => item.id}
            />


        </View >
    );
}