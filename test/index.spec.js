import test from "https://raw.githubusercontent.com/n2geoff/testit/master/dist/testit.min.js";
import Anchor from "../src/index.js";

test.it({
    "achor class exists": function () {
        test.assert(Anchor);
    }
}).run();

