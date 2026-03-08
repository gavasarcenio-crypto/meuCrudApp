import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { Audio } from "expo-av";
import styles from "../styles/Styles";

export default function MusicItem({ item, navigation }) {
    const playMusic = async () => {
        try {
            const { sound } = await 
            Audio.Sound.createAsync(
                { uri: item.url },
                { shouldPlay: true }
            );
        } catch (error) {
            console.error("Erro ao tocar musica:", error);
        }
    };

    return (
        <View style={styles.card}>
            <Image
                source={{uri : item.art}}
                style={styles.musicArt}
            />
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.artist}>{item.artist}</Text>
            <Text style={styles.album}>{item.album} ({item.release})
            </Text>
            <TouchableOpacity style={styles.button} onPress={playMusic}>
                <Text style={styles.buttonText}>▶ Tocar</Text>
            </TouchableOpacity>

        </View>
    );
}
