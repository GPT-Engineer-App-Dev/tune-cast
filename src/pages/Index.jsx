import { Container, VStack, Text, Box, Image, Button } from "@chakra-ui/react";
import { FaPlay, FaPlus } from "react-icons/fa";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Box boxSize="sm">
          <Image src="/images/music-streaming-logo.png" alt="Music Streaming Logo" />
        </Box>
        <Text fontSize="4xl" fontWeight="bold">Welcome to MusicStream</Text>
        <Text fontSize="xl" textAlign="center">Stream your favorite music anytime, anywhere.</Text>
        <Button leftIcon={<FaPlay />} colorScheme="teal" size="lg">Start Listening</Button>
        <Link to="/create-playlist">
          <Button leftIcon={<FaPlus />} colorScheme="teal" size="lg">Create Playlist</Button>
        </Link>
      </VStack>
    </Container>
  );
};

export default Index;