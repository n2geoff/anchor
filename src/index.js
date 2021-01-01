/* {Module} v{version} | MIT | https:// */

/**
 * Tiny global application registry
 */
class Anchor {
    constructor(fasten = {}, mixins = [], debug = false) {
        // create a unique namespace to avoid collisions
        this.namespace = `_${Math.random().toString(36).slice(-6)}_`.toUpperCase();

        // find environments global object
        this.global = window || global;

        // builds anchor instance
        return this.build(fasten, mixins, debug);
    }

    /**
     * Register
     *
     * Helper to extend functionality without overriding existing
     *
     * @param {String} key
     * @param {Any} value
     */
    register(key, value) {
        if (this.global[this.namespace] && !this.global[this.namespace][key]) {
            return this.global[this.namespace][key] = value;
        }

        return false;
    }

    /**
     * Builds the Application Anchor
     *
     * @param {Object} fasten
     * @param {Array} merges
     * @param {Boolean} debug
     */
    build(fasten, merges, debug) {
        if (this.global[this.namespace]) {
            // already initialized
            return false;
        }

        // add to global instance
        this.global[this.namespace] = fasten;

        // merge with global instance
        merges.forEach((merge) => Object.assign(this.global[this.namespace], merge));

        // app global utils
        this.register('register', this.register);

        if (debug) {
            // eslint-disable-next-line
            console.log('ANCHOR:FASTEN', this.namespace, this.global[this.namespace]);
        }

        return this.global[this.namespace];
    }
}

export default Anchor;
