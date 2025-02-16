import * as WebBrowser from 'expo-web-browser';

// ... other code ...

const handlePress = async () => {
  let result = await WebBrowser.openBrowserAsync('https://example.com');
  console.log('Result: ', result);
};

// ... rest of the component ...