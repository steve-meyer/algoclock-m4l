# Algoclock Max for Live Device

A Max for Live MIDI device inspired by [Rian Treanor's Clockalgo](https://djmag.com/longreads/studio-selections-rian-treanor).

## About

This Max for Live device generates algorithm clock pulses as MIDI notes.

### Requirements

#### Max 8.3

The device relies on the [Max 8.3](https://cycling74.com/products/new-in-max) object `[what~]`.

### Clock Algorithms

The clock algorithms are implemented in JavaScript and use [Node for Max](https://cycling74.com/articles/node-for-max-intro-%E2%80%93-let%E2%80%99s-get-started).

The [clockalgo.js](https://github.com/steve-meyer/clockalgo.js) node module produces the gate patterns. A description of how each algorithm is interpreted can be found in the project's README file.
