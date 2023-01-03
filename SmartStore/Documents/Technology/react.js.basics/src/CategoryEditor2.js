import React from 'react';

class CategoryEditor2 extends React.Component {
    category = {
        name: "Soft Drink",
        description: "This is the root category for All Soft Drinks"
    };

    categoryNameChangeHandler = (event) => {
        this.category.name = event.target.value;
    }

    categoryDescriptionChangeHandler = (event) => {
        this.category.description = event.target.value;
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
                            value={this.category.name}
                            onChange={this.categoryNameChangeHandler}
                        />
                    </div>
                    <div>
                        <span>Description</span>
                        <input
                            type="text"
                            value={this.category.description}
                            onChange={this.categoryDescriptionChangeHandler}
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

export default CategoryEditor2;