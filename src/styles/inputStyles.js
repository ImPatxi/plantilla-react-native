import { StyleSheet } from 'react-native';
import Colors from '../constants/Colors';

// Estilos externos para los inputs de texto
export const inputStyles = StyleSheet.create({
  input: {
    backgroundColor: Colors.surface,
    width: '100%', // Ancho del 100% para ocupar el contenedor
  }
});

// Tema personalizado para los inputs de texto
export const inputTheme = {
  colors: {
    primary: Colors.primary,
    text: Colors.text,
    placeholder: Colors.text,
    background: Colors.surface,
  }
};
