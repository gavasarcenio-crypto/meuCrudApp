import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
        padding: 16,
    },
    header: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 16,
        textAlign: 'center',
    },
    input: {
        height: 50,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 8,
        paddingHorizontal: 12,
        marginBottom: 16,
        backgroundColor: '#fff',
    },
    button: {
        backgroundColor: '#007BFF',
        paddingVertical: 12,
        borderRadius: 8,
        alignItems: 'center',
    },
    buttonText: {
        color: '#black',
        fontSize: 16,
        fontWeight: 'bold',
    },
    listItem: {
        backgroundColor: '#fff',
        padding: 16,
        borderRadius: 8,
        marginBottom: 12,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 2,
    },
    listItemText: {
        fontSize: 16,
        color: '#333',
    },
    footer: {
        marginTop: 'auto',
        padding: 16,
        borderTopWidth: 1,
        borderTopColor: '#ccc',
        alignItems: 'center',
    },
    footerText: {
        fontSize: 14,
        color: '#666',
    },
});

export default styles;