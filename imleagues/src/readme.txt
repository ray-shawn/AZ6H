Follow the following steps to run it: 
1. npm install
2. react-native run-android or run-ios

Note that you may want to install extension for visual code like ESLint and React Native Tools.

2. Error:Execution failed for task ':app:processDebugResources'. > java.io.IOException: Could not delete folder “” in android studio
    Try the following: 
    cd android && gradlew clean && cd .. && react-native run-android   