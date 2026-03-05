import data from '../data/music.json';

    let musics = data.musics;

    export const getMusics = () => {
        return musics;
    }

    export const getMusicById = (id) => {
        return musics.find(music => music.id === id);
    }

    export const addMusic = (music) => {
        music.id = musics.length + 1;
        musics.push(music);
    }

    export const updateMusic = (id, updatedMusic) => { 
        const index = musics.findIndex(music => music.id === id);
        if (index !== -1) {
            musics[index] = { ...musics[index], ...updatedMusic };
        }
    }
    
    export const deleteMusic = (id) => {
        musics = musics.filter(music => music.id !== id);
    }
    