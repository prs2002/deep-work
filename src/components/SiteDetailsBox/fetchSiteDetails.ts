import { DropdownOptions } from "../../types/DropdownOptions";
import { PromptParameters } from "../../types/PromptParameters";
import { SiteDetails } from "../../types/SiteDetails";
import { Website } from "../../types/Website";
import { siteTags } from "../../utils/CONSTANTS/constants";

const dropdownOptions: DropdownOptions[] = [
  {
    id: "0",
    value: "Untagged",
  },
  {
    id: "1",
    value: "Productive",
  },
  {
    id: "2",
    value: "Unsure",
  },
  {
    id: "3",
    value: "Wasteful",
  },
];

function extractDomainFromURL(url: string): any {
  url = url.substring(0, 4) === "http" ? url : "http://" + url;
  const d: any = new URL(url);
  const tmp: string[] = d.hostname.split(".");
  const n: number = tmp.length;

  if (n >= 2) {
    if (n === 4 || (n === 3 && tmp[n - 2].length <= 3)) {
      d.domain = `${tmp[n - 3]}.${tmp[n - 2]}.${tmp[n - 1]}`;
      d.domainX = tmp[n - 3];
    } else {
      d.domain = `${tmp[n - 2]}.${tmp[n - 1]}`;
      d.domainX = tmp[n - 2];
    }
  }
  d.domainX = d.domainX.charAt(0).toUpperCase() + d.domainX.slice(1);
  return d;
}

export async function fetchSiteDetails(
  website: string,
  setSiteDetails: (siteDetails: SiteDetails[]) => void,
  setTime: (time: string) => void,
  setViolations: (violations: string) => void,
  setMaxTime: (maxTime: string) => void,
  setActiveOption: (activeOption: DropdownOptions) => void
) {
  chrome.storage.local.get().then((res) => {
    let tag: number = 0;
    const site: Website[] | null = res.taggedURLs?.filter(
      (e: Website) => e.website === website
    );
    if (site?.length) {
      tag = site[0].tag;
      setActiveOption(dropdownOptions[tag]);
    }
    const promptParameters: PromptParameters | null =
      res.promptParameters?.[website];

    setTime((promptParameters?.promptInterval || "180") as string);
    setViolations((promptParameters?.promptViolations || "5") as string);

    const siteDetails: SiteDetails[] = [
      {
        label: "Name of the website",
        value: extractDomainFromURL(website).domainX,
      },
      {
        label: "Site Address",
        value: website,
      },
      {
        label: "Site Type",
        value: siteTags[tag],
      },
      {
        label: "Alert Intervals (in sec)",
        value: (promptParameters?.promptInterval || "180") as string,
      },
      {
        label: "Alert Tolerance Limit",
        value: (promptParameters?.promptViolations || "5") as string,
      },
    ];

    if (tag === 3) {
      setMaxTime((res.maxTimes?.[website] || "20") as string);

      siteDetails.push({
        label: "Usage Per Day (in min)",
        value: (res.maxTimes?.[website] || "20") as string,
      });
    }
    // setActiveOption(dropdownOptions[tag])
    setSiteDetails(siteDetails);
  });
}
