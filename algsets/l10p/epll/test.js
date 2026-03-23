const ua = {
    name: "Ua",
    optimalAlg: "1,0 / 2,-1 / 4,1 / 3,0 / -3,0 / 5,-1 / -2,1 /",
    optimalErgonomics: "up",
    extraAlg: "1,0 / 0,-3 / -1,0 / 3,0 / 1,0 / 0,3 / -1,0 / -3,0 /",
    extraErgonomics: "down"
};

const ub = {

};

const h = {

};

const z = {

};

const oa = {

};

const ob = {

};

const opp = {

};

const adj = {

};

const w = {

};

const alglist = [ua,ub,h,z,oa,ob,opp,adj,w];

for (let alg in alglist) {
    alg.optimalSliceCount = (alg.optimalAlg.match(/\//g) || []).length;
    alg.extraSliceCount = (alg.optimalAlg.match(/\//g) || []).length;
}

// ehhhhhhhhh ill figure this out eventually