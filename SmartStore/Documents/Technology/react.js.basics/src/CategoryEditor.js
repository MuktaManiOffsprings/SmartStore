import React from 'react';
import axios from 'axios';

const url = 'http://localhost:3001/category/add';

class CategoryEditor extends React.Component {
    category = {
        CATEGORYID: "",
        CATEGORYNAME: "",
        CATEGORYDESCRIPTION: ""
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
                        <span>CATEGORYID</span>
                        <input
                            type="text"
                            name="CATEGORYID"
                            value={this.state.category.CATEGORYID}
                            onChange={this.categoryAttributeChangeHandler}
                        />
                    </div>
                    <div>
                        <span>CATEGORYNAME</span>
                        <input
                            type="text"
                            name="CATEGORYNAME"
                            value={this.state.category.CATEGORYNAME}
                            onChange={this.categoryAttributeChangeHandler}
                        />
                    </div>
                    <div>
                        <span>CATEGORYDESCRIPTION</span>
                        <input
                            type="text"
                            name="CATEGORYDESCRIPTION"
                            value={this.state.category.CATEGORYDESCRIPTION}
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