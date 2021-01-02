/**
 * Tiny global application registry
 */
function Anchor(opts = {}) {
    // create a unique namespace to avoid collisions
    const NAMESPACE = `_${Math.random().toString(36).slice(-6)}_`.toUpperCase();

    // global object anchor
    const GLOBAL = opts.global || {};

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
    * @param {Array} mixins
    * @param {Boolean} debug
    */
    function build(opts, register) {
        if (GLOBAL[NAMESPACE]) {
            // already initialized
            return false;
        }

        // add to global instance
        GLOBAL[NAMESPACE] = opts.register || {};
        GLOBAL[NAMESPACE]['register'] = register;

        // merge with global instance
        (opts.mixins || []).forEach((mixin) => Object.assign(GLOBAL[NAMESPACE], mixin));

        return GLOBAL[NAMESPACE];
    };

    return build(opts || {}, register);
};

export default Anchor;
