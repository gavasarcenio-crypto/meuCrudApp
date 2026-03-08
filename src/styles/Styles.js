import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    // ===== CONTAINERS & LAYOUTS =====
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: '#0F172A',
    },
    homeContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        paddingHorizontal: 24,
    },

    // ===== HOME SCREEN =====
    homeTitle: {
        fontSize: 42,
        fontWeight: '800',
        color: '#fff',
        marginBottom: 16,
        textAlign: 'center',
        letterSpacing: -1,
    },
    homeSubtitle: {
        fontSize: 18,
        color: 'rgba(255, 255, 255, 0.85)',
        marginBottom: 48,
        textAlign: 'center',
        lineHeight: 24,
        fontWeight: '500',
    },

    // ===== BUTTONS =====
    button: {
        backgroundColor: '#8B5CF6',
        paddingVertical: 16,
        paddingHorizontal: 32,
        borderRadius: 12,
        marginTop: 14,
        marginBottom: 12,
        shadowColor: '#8B5CF6',
        shadowOffset: { width: 0, height: 8 },
        shadowOpacity: 0.35,
        shadowRadius: 16,
        elevation: 12,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '700',
        letterSpacing: 0.5,
    },

    // ===== CARDS =====
    card: {
        backgroundColor: '#1E293B',
        padding: 18,
        borderRadius: 16,
        marginBottom: 14,
        marginHorizontal: 4,
        borderLeftWidth: 4,
        borderLeftColor: '#8B5CF6',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.25,
        shadowRadius: 8,
        elevation: 6,
    },

    // ===== TYPOGRAPHY - MUSIC ITEMS =====
    title: {
        fontSize: 20,
        fontWeight: '700',
        color: '#F1F5F9',
        marginBottom: 6,
        marginTop: 8,
        letterSpacing: 0.2,
    },
    artist: {
        fontSize: 16,
        color: '#CBD5E1',
        marginBottom: 4,
        fontWeight: '500',
    },
    album: {
        fontSize: 13,
        color: '#94A3B8',
        marginBottom: 12,
        fontWeight: '400',
        fontStyle: 'italic',
    },

    // ===== GENERIC TYPOGRAPHY =====
    subtitle: {
        fontSize: 16,
        color: '#CBD5E1',
        marginBottom: 12,
        fontWeight: '500',
    },
    logo: {
        fontSize: 28,
        fontWeight: '900',
        marginBottom: 24,
        width: 120,
        height: 120,
        borderRadius: 60,
        backgroundColor: '#8B5CF6',
        color: '#fff',
        textAlign: 'center',
        textAlignVertical: 'center',
        shadowColor: '#8B5CF6',
        shadowOffset: { width: 0, height: 8 },
        shadowOpacity: 0.4,
        shadowRadius: 16,
        elevation: 12,
    },

    // ===== INPUTS =====
    input: {
        backgroundColor: '#1E293B',
        padding: 14,
        paddingLeft: 16,
        borderRadius: 10,
        marginBottom: 14,
        fontSize: 16,
        color: '#F1F5F9',
        borderWidth: 1.5,
        borderColor: '#475569',
        fontFamily: 'System',
    },
    inputFocus: {
        borderColor: '#8B5CF6',
        backgroundColor: '#1E293B',
        shadowColor: '#8B5CF6',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.2,
        shadowRadius: 8,
        elevation: 4,
    },

    // ===== IMAGES =====
    musicArt: {
        width: 64,
        height: 64,
        borderRadius: 10,
        marginBottom: 12,
        backgroundColor: '#475569',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 3,
    },

    // ===== UTILITY STYLES =====
    centerContent: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    rowSpaceBetween: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    spacer: {
        marginBottom: 20,
    },
});

export default styles;