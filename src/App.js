import React from "react";
// import "./App.css";
import { Recorder } from "react-voice-recorder";
import "react-voice-recorder/dist/index.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      audioDetails: {
        url: null,
        blob: null,
        chunks: null,
        duration: {
          h: 0,
          m: 0,
          s: 0,
        },
      },
    };
  }

  handleAudioStop(data) {
    try {
      this.setState({ audioDetails: data });
      const bufferPromise = data.blob.arrayBuffer();
      bufferPromise.then((Response) => {
        // const decoder = new TextDecoder("utf-8");

        // const decodedData = decoder.decode(new Int16Array(Response));
        const view = new Int32Array(Response);
        console.log(view);
      });
    } catch (error) {
      console.log(error);
    }
  }
  handleAudioUpload(file) {
    console.log(file);
  }
  handleReset() {
    const reset = {
      url: null,
      blob: null,
      chunks: null,
      duration: {
        h: 0,
        m: 0,
        s: 0,
      },
    };
    this.setState({ audioDetails: reset });
  }

  render() {
    return (
      <div>
        <Recorder
          record={true}
          title={"New recording"}
          audioURL={this.state.audioDetails.url}
          showUIAudio
          handleAudioStop={(data) => {
            this.handleAudioStop(data);
          }}
          handleAudioUpload={(data) => this.handleAudioUpload(data)}
          handleReset={() => this.handleReset()}
          mimeTypeToUseWhenRecording={`audio/webm`}
        />
      </div>
    );
  }
}

export default App;

// export { buffer };
