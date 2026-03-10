const API = "https://192.168.15.7:3000/music";

export const getMusic = async () => {     
  try {
    const response = await fetch(API);
    return response.json();
    if (!response.ok) {
const API = "https://192.168.15.7:3000/music";

export const getMusic = async () => {
  try {

    const response = await fetch(API);

    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }

    const data = await response.json();

    console.log("Músicas carregadas:", data);

    return data;

  } catch (error) {

    console.error("Error fetching music:", error);
    return [];

  }
};

export const addMusic = async (music) => {

  try {

    const response = await fetch(API, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(music)
    });

    return response.json();

  } catch (error) {

    console.error("Error adding music:", error);
    throw error;

  }
};

export const updateMusic = async (id, music) => {

  try {

    const response = await fetch(`${API}/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(music)
    });

    return response.json();

  } catch (error) {

    console.error("Error updating music:", error);
    throw error;

  }
};

export const deleteMusic = async (id) => {

  try {

    const response = await fetch(`${API}/${id}`, {
      method: "DELETE"
    });

    return response;

  } catch (error) {

    console.error("Error deleting music:", error);
    throw error;

  }

};
y {
    return fetch(`${API}/${id}`, {
        method: "DELETE"
    });
  } catch (error) {    console.error("Error deleting music:", error);
    throw error;
  }};
  
