const maxApi    = require("max-api");
const clockalgo = require("clockalgo");

const ClockFactory = clockalgo.ClockFactory;
const Euclidean    = clockalgo.Euclidean;


const SHORTNAME_TYPE_MAP = {
    "Eucl":  "Euclidean",
    "Subd":  "Subdivider",
    "Rand":  "Randomizer",
    "Simp":  "SimpleClock",
    "Tala":  "Tala",
    "Multp": "Multiplier",
    "Rot":   "Rotation",
    "Rcrsv": "RecursiveDivider",
    "Swing": "Swing",
    "Off":   "Off"
}


maxApi.addHandlers({

    generate: async (dict_id) => {
        // Get the dictionary from Max, build a clockalgo specification object with active algorithms.
        const config = await maxApi.getDict(dict_id);
        config.algo1.type = SHORTNAME_TYPE_MAP[config.algo1.type];
        config.algo2.type = SHORTNAME_TYPE_MAP[config.algo2.type];
        config.algo3.type = SHORTNAME_TYPE_MAP[config.algo3.type];

        const specification = { chain: [config.algo1], weighted: config.weighted };
        if (config.algo2.type != "Off") specification.chain.push(config.algo2);
        if (config.algo3.type != "Off") specification.chain.push(config.algo3);

        // Use the ClockFactory to build a clock from the specification.
        await maxApi.outlet(ClockFactory.buildClock(specification).divisions);
    },

    test: () => {
        const eucl = new Euclidean(3, 8);
        maxApi.post(eucl.divisions);
    }
});
