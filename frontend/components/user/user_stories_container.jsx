import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteStory } from '../../actions/story_actions';

const mapStateToProps = state => ({
  currentUserId: state.session.id
});

const mapDispatchToProps = dispatch => ({
  deleteStory: (id) => dispatch(deleteStory(id))
});

class UserStoryPost extends React.Component {
  handleDelete() {
    return event => {
      event.preventDefault();
      this.props.deleteStory(this.props.story.id);
    };
  }

  render() {
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    let dateTime;
    let formattedDate;
    dateTime = new Date(this.props.story.created_at);
    formattedDate = months[dateTime.getMonth()] + " " + dateTime.getDate() + ", "
      + dateTime.getFullYear(); 

    let userStoryBtns;
    if(this.props.user.id === this.props.currentUserId){
      userStoryBtns =
      <div className="user-story-btns">
        <Link to={`/stories/${this.props.story.id}/edit`} className="user-story-buttons">
          <i className="far fa-edit"></i>
        </Link>
        <button className="user-story-buttons" onClick={this.handleDelete()}>
          <i className="fas fa-trash"></i>
        </button>
      </div>
    }
    else{
      userStoryBtns = null;
    }
    return (
      <div className="user-story-container">
        <div className="user-story">
          <nav className="user-story-nav">
            <div className="user-story-profile">
              <div className="user-story-profile-pic">
                <i className="fas fa-user-circle"></i>
              </div>
              <div className="user-story-info">
                <h2 className="user-story-author">{this.props.story.author}</h2>
                <h2 className="user-story-create-date">{formattedDate}</h2>
              </div>
            </div>
            {userStoryBtns}
          </nav>

          <Link to={`/stories/${this.props.story.id}`}>
            <div className="user-story-img">
              <img src={`${this.props.story.image}`} />
            </div>
            <h1 className="user-story-title">{this.props.story.title}</h1>
            <h2 className="user-story-body">{this.props.story.body}</h2>
          </Link>

          <footer className="user-story-footer">
            <button><i className='far fa-thumbs-up'></i></button>
            <p>{this.props.story.response_ids.length} responses</p>
          </footer>
        </div>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserStoryPost);