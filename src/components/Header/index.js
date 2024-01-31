import { View, Text } from 'react-native'
import { Styles } from './style'

export const Header = () => {
    return (
        <View style={Styles.container}>
            <Text style={Styles.text}>
                Seja bem-vindo ao aplicativo!
            </Text>
        </View>
    )
}