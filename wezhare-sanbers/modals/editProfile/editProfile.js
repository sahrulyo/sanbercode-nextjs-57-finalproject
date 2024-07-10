import { useState } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Button,
} from "@chakra-ui/react";

const EditProfile = ({ isOpen, onClose, user }) => {
  const [password, setPassword] = useState('');
  const [about, setAbout] = useState(user.about || '');

  const handleSubmit = () => {
    // Implement submit logic here (e.g., update password and about)
    console.log('Submitted: Password -', password, 'About -', about);
    onClose(); // Close modal after submit
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="lg">
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Edit Profile</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <FormControl mb={4}>
            <FormLabel>Password</FormLabel>
            <Input
              type="password"
              placeholder="Enter new password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </FormControl>
          <FormControl mb={4}>
            <FormLabel>About</FormLabel>
            <Textarea
              placeholder="Tell something about yourself"
              value={about}
              onChange={(e) => setAbout(e.target.value)}
            />
          </FormControl>
        </ModalBody>

        <ModalFooter>
          <Button variant="outline" mr={3} onClick={onClose}>
            Close
          </Button>
          <Button colorScheme="blue" onClick={handleSubmit}>
            Save Changes
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default EditProfile;
