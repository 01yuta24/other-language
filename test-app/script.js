// Create the visualization and put it in our div.
const viz = new Spacekit.Simulation(document.getElementById('main-container'), {
    // basePath: '../../src',
    jdPerSecond: 10,
    startDate: Date.now(),
    camera: {
        enableDrift: true,
    },
});

// Create a skybox using NASA TYCHO artwork.
viz.createSkybox(Spacekit.SkyboxPresets.NASA_TYCHO);

// Create our first object - the sun - using a preset space object.
viz.createObject('Sun', Spacekit.SpaceObjectPresets.SUN);

// Then add some planets
viz.createObject(
    'Mercury',
    Object.assign(Spacekit.SpaceObjectPresets.MERCURY, {
        labelText: 'Mercury',
    })
);
viz.createObject(
    'Venus',
    Object.assign(Spacekit.SpaceObjectPresets.VENUS, {
        labelText: 'Venus',
    })
);
viz.createObject(
    'Mars',
    Object.assign(Spacekit.SpaceObjectPresets.MARS, {
        labelText: 'Mars',
    })
);
viz.createObject(
    'Jupiter',
    Object.assign(Spacekit.SpaceObjectPresets.JUPITER, {
        labelText: 'Jupiter',
    })
);
viz.createObject(
    'Saturn',
    Object.assign(Spacekit.SpaceObjectPresets.SATURN, {
        labelText: 'Saturn',
    })
);
viz.createObject(
    'Uranus',
    Object.assign(Spacekit.SpaceObjectPresets.URANUS, {
        labelText: 'Uranus',
    })
);
viz.createObject(
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

const spaceship = viz.createObject('my spaceship', {
    labelText: 'my spaceship',
    ephem: new Spacekit.Ephem(
        {
            // These parameters define orbit shape.
            a: 0.3,
            e: 0.5,
            i: 52,

            // These parameters define the orientation of the orbit.
            om: 3.170946964325638e2,
            w: 1.774865822248395e2,
            ma: 1.764302192487955e2,

            // Where the object is in its orbit.
            epoch: 2458426.5,
        },
        'deg'
    ),
});
spaceship.orbitAround(earth);

const ephem = new Spacekit.Ephem(
    {
        epoch: 2458600.5,
        // epoch: 100000,
        a: 5.38533,
        e: 0.19893,
        i: 22.11137,
        om: 294.42992,
        w: 314.2889,
        ma: 229.14238,
    },
    'deg'
);
const spaceshipMoon = viz.createObject('me', {
    labelText: 'me',
    ephem: new Spacekit.Ephem(
        {
            // These parameters define orbit shape.
            a: 0.1,
            e: 0,
            i: 0,

            // These parameters define the orientation of the orbit.
            om: 0,
            w: 0,
            ma: 0,

            // Where the object is in its orbit.
            epoch: 2458426.5,
        },
        'deg'
    ),
});
spaceshipMoon.orbitAround(spaceship);

// viz.zoom();

// Set up event listeners

document.getElementById('btn-start').onclick = function () {
    viz.start();
};
document.getElementById('btn-stop').onclick = function () {
    viz.stop();
};
document.getElementById('btn-set-time').onclick = function () {
    viz.setDate(new Date(prompt('Enter a date (YYYY-mm-dd)')));
};

document.getElementById('btn-set-jd-per-second').onclick = function () {
    viz.setJdPerSecond(parseInt(prompt('Enter jd per second'), 10));
};

document.getElementById('btn-faster').onclick = function () {
    viz.setJdDelta(viz.getJdDelta() * 1.5);
};

document.getElementById('btn-slower').onclick = function () {
    viz.setJdDelta(viz.getJdDelta() * 0.5);
};

const dateElt = document.getElementById('current-date');
viz.onTick = function () {
    const d = viz.getDate();
    dateElt.innerHTML = d.toLocaleDateString();
};

// Have some fun

let count = 0;
setInterval(() => {
    if (count % 2 == 0) {
        asteroid.getOrbit().setHexColor(0x00ff00);
    } else {
        asteroid.getOrbit().setHexColor(0xff0000);
    }
    count++;
}, 1000);
