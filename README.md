# Algoclock Max for Live Device

A Max for Live MIDI device inspired by [Rian Treanor's Clockalgo](https://djmag.com/longreads/studio-selections-rian-treanor).

## About

This Max for Live device generates algorithm clock pulses as MIDI notes.

![Screenshot of Algoclock Max for Live device](/docs/images/m4l-algoclock-screenshot.png)

### Requirements

#### Max 8.3

The device relies on the [Max 8.3](https://cycling74.com/products/new-in-max) object `[what~]`.

### Clock Algorithms

The clock algorithms are implemented in JavaScript and use [Node for Max](https://cycling74.com/articles/node-for-max-intro-%E2%80%93-let%E2%80%99s-get-started).

The [clockalgo.js](https://github.com/steve-meyer/clockalgo.js) node module produces the gate patterns. A description of how each algorithm is interpreted can be found in the project's README file.

## Installation

To install the device:

1. Download a [tagged release](https://github.com/steve-meyer/algoclock-m4l/tags)
2. Uncompress the zip file or tarball
3. Move the uncompressed folder to the location for your Max for Live MIDI presets
4. Open Ableton Live and look for "Algoclock" under **Max MIDI Effect**

On a Mac, for example, the file should be moved here:

```<USER HOME FOLDER>/Music/Ableton/User Library/Presets/MIDI Effects/Max MIDI Effect/```

Note that it may take a moment for Live to rescan the MIDI effect device folder and detect the new file `Algoclock.amxd`.
