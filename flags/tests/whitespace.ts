import { test, assertEqual } from "../../testing/mod.ts";
import { parse } from "../index.ts";

test(function whitespaceShouldBeWhitespace() {
  assertEqual(parse(["-x", "\t"]).x, "\t");
});
