import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { getMusic } from '../services/MusicService';
import MusicItem from '../components/MusicItem';
import styles from '../styles/Styles';

export default function MusicScreen({ navigation }) {

  const [musicList, setMusicList] = useState([]);

  useEffect(() => {
    loadMusic();
  }, []);

  const loadMusic = async () => {

    try {

      const data = await getMusic();

      if (data) {
        setMusicList(data);
      }

    } catch (error) {

      console.error("Error loading music:", error);

    }

  };

  const ListHeaderComponent = () => (

    <View style={{ marginBottom: 20 }}>

      <Text style={[styles.homeTitle, { marginTop: 8 }]}>
        🎵 Suas Músicas
      </Text>

      <Text style={[styles.homeSubtitle, { marginBottom: 0 }]}>
        {musicList.length} música{musicList.length !== 1 ? 's' : ''}
      </Text>

    </View>

  );

  return (

    <View style={styles.container}>

      <FlatList
        data={musicList}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <MusicItem item={item} navigation={navigation} />
        )}
        ListHeaderComponent={ListHeaderComponent}
        ListEmptyComponent={
          <View style={[styles.centerContent, { marginTop: 100 }]}>
            <Text style={styles.homeSubtitle}>
              Nenhuma música adicionada ainda
            </Text>

            <TouchableOpacity
              style={[styles.button, { marginTop: 20 }]}
              onPress={() => navigation.navigate('AddMusic')}
            >
              <Text style={styles.buttonText}>
                + Adicionar Primeira Música
              </Text>

            </TouchableOpacity>

          </View>
        }
      />

    </View>

  );
                }

