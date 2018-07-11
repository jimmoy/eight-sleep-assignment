# EightSleep

Jim Moy implementation of the
[exercise](https://docs.google.com/document/d/16ZvMKD4lSTu0x9exnBb4VY8_rAK0t4WplnaaNChD6VM/edit).

- Massaged the stage data in each interval, for each user
- Back-end fetch, store resulting data and app state in Redux
- All rendering in client

## Build

The normal process works on iOS:
```
$ yarn
$ react-native run-ios
```

Also works on Android, however:

In the current latest versions of the victory-native charting
package and its dependency react-native-svg, there are some
build issues which required the following:

- Open the `android` sub-project of the repo in Android Studio
- Build
- See an "Update" link in the Sync messages tab
- Click the link to complete the modification of SDK version

I'm not sure if this will be needed each time a clean repo is
built, but I'm guessing it could be automated by diffing the
react-native-svg directory in node_modules before and after the
update, and see what needs to be adjusted.
