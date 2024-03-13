import messages from './messages.json';

// Define a type for the message structure
type Message = {
    "id": string;
    "date": string; //yyyy-mm-dd
    "en": string;
    "pt-BR": string;
};

// Export the messages with the correct type
export default messages as Message[];
