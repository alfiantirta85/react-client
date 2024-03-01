import React, { Component } from "react";
import axios from "axios";
import MyForm from "./MyForm";
import PostList from "./PostList";
import Loader from "./Loader";
import "./app.css";

class App extends Component {
  state = {
    posts: [],
    loader: false,
    post: {},
    url: "http://localhost/api/posts"
  };

  getPosts = async () => {
    this.setState({ loader: true });
    const posts = await axios.get(this.state.url);
    this.setState({ posts: posts.data, loader: false });
  };

  deletePosts = async id => {
    this.setState({ loader: true });

    await axios.delete(`${this.state.url}/${id}`).catch(e => {
      // console.log(e.message);
      alert(e.response.status === 404 ? "Murid tidak ada" : "");
    });

    this.getPosts();
  };

  createPosts = async data => {
    this.setState({ loader: true });

    await axios
      .post(this.state.url, {
        foto: data.foto,
        nama: data.nama,
        nik: data.nik,
        nisn: data.nisn,
        alamat: data.alamat
      })
      .catch(e => {
        // console.log(e.message)
        alert(e.response.status === 500 ? "Alamat sudah ada" : "");
      });

    this.getPosts();
  };

  editPosts = async data => {
    // clear customer obj
    this.setState({ post: {} });

    this.setState({ loader: true });

    await axios
      .put(`${this.state.url}/${data.id}`, {
        foto: data.foto,
        nama: data.nama,
        nik: data.nik,
        nisn: data.nisn,
        alamat: data.alamat
      })
      .catch(e => {
        console.log(e.message);
      });

    this.getPosts();
  };

  componentDidMount() {
    this.getPosts();
  }

  onDelete = id => {
    // console.log("app ", id);
    this.deletePosts(id);
  };

  onEdit = data => {
    // console.log("app ", data);
    this.setState({ post: data });
  };

  onFormSubmit = data => {
    // console.log("app ", data);
    // return;
    // console.log("app ", data);
    if (data.isEdit) {
      // if is edit true
      this.editPosts(data);
    } else {
      // if is edit false
      this.createPosts(data);
    }
  };

  render() {
    return (
      <div>
        <div className="ui fixed inverted menu">
          <div className="ui container">
            <a href="/#" className="header item">
              Data Murid SMKN 1 Adiwerna
            </a>
          </div>
        </div>

        <div className="ui main container">
          <MyForm
            onFormSubmit={this.onFormSubmit}
            post={this.state.post}
          />
          {this.state.loader ? <Loader /> : ""}
          <PostList
            posts={this.state.posts}
            onDelete={this.onDelete}
            onEdit={this.onEdit}
          />
        </div>
      </div>
    );
  }
}

export default App;
