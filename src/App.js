import React, {useState} from 'react';
import ProfileCard from './components/ProfileCard';
import { getRandomAnimal } from './helper';

import AlexaImage from './images/alexa.png';
import CortanaImage from './images/cortana.png';
import SiriImage from './images/siri.png';
import 'bulma/css/bulma.css';
import AnimalShow from './components/AnimalShow';
import SearchBar from './components/SearchBar';
import { searchImages } from './services/api';
import ImageList from './components/ImageList';

const App = () => {
    const arr = [
        {title: "Alexa", handler:"@alexa99", imageSrc: AlexaImage},
        {title: "Cortana", handler:"@cortana32", imageSrc: CortanaImage},
        {title: "Siri", handler:"@siri01", imageSrc: SiriImage},
    ];

    //functions for counts
    const [count, setCount] = useState(0);
    const [animals, setAnimals] = useState([]);
    const handleCountAddClick = () => {
        setCount(count+1);
    };
    const handleCountReduceClick = () => {
        setCount(count-1);
    };

    //functions for Animals
    const handleAnimalAddClick = () => {
        setAnimals([...animals, getRandomAnimal()]);
    };
    const handleAnimalReduceClick = () => {
        if(animals.length>0) {
            setAnimals([...animals].slice(0,-1));
        }
    };
    const renderedAnimals = animals.map((animal, index) => <AnimalShow type={animal} key={index}/>)
    
    //functions for Image Search
    const [images, setImages] = useState([]);
    const handleSubmit = async (queryString) => {
       const result = await searchImages(queryString);
       setImages(result);
    }

    return (
    <div className='container'>
        <section className='hero is-primary'>
            <div className='hero-body'>
                <p className='title'> Allison's Voice over Assistance Tool</p>
            </div>
        </section>
      
        <section className='section'>
            <div className='columns'>
            {arr.map(el => <div className='column is-4'><ProfileCard title ={el.title} handler={el.handler} imgSrc={el.imageSrc}/></div>)}
            </div>
        </section>

        <hr/>
        <section className='hero is-primary'>
            <div className='hero-body'>
                <p className='title'> Counts</p>
            </div>
        </section>

        <section className='section'>
            <button onClick={handleCountAddClick}>Add Count</button>
            <button onClick={handleCountReduceClick}>Reduce Count</button>
            <div>The Number of counts is {count}.</div>
        </section>

        <hr/>
        <section className='hero is-primary'>
            <div className='hero-body'>
                <p className='title'> Animal Buttons</p>
            </div>
        </section>

        <section className='section'>
            <button onClick={handleAnimalAddClick}>Add Animal(s)</button>
            <button onClick={handleAnimalReduceClick}>Reduce Animal(s)</button>
            <div>{renderedAnimals}</div>
        </section>


        <hr/>
        <section className='hero is-primary'>
            <div className='hero-body'>
                <p className='title'> Search bar Service</p>
            </div>
        </section>

        <section className='section'>
            <SearchBar onSubmit={handleSubmit} />
            <ImageList images={images} />
        </section>


        
    </div>
    )};

export default App;