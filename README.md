instalar as dependencias para o projeto funcionar

git clone https://github.com/gavasarcenio-crypto/meuCrudApp.git
cd meuCrudApp

npm install @react-navigation/native
npm install react-native-screens react-native-safe-area-context
npm install @react-navigation/native-stack

npx expo install expo-audio

npm install -g json-server
npx json-server --watch src/data/music.json --port 3000
