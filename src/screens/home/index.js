import { View, Text } from 'react-native'
import { Header } from '../../components/Header'

// export default function Home() {
//     return (
//         <View style={{ flex: 1, paddingVertical: 35, backgroundColor: '#FFF' }} >

//             <Header />
//         </View>
//     )
// }

export default function Home() {
    return (
        <View style={{ flex: 1, paddingVertical: 35 }}>
            <Header />
            {/* <Text> Seja bem vindo ao app! </Text> */}
        </View>
    );
}