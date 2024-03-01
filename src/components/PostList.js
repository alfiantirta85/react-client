import React, { Component } from "react";
import Post from "./Post";

class PostList extends Component {
  onDelete = id => {
    // console.log("customer list ", id);
    this.props.onDelete(id);
  };

  onEdit = id => {
    // console.log("customer list ", id);
    this.props.onEdit(id);
  };

  render() {
    const posts = this.props.posts;
    return (
      <div className="data">
        <table className="ui celled table">
          <thead>
            <tr>
              <th style={{ width: "50px", textAlign: "center" }}>#</th>
              <th>Foto</th>
              <th>Nama</th>
              <th>NIK</th>
              <th>NISN</th>
              <th>Alamat</th>
              <th style={{ width: "148px" }}>Aksi</th>
            </tr>
          </thead>

          <tbody>
            {posts.map(post => {
              return (
                <Post
                  key={post.id}
                  customer={post}
                  onDelete={this.onDelete}
                  onEdit={this.onEdit}
                />
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default PostList;
