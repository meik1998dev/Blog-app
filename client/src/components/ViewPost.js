import React from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

class ViewPost extends React.Component {

    constructor(props) {
        super(props);
        this.deletePost = this.deletePost.bind(this);
        this.state = {
            post: {},
            error: ''
        };
    }


    deletePost() {
        axios.delete("/api/posts/"+this.state.post._id).then(res => {
            this.props.history.push('/');
        })
    }



    componentDidMount() {
        let postId = this.props.match.params.id;
        axios.get('/api/posts/'+postId).then(res => {
            this.setState({
                post: res.data,
                error: ''
            });
        }).catch(err => {
            this.setState({
                error: err.response.data.message
            });
        });
    }

    renderActions() {
        if(localStorage.getItem('token') && localStorage.getItem('_id') === this.state.post.author._id) {
            return(
                <span>
                    <Link to={"/post/edit/"+this.state.post._id}>
                        <button>Edit</button>
                    </Link>
                    <button onClick={this.deletePost}>Delete</button>
                </span>
            )
        }
    }

    render() {
        if(this.state.error) {
            return(<blockquote>{this.state.error}</blockquote>)
        }

        if(!this.state.post.title) {
            return(<h4>Please wait</h4>)
        }

        return(
            <div className="column">
                <h4>{this.state.post.title}</h4>
                <h6 className="title">{this.state.post.author.name}</h6>
                <p>{this.state.post.content}</p>
                {this.renderActions()}
            </div>
        )
    }

}

export default ViewPost;