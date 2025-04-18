import { Modal, Pressable, Text, TextInput, View } from "react-native"
import { styles } from "./styles";
import { PrimaryButton } from "../PrimaryButton";
import { useState } from "react";

type IncomeModalProps = {
  visible?: boolean,
  onClose?: () => void,
  onSave: (data: { description: string; amount: number }) => void
}

export const TransactionModal: React.FC<IncomeModalProps> = ({ onSave, onClose, visible }) => {
  const [description, setDescription] = useState('')
  const [amount, setAmount] = useState('')
  const [loading, setLoading] = useState(false)

  const updateAmount = (text: string) => {
    setAmount(text)
  }

  const handleSave = async () => {
    setLoading(true)
    await new Promise(resolve => setTimeout(resolve, 2000))
    onSave({ description, amount: parseFloat(amount) })
    setDescription('')
    setAmount('')
    setLoading(false)
  }

  const handleClose = () => {
    setDescription('')
    setAmount('')
    onClose?.()
  }

  return (
    <Modal visible={visible} animationType="slide">
      <View style={styles.modalContent}>
        <Text style={styles.title}>Adicionar transação</Text>
        <Text>Descrição</Text>
        <TextInput
          style={styles.textInput}
          placeholder="Descrição da transação"
          value={description}
          onChangeText={setDescription}
        />

        <Text>Valor</Text>
        <TextInput
          style={styles.textInput}
          placeholder="Valor da transação"
          keyboardType="decimal-pad"
          value={amount.toString()}
          onChangeText={updateAmount}
        />

        <View style={styles.buttonsContainer}>
          <PrimaryButton text='Salvar transação' loading={loading} onPress={handleSave} />
          <Pressable onPress={handleClose} style={{ padding: 10 }}>
            <Text>Fechar</Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  )
}