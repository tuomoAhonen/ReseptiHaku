import {StatusBar} from 'expo-status-bar';
import {StyleSheet, Text, View} from 'react-native';
import RecipesView from './components/RecipesView';

export default function App() {
	return (
		<View style={styles.container}>
			<RecipesView />
			<StatusBar style='auto' />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		margin: 5,
		flex: 1,
		backgroundColor: '#fff',
		//alignItems: 'center',
		//justifyContent: 'space-around',
	},
});

