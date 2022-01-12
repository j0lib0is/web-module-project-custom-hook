import useLocalStorage from './useLocalStorage';

const useDarkMode = (initialMode) => {
	const [darkMode, setDarkMode] = useLocalStorage('mode', initialMode);
	return([darkMode, setDarkMode]);
}

export default useDarkMode;