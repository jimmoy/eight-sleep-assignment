# EightSleep

Jim Moy implementation of the [exercise](https://docs.google.com/document/d/16ZvMKD4lSTu0x9exnBb4VY8_rAK0t4WplnaaNChD6VM/edit).

## Build

The normal process works on iOS:
```
$ yarn
$ react-native run-ios
```

I had an issue with the charting package on Android, victory-native, which has
a dependency on react-native-svg, which has build issues with the latest
version of the packages that required me to open the `android` sub-project of
my repo in Android Studio, and then have it "fix" up an SDK build version by
attempting to build, then clicking an "Update" link in the Sync messages tab.

I'm not sure if this will be needed each time a clean repo is built, but 
I'm guessing it could be automated by diffing the react-native-svg directory
in node_modules before and after the update, and see what needs to be adjusted.
