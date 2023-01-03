import React from 'react';

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