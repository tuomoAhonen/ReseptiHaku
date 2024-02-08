import {useEffect, useState} from 'react';
import {StyleSheet, View, Text, FlatList} from 'react-native';
import {useDebouncedCallback} from 'use-debounce';
import Constants from 'expo-constants';
import {searchRecipes} from '../services/RecipeApi';
import RecipeView from './RecipeView';
import SearchView from './SearchView';

const RecipesView = () => {
	const [recipesList, setRecipesList] = useState([]);
	const [searchWord, setSearchWord] = useState('');
	const [selected, setSelected] = useState('i');

	const fetchRecipes = async () => {
		try {
			//console.log('hakusana effectissä', searchWord);
			const recipes = await searchRecipes(searchWord, selected);
			//console.log(recipes);
			return setRecipesList(recipes.meals);
		} catch (error) {
			return console.log(error.message);
		}
	};

	const debouncedFetchRecipes = useDebouncedCallback(() => fetchRecipes(), 1000);

	useEffect(() => {
		debouncedFetchRecipes();
	}, [searchWord, selected]);

	return (
		<View style={styles.container}>
			{recipesList ? (
				<FlatList
					data={recipesList}
					//keyExtractor={(index) => index}
					renderItem={({item, index}) => <RecipeView key={index} recipe={item} />}
					ItemSeparatorComponent={
						<View
							style={{width: '100%', marginTop: 5, marginBottom: 5, borderBottomWidth: 1, borderColor: '#012345'}}
						/>
					}
					contentContainerStyle={styles.flatList}
				></FlatList>
			) : (
				<Text style={styles.notFoundText}>No recipes found</Text>
			)}
			<SearchView searchWord={searchWord} setSearchWord={setSearchWord} selected={selected} setSelected={setSelected} />
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		marginTop: Constants.statusBarHeight,
		flex: 1,
		backgroundColor: '#fff',
		//alignItems: 'center',
		//justifyContent: 'center',
	},
	flatList: {
		//flex: 1,
		justifyContent: 'flex-start',
	},
	notFoundText: {
		//flex: 1,
		justifyContent: 'flex-start',
	},
});

export default RecipesView;
