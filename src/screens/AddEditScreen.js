import React, { useState, useEffect } from 'react';
import { View, TextInput, TouchableOpacity, Text, ScrollView } from 'react-native';
import styles from '../styles/Styles';
import { addMusic, updateMusic } from '../services/MusicService';

export default function AddEditScreen({ navigation }) {
    const [title, setTitle] = useState('');
    const [artist, setArtist] = useState('');
    const [album, setAlbum] = useState('');
    const [release, setRelease] = useState('');

    const saveMusic = async () => {
        const music = { title, artist, album, release };
        
        await addMusic(music);
        navigation.goBack();
    }

    return (
        <ScrollView style={styles.container}>
            <Text style={[styles.homeTitle, { marginTop: 24, marginBottom: 32 }]}>
                ✨ Adicionar Música
            </Text>
            <TextInput
                style={styles.input}
                placeholder="Título da música"
                placeholderTextColor="#64748B"
                value={title}
                onChangeText={setTitle}
            />
            <TextInput
                style={styles.input}
                placeholder="Artista"
                placeholderTextColor="#64748B"
                value={artist}
                onChangeText={setArtist}
            />
            <TextInput
                style={styles.input}
                placeholder="Álbum"
                placeholderTextColor="#64748B"
                value={album}
                onChangeText={setAlbum}
            />
            <TextInput
                style={styles.input}
                placeholder="Ano de lançamento"
                placeholderTextColor="#64748B"
                value={release}
                onChangeText={setRelease}
                keyboardType="numeric"
            />
            <TouchableOpacity style={[styles.button, { marginTop: 28 }]} onPress={saveMusic}>
                <Text style={styles.buttonText}>💾 Salvar Música</Text>
            </TouchableOpacity>
        </ScrollView>
    );
}