import {
  Alert,
  FlatList,
  // ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { styles } from "./styles";
import { Participant } from "../../components/Participant";
import { useState } from "react";

const participantList: string[] = [];

export const Home = () => {
  const [participants, setParticipants] = useState(participantList);
  const [participantInput, setParticipantInput] = useState("");

  const handleChangeParticipantInput = (text: string) => {
    setParticipantInput(text);
  };

  const handleAddParticipant = () => {
    if (participants.includes(participantInput)) {
      return Alert.alert(
        "Participante existente",
        "Ja existe um participante com esse nome."
      );
    }

    if (participantInput === "") {
      return Alert.alert(
        "Participante vazio",
        "Por favor, insira o nome do participante."
      );
    }

    setParticipants((currentState) => [...currentState, participantInput]);

    setParticipantInput("");
  };

  const isParticipantInputEmpty = participantInput === "";

  const removeParticipant = () => {
    console.log("Remover Participante");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>Nome do Evento</Text>

      <Text style={styles.eventDate}>Sexta, 24 de Maio de 2024</Text>

      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Nome do participante"
          placeholderTextColor="#6B6B6B"
          keyboardType="default" // não necessário
          onChangeText={handleChangeParticipantInput}
          value={participantInput}
        />

        <TouchableOpacity
          style={[
            styles.button,
            isParticipantInputEmpty ? styles.disabledButton : null,
          ]}
          onPress={handleAddParticipant}
          disabled={isParticipantInputEmpty}
        >
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>

      {/* <ScrollView showsVerticalScrollIndicator={false}>
        {participants.map((participant) => (
          <Participant
            key={participant}
            name={participant}
            onRemoveParticipant={removeParticipant}
          />
        ))}
      </ScrollView> */}

      <FlatList
        data={participants}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <Participant name={item} onRemoveParticipant={removeParticipant} />
        )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <Text style={styles.listEmptyText}>
            Ninguém chegou no evento ainda? Adicione participantes a sua lista
            de presença.
          </Text>
        )}
      />
    </View>
  );
};
