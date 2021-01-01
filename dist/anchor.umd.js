(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
    typeof define === 'function' && define.amd ? define('umd', factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.umd = factory());
}(this, (function () { 'use strict';



    class Anchor {
        constructor(fasten = {}, mixins = [], debug = false) {
            this.namespace = `_${Math.random().toString(36).slice(-6)}_`.toUpperCase();

            this.global = window || global;

            return this.build(fasten, mixins, debug);
        }

        register(key, value) {
            if (this.global[this.namespace] && !this.global[this.namespace][key]) {
                return this.global[this.namespace][key] = value;
            }

            return false;
        }

        build(fasten, merges, debug) {
            if (this.global[this.namespace]) {
                return false;
            }

            this.global[this.namespace] = fasten;

            merges.forEach((merge) => Object.assign(this.global[this.namespace], merge));

            this.register('register', this.register);

            if (!!debug) {
                console.log('ANCHOR:FASTEN', this.namespace, this.global[this.namespace]);
            }

            return this.global[this.namespace];
        }
    }

    return Anchor;

})));
