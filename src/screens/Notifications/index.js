import { View, Text, Button } from 'react-native'
import * as Notifications from 'expo-notifications'

export default function LocalNotification() {
    let name = '~ Seu nome na interpolação ~';

    const handleNotificationLocal = async () => {
        await Notifications.scheduleNotificationAsync({
            content: {
                title: 'Notificação Local',
                body: `Parabéns ${name}`,
                data: [],
            },
            trigger: {
                seconds: 2,
            }
        });
    }

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Notificações Locais</Text>
            <Button title='Enviar Notificação' onPress={handleNotificationLocal} />
        </View>
    )
}