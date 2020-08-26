import React, {Component} from 'react';
// import the comment component
import Comment from './Comment.js'

class Dino extends Component {
  // Set an initial state prop in your component that contains content or body for posts.
  constructor(props) {
    super()
    this.state = {
      body: props.body
    }
    // this.handleBodyEdit = this.handleBodyEdit.bind(this)
  }

  handleBodyEdit = () => {
    // open an alert 
    // Take the user inputed value into the alert box 
    let input = prompt("What is the new body of this article?")
    console.log(input)
    // use that return value to update the state of the body of your post.
    this.setState({body: input})
  }
  

  render(){
    let allComments = this.props.comments.map((c, i)=>{
      return <Comment key={i} body={c}/>
    })
    console.log(allComments)
    return (
    <>
      <h1>Check out my {this.props.title} Blog!</h1>
      <p>Written By {this.props.author}</p>
      <p>{this.state.body}</p>
      <button onClick={this.handleBodyEdit}>Edit the body of this article</button>
      {allComments}
    </>
      );
    }
  }

export default Dino;

// WITH FORM EDITS Notes

// constructor(props) {
//   super()
//   this.state = {
//     body: props.body
//     body: props.body,
//     tempBody: ''
//   }
//   // this.handleBodyEdit = this.handleBodyEdit.bind(this)
// }
// @@ -21,6 +22,11 @@ class Dino extends Component {
//   this.setState({body: input})
// }

// handleFormEdit = e => {
//   e.preventDefault()
//   this.setState({ body: this.state.tempBody})
// }

// render(){
//   let allComments = this.props.comments.map((c, i)=>{
//     return <Comment key={i} body={c}/>
// @@ -30,7 +36,13 @@ class Dino extends Component {
//       <h1>Check out my {this.props.title} blog!</h1>
//       <p>Written by {this.props.author}</p>
//       <p>{this.state.body}</p>
//       <button onClick={this.handleBodyEdit}>Edit the body of this article</button>
//       <hr />
//       <form onSubmit={this.handleFormEdit}>
//         <h5>New Body content</h5>
//         <input type="text" name="body" onChange={e => this.setState({ tempBody: e.target.value })} />
//         <input type="submit" />
//       </form>
//       {/* <button onClick={this.handleBodyEdit}>Edit the body of this article</button> */}
//       {allComments}
//     </>
//   )
