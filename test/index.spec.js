import test from "../node_modules/testit/dist/testit.js";
import Anchor from "../src/index.js";

test.it({
    "achor class exists": function () {
        test.assert(Anchor);
    }
}).run();

