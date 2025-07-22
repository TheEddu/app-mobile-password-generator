import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    backgroundColor: '#1A1A1A',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  logoContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 40,
    padding: 20,
    backgroundColor: '#2B2B2B',
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
  },
  inputContainer: {
    width: '100%',
    maxWidth: 350,
  },
});




export default styles;



