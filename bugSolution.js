import * as WebBrowser from 'expo-web-browser';

// ... other code ...

const handlePress = async () => {
  let result = await WebBrowser.openBrowserAsync('https://example.com');

  // Check if result contains the expected properties before accessing them.
  if (result && result.type && result.url) {
    console.log('Result: ', result);
    if (result.type === 'success') {
      // Handle successful navigation.
    } else {
      // Handle unsuccessful navigation (e.g., user cancelled).
    }
  } else {
    console.error('Unexpected result from WebBrowser.openBrowserAsync:', result);
    // Implement alternative error handling strategy.
  }
};

// ... rest of the component ...