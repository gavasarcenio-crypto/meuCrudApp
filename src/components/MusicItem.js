import {Text, View, TouchableOpacity, StyleSheet, Image} from 'react-native';

export default function MusicItem({ music, onEdit, onDelete }) {
    return (
        <View style={styles.itemContainer}>
            <Text style={styles.title}>{music.title}</Text>
            <Text style={styles.artist}>{music.artist}</Text>
            <View style={styles.buttonsContainer}>
                <TouchableOpacity onPress={() => onEdit(music)} style={styles.editButton}>
                    <Text style={styles.buttonText}>Edit</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => onDelete(music.id)} style={styles.deleteButton}>
                    <Text style={styles.buttonText}>Delete</Text>
                </TouchableOpacity>
                <Image source={{ uri: music.art }} style={styles.art} />

            </View>
            <View style={styles.musicartist}>
                <Text style={styles.album}>{music.album}</Text>
            </View>
        </View>
    );
}