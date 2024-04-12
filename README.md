# recenter
A browser extension to help you rebalance, refocus -- and recenter.
https://recenter.netlify.app/

We built this to solve a problem. I often found myself mindlessly clicking over to reddit, twitter, hacker news or some other site while thinking about a problem. And before I knew it I was being sucked in by something there. Those minutes were adding up. I wanted something that proactively tells me when this is happening and also summarizes how I was spending my time. We've been using it for a few weeks and find it to be massively helpful. Hope it helps you as as well.

Three ways to install this: 
1) Clone this repo (which allows you to get updates easily with a git pull*)
2) Download the dist file
3) From the chrome store (coming soon)

If you are using methods #1 or #2, you need to do the following:
Go to chrome://extensions in your Chrome browser,
Toggle on the developer mode at the top right.
Click the "Load unpacked" button and install it (by uploading the dist folder).

That's it.

PLEASE NOTE: If you decide to create hourly and daily summaries using your API key$, it will send summarized browsing data via the API. From what we can tell from their fine-print, this data is not used in training and stays private.
More here: https://trust.openai.com/

*The extension will not update automatically. To use the most recent update, please pull from this repo. Adfter each git pull you'll need to go to the extension background page (from chrome://extensions) to refresh it.
