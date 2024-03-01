import React, { Component } from "react";

class Post extends Component {
  onDelete = () => {
    // console.log('post ', this.props.post.id);
    this.props.onDelete(this.props.post.id);
  };

  onEdit = () => {
    // console.log('customer ', this.props.customer.id);
    this.props.onEdit(this.props.post);
  };

  render() {
    const { id, foto, nama, nik, nisn, alamat } = this.props.post;
    return (
      <tr>
        <td style={{ textAlign: "center" }}>{id}</td>
        <td>{foto}</td>
        <td>{nama}</td>
        <td>{nik}</td>
        <td>{nisn}</td>
        <td>{alamat}</td>
        <td>
          <button className="mini ui blue button" onClick={this.onEdit}>
            Edit
          </button>
          <button className="mini ui red button" onClick={this.onDelete}>
            Delete
          </button>
        </td>
      </tr>
    );
  }
}

export default Post;
