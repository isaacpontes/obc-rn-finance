import { ActivityIndicator, Pressable, Text } from 'react-native';
import { styles } from './styles';

type PrimaryButtonProps = {
  text: string,
  loading?: boolean,
  onPress?: () => void
}

export const PrimaryButton: React.FC<PrimaryButtonProps> = ({ text, loading, onPress }) => {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        styles.button,
        { backgroundColor: pressed ? '#232323' : '#2C5F30' },
      ]}
    >
      {loading && <ActivityIndicator size="small" color="#FFF" />}
      {!loading && (
        <Text style={styles.buttonText}>
          {text}
        </Text>
      )}
    </Pressable>
  )
}