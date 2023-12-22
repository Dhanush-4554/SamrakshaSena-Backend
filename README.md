# Backend
SMART INDIA HAKATHON 2023
TEAM NAME – ABD-Vinners

THEME – Disaster Management

PROBLEM STATEMENT – 

Problem statement title – An application under which all rescue agencies are registered and which can display the location of other rescue relief agencies during natural/ man made calamities
Problem Statement Description – 
To build such an application. there is need to create a central database where all rescue agencies can register their information, including their location, contact details, and areas of expertise. This information could be entered manually by agency administrators, or automated using GPS or other location tracking technologies. Once the database is populated, the application would need to be designed to display this information in an easy-to-use interface: It could include a map that shows the locations of all registered rescue agencies, along with filters that allow users to narrow down the results based on specific criteria, such as the type of disaster, the resources available, or the time since the last reported activity. In addition to displaying the locations of rescue agencies, the application could also include features for communication and collaboration. For example, agencies could send alerts or requests for assistance to each other directly through the application, or collaborate on shared resources such as medical equipment or transportation. Security and privacy would be major considerations in building such an application. It would be important to ensure that only authorized users have access to the database, and that sensitive information such as personal contact details is protected. Overall, building an application that allows rescue agencies to coordinate their efforts and provide aid more effectively could be a valuable tool for responding to natural or man-made disasters.

SOLUTION PROPOSED (ABSTRACT) –
The Disaster Management and Coordination web-application serves as a pivotal solution in times of crisis, offering a centralized platform for rescue agencies to swiftly respond and share vital information. Its array of essential features ensures efficient disaster management while fostering collaboration and communication among stakeholders. Let's delve deeper into these key attributes.

1. Agency Registration and Login:
This foundational feature enables rescue agencies to register effortlessly, ensuring that their essential information is securely stored. Agencies can provide their name, contact number, email, address, description, category, and location, thus facilitating seamless identification during disaster response. Password-protected accounts guarantee data privacy and accessibility for registered agencies, ensuring a smooth login process. Further, Data privacy is done by hashing of password using bcrypt and jwt authentication.

2. Enhanced Emergency Alert System:
In times of crisis, our Enhanced Emergency Alert System is designed to seamlessly connect users with the nearest and most appropriate rescue agency based on the type of emergency. Here's how it works:
User Emergency Button:
When an emergency arises, the User Emergency Button becomes your lifeline. A simple click alerts the system, triggering an instant response from the nearest and most relevant agency. This system is finely tuned to categorize emergencies, ensuring that the right agency is notified promptly. <br>
**Automated Phone Call Alerts:
Our system supplements digital alerts with an automated phone call to appropriate nearest agency. In the event of an emergency, the system automatically dials the appropriate agency, delivering critical information and instructions in real-time. This approach leaves no room for crucial details to be overlooked.<br>
**Automated SMS Alerts:
To further enhance the response, in addition to phone calls, our system sends automated SMS alert to the appropriate nearest agency. This SMS message include a link to the emergency location with the shortest route, tailored to the type of emergency. Alongside location information, the SMS contains an emergency alert that demands immediate attention and action.<br>
By combining automated phone calls, SMS alerts, and the precision of our categorization system, our enhanced emergency notification system ensures that agencies receive the vital information they need through multiple channels. This comprehensive approach greatly enhances their ability to respond swiftly and efficiently to any emergency situation.
<br>
3. View Locations of All Agencies:
Navigating through the application, users can access a map-based feature that visualizes the geographical locations of all registered rescue agencies. Map markers provide at-a-glance access to agency details and contact information. Users can filter agencies based on their categories, facilitating efficient allocation of resources during emergencies. Additionally, integrated navigation directions offer swift routes to agency locations, ensuring timely response.

4. Agencies Communication Room:
At the heart of the application lies the Agencies Communication Room, where rescue agencies converge for real-time collaboration. This dynamic space includes chat room equipped with real-time chat functionality, discussion boards for in-depth conversations, and file-sharing capabilities for seamless information exchange. This feature fosters effective coordination among agencies, enhancing disaster response efforts.

5. Government Department Registration:
This feature extends an invitation to government departments to join the network of agencies actively involved in disaster management. By registering, government entities can contribute their expertise and resources, thereby strengthening the collective response to crises.

6. Information Containers for Different Disaster Types: 
To empower users with knowledge and preparedness, the application includes dedicated information containers for various types of disasters, such as earthquakes, floods, and fires. These containers serve as repositories of safety tips and guidelines, ensuring that users are well-informed and equipped to navigate challenging situations.



**Extra Feature: Online Donation Camps (optional): 
As a testament to the application's commitment to comprehensive disaster relief, users have the option to contribute to disaster relief efforts through online donation camps. This feature enables individuals to support affected communities by donating funds, reinforcing the spirit of unity and compassion during trying times.

In conclusion, the Disaster Management and Coordination web-application stands as a beacon of hope during disasters. It empowers rescue agencies, government departments, and users with tools and information necessary for effective disaster management. By seamlessly integrating technology, communication, and collaboration, this platform ensures that help reaches those in need promptly. It's not just an application; it's a lifeline, a source of resilience, and a testament to the power of collective action during times of crisis.





Tech Stacks Used : 

Frontend : 
	React.js
	Socket.io 
	Chakra UI
	Maps ( Leaflet , Google Maps )

Backend :
	Node.js
	Express.js
	Socket.io – server
	Mongoose
	Jwt(JSON Web Token), 
bcrypt.js
	Twillio API

DataBase :
	MongoDB

