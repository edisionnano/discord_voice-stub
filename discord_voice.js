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

//The entry point of the module
function initialize(options) {
  fs.appendFileSync(logLocation, '\n' + new Date().toLocaleTimeString() + ' initialize was called with options:\n' + logObject(options) + '\n');
  Nodule.initialize(options);
  return;
}

function setImageDataAllocator(allocator) {
  fs.writeFileSync(logLocation, new Date().toLocaleTimeString() + ' setImageDataAllocator was called with allocator:\n' + allocator + '\n');
  Nodule.setImageDataAllocator(allocator);
  return;
}

function VoiceConnection(userId, connectionOptions, onConnectCallback) {
  fs.appendFileSync(logLocation, '\n' + new Date().toLocaleTimeString() + ' VoiceConnection was called with\nuserId:' + userId + '\nconnectionOptions:' + logObject(connectionOptions) + '\nonConnectCallback: Callback\n');
  this.userId = userId;
  this.connectionOptions = connectionOptions;
  this.onConnectCallback = onConnectCallback;
  instance = new Nodule.VoiceConnection(userId, connectionOptions, onConnectCallback);
  return(instance);
}

function setDeviceChangeCallback(deviceCallback) {
  fs.appendFileSync(logLocation, '\n' + new Date().toLocaleTimeString() + ' setDeviceChangeCallback was called and provided with a callback\n');
  Nodule.setDeviceChangeCallback(deviceCallback);
  return;
}

//This function is stubbed on the blob, thus we stub it too
function setVolumeChangeCallback(callback) {
  fs.appendFileSync(logLocation, '\n' + new Date().toLocaleTimeString() + ' setVolumeChangeCallback was called and provided with a callback\n');
  return;
}

function setOnVoiceCallback(voiceCallback) {
  fs.appendFileSync(logLocation, '\n' + new Date().toLocaleTimeString() + ' setOnVoiceCallback was called and provided with a callback\n');
  Nodule.setOnVoiceCallback(voiceCallback);
  return;
}

function setTransportOptions(options) {
  fs.appendFileSync(logLocation, '\n' + new Date().toLocaleTimeString() + ' setTransportOptions was called with options:\n' + logObject(options) + '\n');
  Nodule.setTransportOptions(options);
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

//The above stubs are the bare minimum in order to be able to load the page, don't forget to also block sentry.io on your hosts file

//Called upon entering and leaving Voice & Video settings. enabled is true while you are there and false when you leave, playback is true when you click Let's Check and options are noise reduction options
function setEmitVADLevel(enabled, playback, options) {
  fs.appendFileSync(logLocation, '\n' + new Date().toLocaleTimeString() + ' setEmitVADLevel was called with' + '\nenabled:' + enabled + ' \nplayback:' + playback + ' \noptions:' + logObject(options) + '\n');
  Nodule.setEmitVADLevel(enabled, playback, options);
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

//If the Linux capabilities are declared supported, we need these two functions bellow
function setInputDevice(device) {
  fs.appendFileSync(logLocation, '\n' + new Date().toLocaleTimeString() + ' setInputDevice was called with device name: ' + device + '\n');
  Nodule.setInputDevice(device);
  return;
}

function setOutputDevice(device) {
  fs.appendFileSync(logLocation, '\n' + new Date().toLocaleTimeString() + ' setOutputDevice was called with device name: ' + device + '\n');
  Nodule.setOutputDevice(device);
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

//What do we want to do when the connection is too slow?
DegradationPreference = {
  MAINTAIN_RESOLUTION: 0,
  MAINTAIN_FRAMERATE: 1,
  BALANCED: 2,
  DISABLED: 3
};

function getSupportedVideoCodecs(codecCallback) {
  fs.appendFileSync(logLocation, '\n' + new Date().toLocaleTimeString() + ' getSupportedVideoCodecs was called and provided with a callback\n');
  Nodule.getSupportedVideoCodecs(codecCallback)
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

function setVideoInputDevice(device) {
  fs.appendFileSync(logLocation, '\n' + new Date().toLocaleTimeString() + ' setVideoInputDevice was called with device name: ' + device + '\n');
  Nodule.setVideoInputDevice(device);
  return;
}

function signalVideoOutputSinkReady(streamIdentifier) {
  fs.appendFileSync(logLocation, '\n' + new Date().toLocaleTimeString() + ' signalVideoOutputSinkReady was called with streamIdentifier: ' + streamIdentifier + '\n');
  Nodule.signalVideoOutputSinkReady(streamIdentifier);
  return;
}

//Called rarely by Discord with an array of the regions and their IPs to rank regions by latency and then cached. If we don't implement this it prints its not supported and retries next time
function rankRtcRegions(regionsIps, rankRtcRegionsCallback) {
  fs.appendFileSync(logLocation, '\n' + new Date().toLocaleTimeString() + ' rankRtcRegions was called with a callback and regionIps: ' + logObject(regionIps) + '\n');
  Nodule.signalVideoOutputSinkReady(regionIps, rankRtcRegionsCallback);
  return;
}

//We export the functions so Discord can call them
exports.initialize = initialize;
exports.setImageDataAllocator = setImageDataAllocator;
exports.VoiceConnection = VoiceConnection;
exports.setDeviceChangeCallback = setDeviceChangeCallback;
exports.setVolumeChangeCallback = setVolumeChangeCallback;
exports.setOnVoiceCallback = setOnVoiceCallback;
exports.setTransportOptions = setTransportOptions;
exports.setInputVolume = setInputVolume;
exports.setOutputVolume = setOutputVolume;
exports.setEmitVADLevel = setEmitVADLevel;
exports.getInputDevices = getInputDevices;
exports.getOutputDevices = getOutputDevices;
exports.getVideoInputDevices = getVideoInputDevices;
exports.setVideoOutputSink = setVideoOutputSink;
exports.setInputDevice = setInputDevice;
exports.setOutputDevice = setOutputDevice;
exports.addDirectVideoOutputSink = addDirectVideoOutputSink;
exports.removeDirectVideoOutputSink = removeDirectVideoOutputSink;
exports.DegradationPreference = DegradationPreference;
exports.getSupportedVideoCodecs = getSupportedVideoCodecs;
exports.setNoInputThreshold = setNoInputThreshold;
exports.setNoInputCallback = setNoInputCallback;
exports.setVideoInputDevice = setVideoInputDevice;
exports.signalVideoOutputSinkReady = signalVideoOutputSinkReady;
exports.rankRtcRegions = rankRtcRegions;