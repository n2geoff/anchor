(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
    typeof define === 'function' && define.amd ? define('umd', factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.umd = factory());
}(this, (function () { 'use strict';

    function Anchor(opts = {}) {
        const NAMESPACE = `_${Math.random().toString(36).slice(-6)}_`.toUpperCase();

        const GLOBAL = opts.global || {};

        const register = function register(key, value) {
            if (GLOBAL[NAMESPACE] && !GLOBAL[NAMESPACE][key]) {
                return GLOBAL[NAMESPACE][key] = value;
            }

            return false;
        }.bind(GLOBAL[NAMESPACE]);

        function build(opts, register) {
            if (GLOBAL[NAMESPACE]) {
                return false;
            }

            GLOBAL[NAMESPACE] = opts.register || {};
            GLOBAL[NAMESPACE]['register'] = register;

            (opts.mixins || []).forEach((mixin) => Object.assign(GLOBAL[NAMESPACE], mixin));

            return GLOBAL[NAMESPACE];
        }
        return build(opts || {}, register);
    }

    return Anchor;

})));
