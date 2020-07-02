# react native random numbers generator

React Native app to generate three random numbers

### Install

```js
$ yarn
$ cd ios && pod install
```

### Run

```js
$ react-native run-ios
```

Or for Android open project /android folder in Android studio and run after gradle finishes building

### Storage

Current implementation stores generated numbers in memory, but you can easily switch to persistent storage with https://github.com/react-native-community/async-storage or any local DB.

You need to change the implementation of StorageService in services folder. The service's methods are already async, so you don't need to change anything except the StorageService itself.

Each new set of generated numbers is created with a unique ID, so you can store and retrieve specific combinations easily

### UI

UI can be changed by modifying src/theme folder or src/components folder.

### Genaration algorithms

You can alter number and unique ID generation functions by modifying src/utils/randomGenerators.ts
