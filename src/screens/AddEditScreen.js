import {View, Text, StyleSheet, TextInput, Button} from 'react-native';
import { useState } from 'react';
import { addMusic, updateMusic } from '../services/MusicService';

export default function AddEditScreen({ route, navigation }) {
    const music = route.params?.music;
    const [title, setTitle] = useState(music ? music.title : '');
    const [artist, setArtist] = useState(music ? music.artist : '');
    const [album, setAlbum] = useState(music ? music.album : '');
    const [release, setRelease] = useState(music ? music.release : '');
    const [art, setArt] = useState(music ? music.art : '');
    const [audio, setAudio] = useState(music ? music.audio : '');

    const handleSave = () => {
        if (music) {
            updateMusic(music.id, { title, artist, album, release, art, audio });
        } else {
            addMusic({ title, artist, album, release, art, audio });
        }
        navigation.goBack();
    }

    return (
        <View style={styles.container}>
            <TextInput placeholder="Title" value={title} onChangeText={setTitle} style={styles.input} />
            <TextInput placeholder="Artist" value={artist} onChangeText={setArtist} style={styles.input} />
            <TextInput placeholder="Album" value={album} onChangeText={setAlbum} style={styles.input} />
            <TextInput placeholder="Art URL" value={art} onChangeText={setArt} style={styles.input} />
            <TextInput placeholder="Audio URL" value={audio} onChangeText={setAudio} style={styles.input} />
            <TextInput placeholder="Release Year" value={release} onChangeText={setRelease} style={styles.input} keyboardType="numeric" />
            <Button title="Save" onPress={handleSave} />
        </View>
    );
}