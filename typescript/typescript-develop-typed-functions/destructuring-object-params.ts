interface Message {
  text: string;
  sender: string;
}

const displayMessage = ({ text, sender }: Message) => {
  console.log(`Message from ${sender}: ${text}`);
};

displayMessage({ sender: 'Christopher', text: 'hello, world' });
