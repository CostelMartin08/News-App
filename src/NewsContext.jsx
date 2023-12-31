import { createContext, useContext, useState } from 'react';
const NewsContext = createContext();

const NewsProvider = ({ children }) => {


    const [lastSearchTerm, setLastSearchTerm] = useState([])
    const [data, setData] = useState();

    //I know, it's the public key

    
    const fetchData = async (searchTerm) => {

        try {
            const url = `https://newsapi.org/v2/everything?q=${searchTerm}&apiKey=0ca79d4a4a0648ce8d34f9f51c1e9686`;
            const req = new Request(url);
            const response = await fetch(req);

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            const jsonData = await response.json();
            setData(jsonData);
            setLastSearchTerm([searchTerm, ...lastSearchTerm])
        } catch (error) {
            console.error('Error fetching data:', error.message);
        }

    };



    return (
        <NewsContext.Provider value={{ data, fetchData, lastSearchTerm }}>
            {children}
        </NewsContext.Provider>
    );
};

const useNewsContext = () => {
    const context = useContext(NewsContext);
    if (!context) {
        throw new Error('useNewsContext must be used within a NewsProvider');
    }
    return context;
};

export { NewsProvider, useNewsContext };

