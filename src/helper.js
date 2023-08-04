export const getRandomAnimal = () => {
    const animals = ['bird', 'cat', 'cow', 'dog', 'gator','horse'];
    return animals[Math.floor(Math.random() * animals.length)];
}