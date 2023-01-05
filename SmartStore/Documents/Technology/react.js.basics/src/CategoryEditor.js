import React from 'react';
import axios from 'axios';

const url = 'http://localhost:3001/category/add';

class CategoryEditor extends React.Component {
    category = {
        name: "",
        description: ""
    };

    state = {
        category: this.category
    }

    categoryAttributeChangeHandler = (event) => {
        this.category[event.target.name] = event.target.value;
        this.setState({
            category: this.category
        });
    }

    onSaveClickHandler = () => {
        console.log(this.category);
        axios.post(url, this.category)
            .then(res => {
                console.log(res);
            })
            .catch(err => {
                console.log(err);
            });
    }

    render() {
        return (
            <div>
                <form>
                    <div>
                        <span>Category Name</span>
                        <input
                            type="text"
                            name="name"
                            value={this.state.category.name}
                            onChange={this.categoryAttributeChangeHandler}
                        />
                    </div>
                    <div>
                        <span>Description</span>
                        <input
                            type="text"
                            name="description"
                            value={this.state.category.description}
                            onChange={this.categoryAttributeChangeHandler}
                        />
                    </div>
                    <div>
                        <input
                            type="button"
                            value="Save"
                            onClick={this.onSaveClickHandler}
                        />
                    </div>
                </form>
            </div>
        );
    }
}

export default CategoryEditor;