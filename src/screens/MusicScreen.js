import {View, Text, StyleSheet, Button} from 'react-native';
import { getMusicById, deleteMusic } from '../services/MusicService';

export default function MusicScreen({ route, navigation }) {
    const { musicId } = route.params;
    const music = getMusicById(musicId);

    const handleDelete = () => {
        deleteMusic(musicId);
        navigation.goBack();
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{music.title}</Text>
            <Text style={styles.artist}>{music.artist}</Text>
            <Text style={styles.album}>{music.album}</Text>
            <Text style={styles.release}>{music.release}</Text>
            <Button title="Edit" onPress={() => navigation.navigate('EditMusic', { music })} />
            <Button title="Delete" onPress={handleDelete} color="red" />
        </View>
    );
}