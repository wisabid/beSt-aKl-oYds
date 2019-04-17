# beSt aKl oYds aka Beat All Odds for Sky Betting

A `Beat all Odds` application for Sky Bet. The naming comvention is a bit strange but if you notice, there is the word `SKY` hidden within.

## Technology Stack

The application is developed using create-react-app with React 16.8 under the hood. 

## Pre-requisites

1. Web socket should be brought up and running on `ws://localhost:8889`. If the target environment is windows, please modify `WS_URL` constant value found in `src/store/constants/constants.js`.  

2. Enter your name in the login screen to access the application. No password option has been provided for obvious reasons. There is'nt any local storage entry being made when you access the application. A refresh would take you to the login screen again. To persist this data, Please hard code username in `src/App.js`.  

## Instructions

### Task One
1. Build an application which displays the currently live Football events. : Complete - Live football events are shown in the homepage post login.  

2. Add an option to show the primary market for each of the events : Complete - Click on `+` appearing on each line in the homepage.  

3. Add a feature to toggle the odds display between fractional and decimal : Complete - Click on the price shown with in `Outcome` section.  

### Task Two
1. Add a feature to allow users to browse for full details for one of the events : Complete - Click on the event name to see the details page.  

2. Event responses sent via the WebSocket only include an array of IDs for the markets it includes. Use the Event payload to build further queries to the API so you can show a list of all the markets available for the event. : Complete - Please feel free to check the middleware `src/sagas/index.js`.  

3. Markets similarly contain an array of IDs for outcomes. Use this data to initially show the outcomes for the first ten markets only. : Complete - Please verify the details page by clicking on the event of homepage.  
Markets should be sorted by displayOrder (ascending) and then name. : Partially Complete as fall back on name is pending.  

4. Add the ability to load the outcomes for a market on demand : Complete - Please visit details page by clicking on an event in homepage and scroll down to see the less important markets. Click on those markets title and that will load the on demand outcome details associated.  

5. Use the displayable status to filter events, markets and outcomes which should not be shown to the user : Complete - All events, markets, outcomes etc are based on the same criteria. Please check the higher order functionality in `src/utils/displayWrapper.js` and the logic is also scattered on view components.  

### Task Three

1. Use the ability to subscribe to updates for events, outcomes and markets of interest. Handle these updates so that the UI correctly reflects any changes to data currently being displayed on the page. : Complete - You will find Subscribe option against all active events, markets and outcomes.  

2. Use the included images to help understand what status.suspended implies for the User. : Complete - The `suspended` option has been considered for outcomes and markets. Please check the app behaviour.  

3. Consider how the different levels of subscription affect the data received via the WebSocket. : Incomplete - Only 1 level of subscription has been handled as part of this assignment.  

4. On the overview page, instead of showing all events in one list, group them by their linkedEventTypeName property. A missing value should cause the grouping to fall back to the typeName property. : Complete - Please check homepage. The logic is in the reducer `src/store/reducers/live-events.js`  

5. Additionally, anywhere you are displaying full details of an event, where possible use the linkedEventTypeName to highlight the competition the event belongs to. : Complete - Please check homepage and details page.  

6. Add support for displaying markets with different types (i.e. win-draw-win and correct-score) with more appropriate layouts. - Partially Complete - Please visit detail page and click on the Market type for Market display based on category screen.  

7. Allow the user to click on outcomes to add them to a bet slip. - Partially Complete - An `Add to Bet` button will appear for all active outcomes. 

8. Manage WebSocket subscriptions to allow the bet slip to listen for updates to selected outcomes and markets as and when they change, and invalidate selections as appropriate. - Complete - Please verify monitoring the details or market category or primary market section of homepage.  

#### Excuses or Disclaimers (:P)

1. Had a hard time getting docker up in my windows 7 system.  

2. Got no response for my consolidated queries list and that delayed my development as I waited for couple days in the beginning. Well, I'am still waiting.   

3. Worked on the development stretching my day and night at the cost of my personal time. Glad I made it as committed.

4. Wanted to put more effort on testing, but hardly any time left. Be rest assured that I'am TDD bound.  

5. Code is not refactored, so you will not find it well structured.  

6. Could actually be used some simple listing and detailing components instead of repeating the code. So, less reusable as I just did not want to waste any time. My excuse, but I know it is not acceptable.  

6. Wanted to maintain semver and changelog, but my excuse.  

7. Wish me Good luck!


### Thank You

A big thank you for considering me for this position and making me heavy lift data centric manipulation. You made my react life ! Thanks a ton.  

