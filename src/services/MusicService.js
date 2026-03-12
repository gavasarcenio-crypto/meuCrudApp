
const API = "https://musicapi123123.loca.lt";

export const getMusic = async () => {
  try {

    const response = await fetch(API);

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
