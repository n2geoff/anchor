function Anchor(fasten = {}, mixins = []) {
    const NAMESPACE = `_${Math.random().toString(36).slice(-6)}_`.toUpperCase();

    const GLOBAL = window || global || {};

    const register = function register(key, value) {
        if (GLOBAL[NAMESPACE] && !GLOBAL[NAMESPACE][key]) {
            return GLOBAL[NAMESPACE][key] = value;
        }

        return false;
    }.bind(GLOBAL[NAMESPACE]);

    function build(fasten, merges, register) {
        if (GLOBAL[NAMESPACE]) {
            return false;
        }

        GLOBAL[NAMESPACE] = fasten;
        GLOBAL[NAMESPACE]['register'] = register;

        merges.forEach((merge) => Object.assign(GLOBAL[NAMESPACE], merge));

        return GLOBAL[NAMESPACE];
    }
    return build(fasten, mixins, register);
}

export default Anchor;
