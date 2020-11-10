const fs = require('fs');
const { filterByQuery, findById, createNewZookeeper, validateZookeeper } = require('../lib/zookeepers');
const { zookeepers } = require('../data/zookeepers.json');

jest.mock('fs');

test('create a zookeeper object', () => {
    const zookeeper = createNewZookeeper(
        { name: 'Darlene', id: 'jhgja3ng2'},
        zookeepers
    );

    expect(zookeeper.name).toBe('Darlene');
    expect(zookeeper.id).toBe('jhgja3ng2');
});

test('filters by query', () => {
    const startingZookeepers = [
        {
            id: "0",
            name: "Kim",
            age: 28,
            favoriteAnimal: "dolphin"
        },
        {
            id: "1",
            name: "Raksha",
            age: 31,
            favoriteAnimal: "penguin"
        }
    ];

    const updatedZookeepers = filterByQuery({ favoriteAnimal: 'penguin' }, startingZookeepers);

    expect(updatedZookeepers.length).toEqual(1);
});

test('finds by id', () => {
    const startingZookeepers = [
        {
            id: "0",
            name: "Kim",
            age: 28,
            favoriteAnimal: "dolphin"
        },
        {
            id: "1",
            name: "Raksha",
            age: 31,
            favoriteAnimal: "penguin"
        }
    ];

    const result = findById('1', startingZookeepers);

    expect(result.name).toBe('Raksha');
});

test('validates age', () => {
    const zookeeper = {
        id: "1",
        name: "Raksha",
        age: 31,
        favoriteAnimal: "penguin"
    };

    const invalidZookeeper = {
        id: "1",
        name: "Raksha",
        favoriteAnimal: "penguin"
    };

    const result = validateZookeeper(zookeeper);
    const result2 = validateZookeeper(invalidZookeeper);

    expect(result).toBe(true);
    expect(result2).toBe(false);
})