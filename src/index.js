/**
 * Tiny global application registry
 */
function Anchor(fasten = {}, mixins = []) {
    // create a unique namespace to avoid collisions
    const NAMESPACE = `_${Math.random().toString(36).slice(-6)}_`.toUpperCase();

    // find environments global object
    const GLOBAL = window || global || {};

    /**
    * Register
    *
    * Helper to extend functionality without overriding existing
    *
    * @param {String} key
    * @param {Any} value
    */
    const register = function register(key, value) {
        if (GLOBAL[NAMESPACE] && !GLOBAL[NAMESPACE][key]) {
            return GLOBAL[NAMESPACE][key] = value;
        }

        return false;
    }.bind(GLOBAL[NAMESPACE]);

    /**
    * Builds the Application Anchor
    *
    * @param {Object} fasten
    * @param {Array} merges
    * @param {Boolean} debug
    */
    function build(fasten, merges, register) {
        if (GLOBAL[NAMESPACE]) {
            // already initialized
            return false;
        }

        // add to global instance
        GLOBAL[NAMESPACE] = fasten;
        GLOBAL[NAMESPACE]['register'] = register;

        // merge with global instance
        merges.forEach((merge) => Object.assign(GLOBAL[NAMESPACE], merge));

        return GLOBAL[NAMESPACE];
    };

    return build(fasten, mixins, register);
};

export default Anchor;
