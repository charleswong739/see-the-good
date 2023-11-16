# See The Good

A high fidelity prototype made for the "See The Good" project for CSC318 at the University of Toronto. This project runs on [**React Native**](https://reactnative.dev).

## Setup

### Step 1: Configure development environment

Completed the [React Native - Environment Setup](https://reactnative.dev/docs/environment-setup) instructions until the "Creating a new application" step.

## Running the Application

### Step 1: Start the Metro Server

First, you will need to start **Metro**, the JavaScript _bundler_ that ships _with_ React Native.

To start Metro, run the following command from the _root_ of your React Native project:

```bash
# using npm
npm start

# OR using Yarn
yarn start
```

### Step 2: Start your Application

Let Metro Bundler run in its _own_ terminal. Open a _new_ terminal from the _root_ of your React Native project. Run the following command to start your _Android_ or _iOS_ app:

#### For Android

```bash
# using npm
npm run android

# OR using Yarn
yarn android
```

#### For iOS

```bash
# using npm
npm run ios

# OR using Yarn
yarn ios
```

If everything is set up _correctly_, you should see your new app running in your _Android Emulator_ or _iOS Simulator_ shortly provided you have set up your emulator/simulator correctly.
