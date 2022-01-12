import { useState } from 'react';

const useDarkMode = (defaultMode) => {
	const [darkMode, setDarkMode] = useState(defaultMode);

	return([darkMode, setDarkMode]);
}

export default useDarkMode;