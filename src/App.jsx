import React from 'react';
import Input from './components/Input';
import SearchEngine from './components/SearchEngine';

function App() {
	return (
		<React.Fragment>
			<div class='d-flex vh-100  align-items-center justify-content-center'>
				<img class="start-image" src="https://media.discordapp.net/attachments/910563407646822464/922579397272285204/penguin.gif"/>				
				<div>
					<SearchEngine/>
				</div>
				
			</div>
		</React.Fragment>
	);
}

export default App;