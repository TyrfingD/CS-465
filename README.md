# CS-465

Throughout this degree program I have been asked to use several different programming languages to solve a variety of tasks. Being able to perform full-stack development in this course with MEAN, each part of which is based on JavaScript at its core, was quite refreshing.

The portion of this website that a user interacts with is composed of different views of a distinct page. 
The work I have done on this website has been written in “node” JavaScript (node.js) notation, and the data is stored via the MongoDB database software, capping off the ‘M’ and the ‘N’ of MEAN stack development. Each of these letters represents a different JavaScript methodology. 

We use a NoSQL database like Mongo here because it allows entries to carry different fields. With an SQL database, adding flights to a list that started with cruises would require adding null fields for 'room' information in the flights, and then going back and adding in a null 'seat class' field to every cruise entry.
The entries in such a database are stored in JSON format, which uses key and value pairs, rather than relying on the specific order of fields within each entry.

The customer’s UI is specifically generated by ‘express’ (the ‘E’ in MEAN), with many of its functions handled by lines of JavaScript known as ‘handlebars’, which delivers information stored in the database via MongoDB to generate the UI on the server-side of the application.
In contrast to the customer-facing side of the application, the administrative functions are handled by a single-page application that communicates with the Mongo database to create a separate UI using Angular JavaScript notation (the ‘A’ in MEAN).
After rebuilding the Travlr website functionality in an Angular SPA carried from the previous Express HTML version, I can say that the new structure is more straightforward. The typescript (ts) files in particular are more intuitive to a beginner at JavaScript like me. Instead of controllers and routes, each discrete unit of the webpage is more simply structured as a listed component within an "app" folder, with .html and .ts files that reference each other when necessary.
As I have learned throughout these modules, A single page application is fast because it does not need to reload the page information for each new view. All the page data is pre-loaded. The disadvantage of this is that it may become needlessly complex to do this for broader applications. For example, it would be inadvisable to attempt to put the entirety of SNHU online within one SPA. 

This led to the development of any API endpoints within the travlr at all. Prior to this additional functionality, someone viewing the website could not make changes to the trip listings without access to the raw html, instead of simply using buttons shown on the page (though I won’t claim it would be impossible to construct such functionality without an SPA, the process would be quite different).

Testing the page's functionality simply involves opening the page, observing what is displayed, and attempting to fill the available fields and pressing the available buttons. It is a good idea to intentionally try to leave required fields blank or submit data in the wrong formats (like a non-image file type in an image submission), to test that errors are handled correctly. Such testing can often be automated by using a bot to issue simulated data, but care must be taken here. The login step can limit the function of bots (for good reason), and if your bot can automate or bypass this step then it represents a potential vulnerability to your security if someone else gains access to those functions.

As the first half of the final step of my computer science program (along with the upcoming Full Stack Development 2 class), which seems to bring together many of the concepts I have been introduced to in earlier courses, this course represents my understanding of how software applications are designed, used, and maintained. While my dream job is not in software design, my hope is that this degree (and all the skills that come with it), will enhance my current Physics degree to make me more marketable towards a career in a scientific research field.
