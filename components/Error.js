import { Alert } from 'react-native';
// Styles
import ErrorStyles from '../styles/ErrorStyles'

export function Error(title,err) {
  Alert.alert(title, err, [
    {
      text: 'Cancel',
      style: 'cancel',
    },
    {text: 'OK'},
  ]);
}
