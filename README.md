Frontend OverView:

              Application is built on React Framework.It will display the data which will fetch data of Top 10 hackernews stories from my backend url.
              On Display we will see Title,Score,Author,Time. Each story will take us through new tab listing all about it. Loading message while fetching stories.
              Error Handling is also there to deal with any potential mishappening or network issues.     


Structure:      

                    /frontend
                    │── /src
                    │   │── /components
                    │   │   ├── NewsItem.js       # Component to display HackerNews stories  
                    │   │── App.js                # Main component
                    │   │── index.js              # Render the App
                    │   │── App.css               # Styling
                    │── package.json              # Dependencies and scripts
                    │── README.md                 # Documentation

Setup and Instructions:

            1. Open terminal. Run react command -- ** npx create-react-app frontend **. 
            
            2. Use Command---  **npm install axios**  
            
            3. Create components folder then create NewsItem.js file .

            4. App.js  --- Main componenet  
                            It will fetch data from backend and display in lists. For styling App.css .Error and loading is being handled. 
                            
            5. Install npm if not already installed
            
            6. Start Development server Open **http://localhost:3000** in browser.  

Notes:   
      
      Its responsive and works on mobile,desktop and laptop.
      Uses React hooks (useEffect, useState) for fetching data.
      




















