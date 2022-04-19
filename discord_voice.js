//We need this in order to be able to log to a file
const fs = require('fs');

//Since we have no actual implementation we forward the calls to the blob
const Nodule = require('./discord_voice.node');

//Full path to the log file
const logLocation = "/tmp/log";

//This function takes JSON objects and pretty-prints them
function logObject(object) {
  //The JSON spec doesn't allow for undefined values but JSON.stringify allows us to do operations as its second argument so we rename it to __undefined and then back to undefined
  return JSON.stringify(object, (k, v) => (v === undefined) ? '__undefined' : v, 2).replace(/"__undefined"/g, 'undefined');
}

//What do we want to do when the connection is too slow?
DegradationPreference = {
  MAINTAIN_RESOLUTION: 0,
  MAINTAIN_FRAMERATE: 1,
  BALANCED: 2,
  DISABLED: 3
};

//The entry point of the module
function initialize(options) {
  fs.appendFileSync(logLocation, '\n' + new Date().toLocaleTimeString() + ' initialize was called with options:\n' + logObject(options) + '\n');
  Nodule.initialize(options);
  return;
}

function setOnVoiceCallback(voiceCallback) {
  fs.appendFileSync(logLocation, '\n' + new Date().toLocaleTimeString() + ' setOnVoiceCallback was called and provided with a callback\n');
  Nodule.setOnVoiceCallback(voiceCallback);
  return;
}

//Called upon entering and leaving Voice & Video settings. enabled is true while you are there and false when you leave, playback is true when you click Let's Check and options are noise reduction options
function setEmitVADLevel(enabled, playback, options) {
  fs.appendFileSync(logLocation, '\n' + new Date().toLocaleTimeString() + ' setEmitVADLevel was called with' + '\nenabled:' + enabled + ' \nplayback:' + playback + ' \noptions:' + logObject(options) + '\n');
  Nodule.setEmitVADLevel(enabled, playback, options);
  return;
}

function setTransportOptions(options) {
  fs.appendFileSync(logLocation, '\n' + new Date().toLocaleTimeString() + ' setTransportOptions was called with options:\n' + logObject(options) + '\n');
  Nodule.setTransportOptions(options);
  return;
}

function setDeviceChangeCallback(deviceCallback) {
  fs.appendFileSync(logLocation, '\n' + new Date().toLocaleTimeString() + ' setDeviceChangeCallback was called and provided with a callback\n');
  Nodule.setDeviceChangeCallback(deviceCallback);
  return;
}

//If the Linux capabilities are declared supported, we need these two functions bellow
function setOutputDevice(device) {
  fs.appendFileSync(logLocation, '\n' + new Date().toLocaleTimeString() + ' setOutputDevice was called with device name: ' + device + '\n');
  Nodule.setOutputDevice(device);
  return;
}

function setInputDevice(device) {
  fs.appendFileSync(logLocation, '\n' + new Date().toLocaleTimeString() + ' setInputDevice was called with device name: ' + device + '\n');
  Nodule.setInputDevice(device);
  return;
}

//Set the webcam V4L device
function setVideoInputDevice(device) {
  fs.appendFileSync(logLocation, '\n' + new Date().toLocaleTimeString() + ' setVideoInputDevice was called with device name: ' + device + '\n');
  Nodule.setVideoInputDevice(device);
  return;
}

function getInputDevices(deviceCallback) {
  fs.appendFileSync(logLocation, '\n' + new Date().toLocaleTimeString() + ' getInputDevices was called and provided with a callback\n');
  Nodule.getInputDevices(deviceCallback);
  return;
}

function getOutputDevices(deviceCallback) {
  fs.appendFileSync(logLocation, '\n' + new Date().toLocaleTimeString() + ' getOutputDevices was called and provided with a callback\n');
  Nodule.getOutputDevices(deviceCallback);
  return;
}

function getVideoInputDevices(deviceCallback) {
  fs.appendFileSync(logLocation, '\n' + new Date().toLocaleTimeString() + ' getVideoInputDevices was called and provided with a callback\n');
  Nodule.getVideoInputDevices(deviceCallback);
  return;
}

//Needed when testing webcam
function setVideoOutputSink(streamIdentifier, onFrame, waitForReadySignal) {
  fs.appendFileSync(logLocation, '\n' + new Date().toLocaleTimeString() + ' setVideoOutputSink was called with' + '\nstreamIdentifier:' + streamIdentifier + ' \nonFrame:' + onFrame + ' \nwaitForReadySignal:' + waitForReadySignal + '\n');
  Nodule.setVideoOutputSink(streamIdentifier, onFrame, waitForReadySignal);
  return;
}

//These two are needed when testing camera after we declare the Linux caps as supported
function addDirectVideoOutputSink(streamIdentifier) {
  fs.appendFileSync(logLocation, '\n' + new Date().toLocaleTimeString() + ' addDirectVideoOutputSink was called with streamIdentifier: ' + streamIdentifier + '\n');
  Nodule.addDirectVideoOutputSink(streamIdentifier);
  return;
}

function removeDirectVideoOutputSink(streamIdentifier) {
  fs.appendFileSync(logLocation, '\n' + new Date().toLocaleTimeString() + ' removeDirectVideoOutputSink was called with streamIdentifier: ' + streamIdentifier + '\n');
  Nodule.removeDirectVideoOutputSink(streamIdentifier);
  return;
}

function signalVideoOutputSinkReady(streamIdentifier) {
  fs.appendFileSync(logLocation, '\n' + new Date().toLocaleTimeString() + ' signalVideoOutputSinkReady was called with streamIdentifier: ' + streamIdentifier + '\n');
  Nodule.signalVideoOutputSinkReady(streamIdentifier);
  return;
}

function setImageDataAllocator(allocator) {
  fs.writeFileSync(logLocation, new Date().toLocaleTimeString() + ' setImageDataAllocator was called with allocator:\n' + allocator + '\n');
  Nodule.setImageDataAllocator(allocator);
  return;
}

//The two functions bellow are used in the voice settings to set the user's microphone and speaker volume
function setInputVolume(volume) {
  fs.appendFileSync(logLocation, '\n' + new Date().toLocaleTimeString() + ' setInputVolume was called with volume: ' + volume + '\n');
  Nodule.setInputVolume(volume);
  return;
}

function setOutputVolume(volume) {
  fs.appendFileSync(logLocation, '\n' + new Date().toLocaleTimeString() + ' setOutputVolume was called with volume: ' + volume + '\n');
  Nodule.setOutputVolume(volume);
  return;
}

//This function is stubbed on the blob, thus we stub it too
function setVolumeChangeCallback(callback) {
  fs.appendFileSync(logLocation, '\n' + new Date().toLocaleTimeString() + ' setVolumeChangeCallback was called and provided with a callback\n');
  return;
}

function setNoInputThreshold(threshold) {
  fs.appendFileSync(logLocation, '\n' + new Date().toLocaleTimeString() + ' setNoInputThreshold was called with threshold: ' + threshold + '\n');
  Nodule.setNoInputThreshold(threshold);
  return;
}

function setNoInputCallback(noInputCallback) {
  fs.appendFileSync(logLocation, '\n' + new Date().toLocaleTimeString() + ' setNoInputCallback was called and provided with a callback\n');
  Nodule.setNoInputCallback(noInputCallback);
  return;
}

function getSupportedVideoCodecs(codecCallback) {
  fs.appendFileSync(logLocation, '\n' + new Date().toLocaleTimeString() + ' getSupportedVideoCodecs was called and provided with a callback\n');
  Nodule.getSupportedVideoCodecs(codecCallback)
  return;
}

//Called rarely by Discord with an array of the regions and their IPs to rank regions by latency and then cached. If we don't implement this it prints its not supported and retries next time
function rankRtcRegions(regionsIps, rankRtcRegionsCallback) {
  fs.appendFileSync(logLocation, '\n' + new Date().toLocaleTimeString() + ' rankRtcRegions was called with a callback and regionsIps:\n' + logObject(regionsIps) + '\n');
  Nodule.rankRtcRegions(regionsIps, rankRtcRegionsCallback);
  return;
}

class VoiceConnection{
  constructor(userId, connectionOptions, onConnectCallback) {
      fs.appendFileSync(logLocation, '\n' + new Date().toLocaleTimeString() + ' VoiceConnection was called with\nuserId:' + userId + '\nconnectionOptions:' + logObject(connectionOptions) + '\nonConnectCallback: Callback\n');
  }

  setDesktopSourceStatusCallback(statusCallback) {
    fs.appendFileSync(logLocation, '\n' + new Date().toLocaleTimeString() + ' VoiceConnection.setDesktopSourceStatusCallback was called and provided with a callback\n');
  }

  setTransportOptions(options) {
     fs.appendFileSync(logLocation, '\n' + new Date().toLocaleTimeString() + ' VoiceConnection.setTransportOptions was called with options:\n' + logObject(options) + '\n');
  }

  setSelfMute(muted) {
    fs.appendFileSync(logLocation, '\n' + new Date().toLocaleTimeString() + ' VoiceConnection.setSelfMute was called with muted: ' + muted + '\n');
  }

  setSelfDeafen(deafened) {
    fs.appendFileSync(logLocation, '\n' + new Date().toLocaleTimeString() + ' VoiceConnection.setSelfDeafen was called with deafened: ' + deafened + '\n');
  }

  setLocalMute(userId, muted) {
    fs.appendFileSync(logLocation, '\n' + new Date().toLocaleTimeString() + ' VoiceConnection.setLocalMute was called with userId: ' + userId + '\nmuted: ' + muted + '\n');
  }

  //Seems to be a mostly pointless call since even with a stub it still destroys the call just fine
  destroy() {
    fs.appendFileSync(logLocation, '\n' + new Date().toLocaleTimeString() + ' VoiceConnection.destroy was called\n');
  }

  //Seems to be a mostly pointless call since even with a stub it still destroys the screenshare just fine
  clearDesktopSource() {
    fs.appendFileSync(logLocation, '\n' + new Date().toLocaleTimeString() + ' VoiceConnection.clearDesktopSource was called\n');
  }

  getFilteredStats(filter, statsCallback) {
    fs.appendFileSync(logLocation, '\n' + new Date().toLocaleTimeString() + ' VoiceConnection.getFilteredStats was called with filter: ' + filter + '\nstatsCallback: Callback\n');
  }

  setVideoBroadcast(broadcasting) {
    fs.appendFileSync(logLocation, '\n' + new Date().toLocaleTimeString() + ' VoiceConnection.setVideoBroadcast was called with broadcasting: ' + broadcasting + '\n');
  }
 }

//We export the functions so Discord can call them
exports.DegradationPreference = DegradationPreference;
exports.initialize = initialize;
exports.setOnVoiceCallback = setOnVoiceCallback;
exports.setEmitVADLevel = setEmitVADLevel;
exports.setTransportOptions = setTransportOptions;
exports.setDeviceChangeCallback = setDeviceChangeCallback;
exports.setOutputDevice = setOutputDevice;
exports.setInputDevice = setInputDevice;
exports.setVideoInputDevice = setVideoInputDevice;
exports.getOutputDevices = getOutputDevices;
exports.getInputDevices = getInputDevices;
exports.getVideoInputDevices = getVideoInputDevices;
exports.setVideoOutputSink = setVideoOutputSink;
exports.addDirectVideoOutputSink = addDirectVideoOutputSink;
exports.removeDirectVideoOutputSink = removeDirectVideoOutputSink;
exports.signalVideoOutputSinkReady = signalVideoOutputSinkReady;
exports.setImageDataAllocator = setImageDataAllocator;
exports.setInputVolume = setInputVolume;
exports.setOutputVolume = setOutputVolume;
exports.setVolumeChangeCallback = setVolumeChangeCallback;
exports.setNoInputThreshold = setNoInputThreshold;
exports.setNoInputCallback = setNoInputCallback;
exports.getSupportedVideoCodecs = getSupportedVideoCodecs;
exports.rankRtcRegions = rankRtcRegions;
exports.VoiceConnection = VoiceConnection;
