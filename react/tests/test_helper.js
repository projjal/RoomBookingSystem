    require('babel-polyfill');
    require('babel-register')({
        presets: ['react', 'env','es2015','stage-2']
    });
    var Enzyme = require('enzyme');
    var EnzymeAdapter = require('enzyme-adapter-react-15');
    Enzyme.configure({adapter: new EnzymeAdapter()});
