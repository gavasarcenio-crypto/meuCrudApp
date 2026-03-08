import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from '../styles/Styles';

export default function HomeScreen({ navigation }) {
    return (
        <View style={styles.homeContainer}>
            <Text style={styles.homeTitle}>Bem-vindo ao Music Manager</Text>
            <Text style={styles.homeSubtitle}>Gerencie sua coleção de músicas facilmente</Text>
            <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate('Music')}
            >
                <Text style={styles.buttonText}>Ver Músicas</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate('AddMusic')}
            >
                <Text style={styles.buttonText}>Adicionar Música</Text>
            </TouchableOpacity>
        </View>
    );
}