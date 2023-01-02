# Eventer App

## Development

First, make sure to have the following installed on your system:

-   Node.js and NPM
-   Ruby and Bundler (for Fastlane)
-   Python 3 (for scripts)
-   For iOS development:
    -   Xcode 12
    -   Homebrew
-   For Android development:
    -   Java 11+

To bootstrap a development environment, run `scripts/setup --ios` or `scripts/setup --android`, depending on which platform you want to build for. This should e.g. generate the corresponding Xcode project and install the required dependencies.

To run the application, you can now e.g. use `npm run ios` or `npm run android`, or directly run the project from Xcode, in case you develop for iOS.

To build the application from the command line, you can use the provided build lanes with `fastlane`, or invoke `xcodebuild`/`gradle` directly. Refer to the [CI workflows](.github/workflows) for examples.

For further instructions, check out [the official docs](https://reactnative.dev/docs/environment-setup).

### Android Studio

If you prefer to run the android app using Android Studio, follow these steps instead:

-   Import the `android` subfolder of the project into Android Studio
-   Open a terminal and navigate to the project root using `cd ..`
-   Run `npx react-native run-android` in the terminal to start the JS server
-   Build and run the app
-   Try the app in the emulator
