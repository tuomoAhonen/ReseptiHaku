import {StyleSheet, View, Text, Image} from 'react-native';

const RecipeView = ({recipe}) => {
	//console.log('mitä tulee resepti viewiin', recipe);
	return (
		<View style={styles.container}>
			<Image src={recipe.strMealThumb} style={styles.image} />
			<Text style={styles.recipeText}>{recipe.strMeal.trim()}</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		//flex: 1,
		flexDirection: 'row',
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'flex-start',
	},
	recipeText: {
		fontWeight: 'bold',
	},
	image: {
		height: 40,
		width: 40,
		marginRight: 5,
	},
});

export default RecipeView;
