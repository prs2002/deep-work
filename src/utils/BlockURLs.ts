export function updateDynamicRules(blockedURLs: string[]) {
    chrome.declarativeNetRequest.getDynamicRules((previousRules) => {
      const previousRuleIds = previousRules.map((rule) => rule.id);
      chrome.declarativeNetRequest.updateDynamicRules({
        removeRuleIds: previousRuleIds,
        addRules: [
          {
            action: {
              type: chrome.declarativeNetRequest.RuleActionType.BLOCK,
            },
            condition: {
              isUrlFilterCaseSensitive: true,
              regexFilter: blockedURLs.join("|"),
              resourceTypes: [
                chrome.declarativeNetRequest.ResourceType.MAIN_FRAME,
                chrome.declarativeNetRequest.ResourceType.SUB_FRAME,
              ],
            },
            id: 1,
            priority: 2,
          },
        ],
      });
    });
  }