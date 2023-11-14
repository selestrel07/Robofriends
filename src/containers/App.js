import React, { useEffect, useState } from 'react'
import CardList from '../components/CardList'
import SearchBox from '../components/SearchBox'
import Scroll from '../components/Scroll'
import ErrorBounry from '../components/ErrorBoundry'
import './App.css'

function App() {
    const [robots, setRobots] = useState([]);
    const [searchField, setSearchField] = useState('');

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(response => response.json())
            .then(users => setRobots(users));
    }, [])
    
    const onSearchChange = (Event) => {
        setSearchField(Event.target.value);
    }

    const filteredRobots = robots.filter(robot => {
        return robot.name.toLowerCase().includes(searchField.toLowerCase());
    });
    return (
        <div className='tc'>
            <h1 className='f1'>Robofriends</h1>
            <SearchBox searchChange={onSearchChange}/>
            <Scroll>
                <ErrorBounry>
                    <CardList robots={filteredRobots} />
                </ErrorBounry>
            </Scroll>
        </div>
    )
}

export default App;