import { View, Text } from 'react-native';
import Lottieview from 'lottie-react-native';

export default function Lottie() {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Animações com Lottie</Text>
            <Lottieview style={{ width: 100, height: 100 }} autoPlay source={require('../../../loadingJson.json')} />
            <Lottieview style={{ width: 100, height: 100 }} autoPlay source={require('../../../successJson.json')} />

        </View>
    )
}