# Webview Heading Finder
A React Native application to traverse headings (h1 to h6) in a webview (tested using [Detox](https://github.com/wix/Detox)).

## Installation
1. ### Clone this repository
```git clone https://github.com/ToluThomas/webview-heading-finder.git```

2. ### Install dependencies
```npm i && npx pod-install```

3. ### Run the app
- #### iOS
```npm run ios```

- #### android
```npm run android```

## Usage
Tap the "Next" button to navigate downward to the nearest heading tag, or tap the "Previous" button to navigate upwards to the nearest heading tag. The currently focused heading tag is highlighted with a blue border around the text.
