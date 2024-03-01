import React, { Component } from "react";

class MyForm extends Component {
  state = {
    form: { foto: "", nama: "", nik: "", nisn: "", alamat: "", isEdit: false },
    btnName: "Save",
    btnClass: "ui primary button submit-button"
  };

  isEmptyObj(obj) {
    return Object.entries(obj).length === 0 && obj.constructor === Object;
  }

  componentDidUpdate(prevProps) {
    if (prevProps !== this.props && !this.isEmptyObj(this.props.post)) {
      this.setState({
        form: { ...this.props.post, isEdit: true },
        btnName: "Update",
        btnClass: "ui orange button submit-button"
      });
      // console.log("update");
    }
  }

  onFormSubmit = event => {
    // prevent form submit
    event.preventDefault();

    // form validation
    if (this.formValidation()) {
      // send form data to app
      this.props.onFormSubmit(this.state.form);

      // change the button to save
      this.setState({
        btnName: "Save",
        btnClass: "ui primary button submit-button"
      });

      // clear form fields
      this.clearFormFields();
    }
  };

  handleChange = event => {
    const { name, value } = event.target;
    let form = this.state.form;
    form[name] = value;
    this.setState({ form });
  };

  formValidation = () => {
    // foto
    if (document.getElementsByName("foto")[0].value === "") {
      alert("Masukan Foto");
      return false;
    }

    // nama
    if (document.getElementsByName("nama")[0].value === "") {
      alert("Masukan nama");
      return false;
    }

    // nik
    if (document.getElementsByName("nik")[0].value === "") {
      alert("Masukan nik");
      return false;
    }

    // nisn
    if (document.getElementsByName("nisn")[0].value === "") {
      alert("Masukan nisn");
      return false;
    }
    
    // alamat
    if (document.getElementsByName("alamat")[0].value === "") {
      alert("Masukan alamat");
      return false;
    }

    return true;
  };

  clearFormFields = () => {
    // console.log("clear");
    // change form state
    this.setState({
      form: { foto: "", nama: "", nik: "", nisn: "", alamat: "", isEdit: false }
    });

    // clear form fields
    document.querySelector(".form").reset();
  };

  render() {
    return (
      <form className="ui form">
        <div className="fields">
          <div className="two wide field">
            <label>Nama</label>
            <input
              type="text"
              name="nama"
              placeholder="Nama"
              onChange={this.handleChange}
              value={this.state.form.nama}
            />
          </div>

          <div className="four wide field">
            <label>NIK</label>
            <input
              type="text"
              name="nik"
              placeholder="nik"
              onChange={this.handleChange}
              value={this.state.form.nik}
            />
          </div>

          <div className="three wide field">
            <label>NISN</label>
            <input
              name="nisn"
              placeholder="nisn"
              onChange={this.handleChange}
              value={this.state.form.nisn}
            />
          </div>

          <div className="five wide field">
            <label>Alamat</label>
            <input
              name="alamat"
              placeholder="alamat"
              onChange={this.handleChange}
              value={this.state.form.alamat}
            />
          </div>

          <div className="two wide field">
            <button className={this.state.btnClass} onClick={this.onFormSubmit}>
              {this.state.btnName}
            </button>
          </div>
        </div>
      </form>
    );
  }
}

export default MyForm;
