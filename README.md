# discord_voice.node Stub
This project creates a JavaScript module that replaces discord_voice.node (which is a native module), logs calls to it in a file (Man In The Middle/mitm approach) and then forwards them back to discord_voice.node since the JavaScript module doesn't actually implement them (also known as a stub).

## Usage
Find index.js and replace discord_voice.node on the first line with discord_voice.js. Make sure to save discord_voice.js from this repository to the same directory as discord_voice.node. This directory is on ~/.config/discord(ptb or canary if you don't have stable)/client_version(this is a version number, for example 0.0.17 on the latest stable client)/modules/discord_voice. If you have the Snap version search inside the snap folder on your home folder, Ubuntu or based distro users that installed discord from a .deb file may have the snap version.

## Status
I've only implemented functions that I've seen called on electron's console. If you are on stable Discord, ctrl+shift+i won't work without modifications like BetterDiscord, thus ptb or canary is recommended. If you find Discord calling a function not implemented, open an issue. Find the latest status of implemented functions broken down [here](https://docs.google.com/spreadsheets/d/e/2PACX-1vSjSwT1s1Ll7FhGkJeB8wAKuqUBBbcyEq9QJIlVGep791uZXhd4Px7J2NYrta3X_68A_87iSDSUIAhC/pubhtml#).
