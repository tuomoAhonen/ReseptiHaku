const getAllRecipes = async () => {
	try {
		const result = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=`);
		return await result.json();
	} catch (error) {
		return error;
	}
};

const searchRecipes = async (searchWord, selected) => {
	//console.log('hakusana servicessä', searchWord);
	//console.log(selected);
	try {
		if (!searchWord || !selected) {
			if (selected === 's') {
				const result = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=`);
				return await result.json();
			}

			const result = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=`);
			return await result.json();
		}

		if (selected === 's') {
			const nameResults = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchWord}`);
			return await nameResults.json();
		}

		const filterResults = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${searchWord}`);
		return await filterResults.json();
	} catch (error) {
		return error;
	}
};

export {getAllRecipes, searchRecipes};
