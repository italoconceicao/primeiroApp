import { useState } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import * as ImagePicker from 'expo-image-picker';


export default function Images() {
    const [image, setImage] = useState('https://www.ahnegao.com.br/wp-content/uploads/2024/02/imgaleat-6ko-3.jpg')
    const handleImagePicker = async () => {
        const result = await ImagePicker.launchImageLibraryAsync({
            aspect: [4, 4],
            allowsEditing: true,
            base64: true,
            quality: 1,
        });

        if (!result.canceled) {
            setImage(result.assets[0].uri);
        }
    }

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Imagens</Text>
            <Image source={{ uri: image }}
                style={{ width: 100, height: 100, borderRadius: 50, margin: 15 }} />
            <TouchableOpacity onPress={handleImagePicker}>
                <Text style={{ margin: 15 }}>[ ESCOLHER IMAGEM ]</Text>
            </TouchableOpacity>
        </View>
    )
}