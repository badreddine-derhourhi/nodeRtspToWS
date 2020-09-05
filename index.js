Stream = require("node-rtsp-stream");
path = require("path");
require("ffmpeg");
stream = new Stream({
  name: "102",
  streamUrl: "rtsp://streamingLink",
  wsPort: 9999,
  ffmpegOptions: {
    "-stats": "",
    "-r": 30,
    "-codec:a": "mp2",
    "-ar": "44100",
    "-ac": "1",
    "-b:a": "128k",
  },
});
