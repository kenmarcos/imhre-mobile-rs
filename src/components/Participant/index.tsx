import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";

interface ParticipantProps {
  name: string;
  onRemoveParticipant: () => void;
}

export const Participant = ({
  name,
  onRemoveParticipant,
}: ParticipantProps) => {
  const handleRemoveParticipant = () => {
    onRemoveParticipant();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.name}>{name}</Text>

      <TouchableOpacity style={styles.button} onPress={handleRemoveParticipant}>
        <Text style={styles.buttonText}>-</Text>
      </TouchableOpacity>
    </View>
  );
};
