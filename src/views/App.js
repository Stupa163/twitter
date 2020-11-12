import React, {useEffect} from 'react';
import Routes from "../router/Routes";

function App() {
    useEffect(() => {
        document.title = "Twitter"
    }, [])

    return (
        <Routes/>
    );
}

export default App;
