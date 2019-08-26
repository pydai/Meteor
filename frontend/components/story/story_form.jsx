import React from 'react';

class StoryForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.story;
    this.update = this.update.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleImage = this.handleImage.bind(this);
  }

  update(field) {
    return event => {
      this.setState({ [field]: event.target.value })
    };
  };

  handleImage(event) {
    this.setState({['image']: event.currentTarget.files[0]});
  }

  handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData();
    formData.append("story[title]", this.state.title);
    formData.append("story[body]", this.state.body);
    formData.append("story[image]", this.state.image);
    // submitStory looks for a story that fulfills the story url params
    // requires multiple properties to be passed; must use FormData
    this.props.submitStory(formData, this.state.id)
      .then(() => this.props.history.push(`/users/${this.props.currentUserId}`));
  }

  render() {
    return (
      <div className="new-story-container">
        <form className="new-story-form" onSubmit={this.handleSubmit}>
          <input className="new-story-form-title" type="text" value={this.state.title} onChange={this.update('title')} 
            placeholder="Title"/>
          <textarea className="new-story-form-body" value={this.state.body} onChange={this.update('body')} 
            placeholder="Tell your story...">
          </textarea>
          <input type="file" onChange={this.handleImage}/>
          <div>
            {this.props.formType === 'Edit Story'
              ? <input className="submit-button" type="submit" value="Update Story" />
              : <input className="submit-button" type="submit" value="Create Story" />}
          </div>
        </form>
      </div>
    );
  }
}

export default StoryForm;