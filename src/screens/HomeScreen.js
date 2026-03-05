import {View, Text, FlatList, StyleSheet, Button} from 'react-native';
import {useEffect, useState} from 'react';
import MusicItem from '../components/MusicItem';
import {getMusics, deleteMusic} from '../services/MusicService';

export default function HomeScreen({ navigation }) {
    const [musics, setMusics] = useState([]);

    useEffect(() => {
        loadMusics();
    }, []);

    const loadMusics = () => {
        const data = getMusics();
        setMusics(data);
    }

    const handleDelete = (id) => {
        deleteMusic(id);
        loadMusics();
    }

    return (
        <View style={styles.container}>
            <Button title="Add Music" onPress={() => navigation.navigate('AddMusic')} />
            <FlatList
                data={musics}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <MusicItem music={item} onEdit={(music) => navigation.navigate('EditMusic', { music })} onDelete={handleDelete} />
                )}
            />
        </View>
    );
}