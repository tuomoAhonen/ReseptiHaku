import {StyleSheet, TextInput, View} from 'react-native';
import {Picker} from '@react-native-picker/picker';

const SearchView = ({searchWord, setSearchWord, selected, setSelected}) => {
	return (
		<View style={styles.container}>
			<View style={styles.row}>
				<TextInput
					placeholder='Search for recipe...'
					value={searchWord}
					onChangeText={(e) => setSearchWord(e)}
					style={styles.textInput}
				/>
				<Picker
					selectedValue={selected}
					onValueChange={(itemValue, itemIndex) => setSelected(itemValue)}
					style={styles.picker}
				>
					<Picker.Item label='by ingredient' value='i' />
					<Picker.Item label='by name' value='s' />
				</Picker>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		//height: 40,
		width: '100%',
		position: 'absolute',
		bottom: 0,
		backgroundColor: '#F8F8FF',
		alignItems: 'center',
		flex: 1,
		justifyContent: 'flex-end',
	},
	row: {
		flexDirection: 'row',
		alignItems: 'center',
		alignContent: 'space-around',
		justifyContent: 'center',
	},
	textInput: {
		width: 150,
		//width: 'fit-content',
		borderBottomWidth: 1,
		borderColor: '#000000',
	},
	picker: {
		width: 200,
		//width: 'fit-content',
		borderWidth: 1,
		borderColor: '#000000',
	},
});

export default SearchView;
