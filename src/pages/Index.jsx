// Complete the Index page component here
// Use chakra-ui
import { Box, VStack, Input, Text, Button, useToast } from "@chakra-ui/react";
import { useState } from "react";
import { FaEdit, FaSave, FaCheckCircle } from "react-icons/fa";

const Index = () => {
  const [inputs, setInputs] = useState([
    { id: 0, value: "Start with a basic introduction to the system.", isEditable: false },
    { id: 1, value: "Explain how the editable textboxes work.", isEditable: false },
    { id: 2, value: "Describe the purpose of chaining outputs.", isEditable: false },
    { id: 3, value: "Conclude with the benefits of finding errors in reasoning.", isEditable: false },
  ]);

  const toast = useToast();

  const handleEdit = (id) => {
    const newInputs = inputs.map((input) => {
      if (input.id === id) {
        return { ...input, isEditable: true };
      }
      return input;
    });
    setInputs(newInputs);
  };

  const handleSave = (id, value) => {
    const newInputs = inputs.map((input) => {
      if (input.id === id) {
        return { ...input, value, isEditable: false };
      }
      return input;
    });
    setInputs(newInputs);
    toast({
      title: "Changes saved.",
      description: "The reasoning step has been updated successfully.",
      status: "success",
      duration: 3000,
      isClosable: true,
    });
  };

  const handleChange = (id, value) => {
    const newInputs = inputs.map((input) => {
      if (input.id === id) {
        return { ...input, value };
      }
      return input;
    });
    setInputs(newInputs);
  };

  return (
    <Box p={5}>
      <VStack spacing={4}>
        {inputs.map((input) => (
          <Box key={input.id} p={4} borderWidth="1px" borderRadius="lg" w="100%">
            {input.isEditable ? (
              <>
                <Input value={input.value} onChange={(e) => handleChange(input.id, e.target.value)} placeholder="Type here..." />
                <Button mt={2} leftIcon={<FaSave />} colorScheme="blue" onClick={() => handleSave(input.id, input.value)}>
                  Save
                </Button>
              </>
            ) : (
              <>
                <Text>{input.value}</Text>
                <Button mt={2} leftIcon={<FaEdit />} colorScheme="teal" onClick={() => handleEdit(input.id)}>
                  Edit
                </Button>
              </>
            )}
          </Box>
        ))}
      </VStack>
    </Box>
  );
};

export default Index;
