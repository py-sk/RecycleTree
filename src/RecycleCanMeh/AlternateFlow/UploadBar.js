import React, { Component } from "react";
import { DropzoneDialog } from "material-ui-dropzone";
import Button from "@material-ui/core/Button";
import axios from "axios";
import ResultsPanel from "./ResultsPanel"

export default class UploadBar extends Component {

  constructor(props) {
    super(props);
    this.state = {
      open: false,
      files: [],
      previews: [],
      mat_prediction: null,
      metal_prediction: null,
      plastic_prediction: null,
      paper_prediction: null,
      glass_prediction: null,
      others_prediction: null,
      preds: []
    };
  }

  imageAPICall(image) {
    var formData = new FormData();
    formData.append("file", image);
    axios
      .post("http://f6713efe06ce.ngrok.io/predict", formData)
      .then((res) => {
        this.state.preds = res.data['Predict']
        this.setState({
          open: false,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  handleClose() {
    this.setState({
      open: false,
    });
  }

  handleSave(files) {
    this.setState({
      files: files,
      preview: URL.createObjectURL(files[0]),
      open: false,
    });
    this.imageAPICall(files[0])
  }

  handleOpen() {
    this.setState({
      open: true,
    });
  }

  render() {
    if (this.state.files.length === 0) {
      return (
        <div>
          <Button color="secondary" variant="contained" onClick={this.handleOpen.bind(this)}>Upload Image</Button>
          <DropzoneDialog
            open={this.state.open}
            onSave={this.handleSave.bind(this)}
            acceptedFiles={["image/jpeg", "image/png", "image/bmp"]}
            showPreviews={true}
            maxFileSize={5000000}
            onClose={this.handleClose.bind(this)}
            filesLimit={1}
          />
          <ResultsPanel mat={this.state.preds[0]} metal = {this.state.preds[1]} paper = {this.state.preds[3]} plastic = {this.state.preds[2]} others = {this.state.preds[5]} glass = {this.state.preds[4]} preview = {this.state.preview} />
        </div>
      );
    } else {
      return (
        <div>
          <ResultsPanel mat={this.state.preds[0]} metal = {this.state.preds[1]} paper = {this.state.preds[3]} plastic = {this.state.preds[2]} others = {this.state.preds[5]} glass = {this.state.preds[4]} preview = {this.state.preview} />
        </div>
      );
    }
  }
}
