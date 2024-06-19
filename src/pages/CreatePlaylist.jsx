import { useState } from "react";
import { Container, VStack, Heading, Input, Button, Box, Text, List, ListItem, IconButton } from "@chakra-ui/react";
import { FaPlus, FaTrash } from "react-icons/fa";

const CreatePlaylist = () => {
  const [playlistName, setPlaylistName] = useState("");
  const [song, setSong] = useState("");
  const [songs, setSongs] = useState([]);

  const addSong = () => {
    if (song.trim() !== "") {
      setSongs([...songs, song]);
      setSong("");
    }
  };

  const removeSong = (index) => {
    setSongs(songs.filter((_, i) => i !== index));
  };

  const handleSubmit = () => {
    // Handle playlist creation logic here
    console.log("Playlist Created:", { playlistName, songs });
  };

  return (
    <Container centerContent>
      <VStack spacing={4} mt={10}>
        <Heading>Create a New Playlist</Heading>
        <Input
          placeholder="Playlist Name"
          value={playlistName}
          onChange={(e) => setPlaylistName(e.target.value)}
        />
        <Box width="100%">
          <Input
            placeholder="Add a song"
            value={song}
            onChange={(e) => setSong(e.target.value)}
          />
          <Button leftIcon={<FaPlus />} colorScheme="teal" onClick={addSong} mt={2}>
            Add Song
          </Button>
        </Box>
        <List spacing={3} width="100%">
          {songs.map((song, index) => (
            <ListItem key={index} display="flex" justifyContent="space-between" alignItems="center">
              <Text>{song}</Text>
              <IconButton
                icon={<FaTrash />}
                colorScheme="red"
                onClick={() => removeSong(index)}
              />
            </ListItem>
          ))}
        </List>
        <Button colorScheme="teal" size="lg" onClick={handleSubmit}>
          Create Playlist
        </Button>
      </VStack>
    </Container>
  );
};

export default CreatePlaylist;