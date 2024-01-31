import { FlatList, View, Text } from "react-native";

const DATA = [
    {
        id: '1',
        task: 'Fazer Compras',
        done: false,
    },
    {
        id: '2',
        task: 'Ir ao shopping',
        done: true,
    },
    {
        id: '3',
        task: 'Passear com o Cachorro',
        done: true,
    },
    {
        id: '4',
        task: 'Ligar para o meu tio',
        done: false,
    },
    {
        id: '5',
        task: 'Fazer Compras',
        done: false,
    },
    {
        id: '6',
        task: 'Ir ao shopping',
        done: true,
    },
    {
        id: '7',
        task: 'Passear com o Cachorro',
        done: true,
    },
    {
        id: '8',
        task: 'Ligar para o meu tio',
        done: false,
    },
    {
        id: '9',
        task: 'Fazer Compras',
        done: false,
    },
    {
        id: '10',
        task: 'Ir ao shopping',
        done: true,
    },
    {
        id: '11',
        task: 'Passear com o Cachorro',
        done: true,
    },
    {
        id: '12',
        task: 'Ligar para o meu tio',
        done: false,
    },
    {
        id: '13',
        task: 'Fazer Compras',
        done: false,
    },
    {
        id: '14',
        task: 'Ir ao shopping',
        done: true,
    },
    {
        id: '15',
        task: 'Passear com o Cachorro',
        done: true,
    },
    {
        id: '16',
        task: 'Ligar para o meu tio',
        done: false,
    },
];

export const Lists = () => {
    return (
        <View style={{ flex: 1, paddingVertical: 60, paddingLeft: 10 }}>
            <FlatList
                data={DATA /* array de informações da lista */}
                renderItem={({ item, index }) => (
                    <View style={{ width: '80%', height: 40, borderWidth: 1, borderColor: item.done ? 'green' : 'red', marginVertical: 10 }}>
                        <Text> {item.task} </Text>
                    </View>
                )}
                keyExtractor={item => item.id}
            />


        </View>
    )
}

// FlatList recebe três propriedades: DATA, RENDER ITEM, KEY STRACTOR
// Existe também SectionList e FlashList