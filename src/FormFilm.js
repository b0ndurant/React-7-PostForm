import React, { Component } from 'react';

class FormFilm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            poster: '',
            comment: '',
        }
    }

    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        });
    }

    submitForm = (e) => {
        e.preventDefault();
        const config = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(this.state),
        };

        const url = "//campus-bordeaux.ovh:3001/api/quests/movies/";

        fetch(url, config)
            .then(res => res.json())
            .then(res => {
                if (res.error) {
                    alert(res.error);
                } else {
                    alert(`Added your favorite film with the ID ${res}!`);
                }
            }).catch(e => {
                console.error(e);
                alert('Error during update film');
            });
            this.setState({
                name: '',
                poster: '',
                comment: '',
            })
    }


    render() {
        return (
            <>
                <h1 className="text-center mt-3">Formulaire</h1>
                <form onSubmit={this.submitForm} className="mt-5">
                    <div className="form-group">
                        <label>Your name film :</label>
                        <input type="text" className="form-control" name="name" value={this.state.name} onChange={this.onChange} placeholder="Enter your film" />
                    </div>
                    <div className="form-group">
                        <label>Your Poster film :</label>
                        <input type="url" className="form-control" name="poster" value={this.state.poster} onChange={this.onChange} placeholder="your poster film" />
                    </div>
                    <div className="form-group">
                        <label>Your comment :</label>
                        <textarea className="form-control" name="comment" value={this.state.comment} onChange={this.onChange} placeholder="your comment ..." />
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </>
        );
    }
}

export default FormFilm;