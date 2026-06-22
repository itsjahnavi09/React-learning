function CategoryFilter({categories, selectedCategory,setSelectedCategory}){
    return(
        <div className="category-filter">
            {categories.map((category)=> (
                <button
                key={category}
                onClick={()=> setSelectedCategory(category)}
                >{category}
                </button>
            ))}
        </div>

    );

}

export default CategoryFilter;