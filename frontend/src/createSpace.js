import { SpaceObject } from 'spacekit.js';

export const createSpace = (data, spaceRef) => {
    console.log('data:', data);

    const viz = new Spacekit.Simulation(spaceRef.current, {
        basePath: 'https://typpo.github.io/spacekit/src',
        jdPerSecond: 10,
        startDate: Date.now(),
        camera: {
            enableDrift: true,
        },
    });
    // Create a skybox using NASA TYCHO artwork.
    viz.createSkybox(Spacekit.SkyboxPresets.NASA_TYCHO);

    // // Create our first object - the sun - using a preset space object.
    const sun = viz.createObject('Sun', Spacekit.SpaceObjectPresets.SUN);

    // Then add some planets
    const mercury = viz.createObject(
        'Mercury',
        Object.assign(Spacekit.SpaceObjectPresets.MERCURY, {
            labelText: 'Mercury',
        })
    );
    const venus = viz.createObject(
        'Venus',
        Object.assign(Spacekit.SpaceObjectPresets.VENUS, {
            labelText: 'Venus',
        })
    );
    const mars = viz.createObject(
        'Mars',
        Object.assign(Spacekit.SpaceObjectPresets.MARS, {
            labelText: 'Mars',
        })
    );
    const jupiter = viz.createObject(
        'Jupiter',
        Object.assign(Spacekit.SpaceObjectPresets.JUPITER, {
            labelText: 'Jupiter',
        })
    );
    const saturn = viz.createObject(
        'Saturn',
        Object.assign(Spacekit.SpaceObjectPresets.SATURN, {
            labelText: 'Saturn',
        })
    );
    const uranus = viz.createObject(
        'Uranus',
        Object.assign(Spacekit.SpaceObjectPresets.URANUS, {
            labelText: 'Uranus',
        })
    );
    const neptune = viz.createObject(
        'Neptune',
        Object.assign(Spacekit.SpaceObjectPresets.NEPTUNE, {
            labelText: 'Neptune',
        })
    );
    const earth = viz.createObject(
        'earth',
        Object.assign(Spacekit.SpaceObjectPresets.EARTH, {
            labelText: 'Earth',
        })
    );
    const moon = viz.createObject('moon', Spacekit.SpaceObjectPresets.MOON);
    moon.orbitAround(earth);

    data.forEach((obj) => {
        console.log('obj', obj);
        const spaceship = viz.createObject(obj.name, {
            labelText: obj.name,
            ephem: new Spacekit.Ephem(
                {
                    // These parameters define orbit shape.
                    // 0 < a <5
                    a: obj.a,
                    // 0 < e < 1
                    e: 0.9,
                    // 0 <= i
                    i: obj.i,

                    // These parameters define the orientation of the orbit.
                    om: obj.om,
                    w: obj.w,
                    ma: obj.ma,

                    // Where the object is in its orbit.
                    epoch: obj.epoch,
                },
                'deg'
            ),
        });
        console.log('orbitAround', obj.orbitAround);
        switch (obj.orbitAround) {
            case 'sun':
                spaceship.orbitAround(sun);
                break;
            case 'mercury':
                spaceship.orbitAround(mercury);
                break;
            case 'venus':
                spaceship.orbitAround(venus);
                break;
            case 'earth':
                spaceship.orbitAround(earth);
                break;
            case 'mars':
                spaceship.orbitAround(mars);
                break;
            case 'jupiter':
                spaceship.orbitAround(jupiter);
                break;
            case 'saturn':
                spaceship.orbitAround(saturn);
                break;
            case 'uranus':
                spaceship.orbitAround(uranus);
                break;
            case 'neptune':
                spaceship.orbitAround(neptune);
                break;
            default:
                break;
        }

        // mySpace.orbitAround(earth);
    });

    // viz.zoom();

    // Set up event listeners
};
