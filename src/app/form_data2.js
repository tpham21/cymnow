export const FORMDATA  = [
	{
		"type": "stepper",
		"label":["General Information", "Group", "Additional Fields"],
		"name" :["bride", "groom", "wedding_infomation", "consulation"],
		"flex":"100%",
		"linear":false,
		"style":"horizontal",
		"fields":[
			[
				{
					"type": "input",
					"label":"Username",
					"name" :"username",
					"flex":"45%"
				},
				{
					"type": "input",
					"label":"Email",
					"name" :"email",
					"flex":"45%"
				},
				{
					"type": "dropdown",
					"label":"Level",
					"name" :"level",
					"flex":"95%",
					"fields":["Data Collector", "Form Builder", "Company Admin", "Server Admin"]
				},
				{
					"type": "input",
					"label":"First Name",
					"name" :"first_name",
					"flex":"45%"
				},
				{
					"type": "input",
					"label":"Last Name",
					"name" :"last_name",
					"flex":"45%"
				},
				{
					"type": "input",
					"label":"Password",
					"name" :"password",
					"flex":"45%"
				},
				{
					"type": "input",
					"label":"Retype Password",
					"name" :"password2",
					"flex":"45%"
				},
				{
					"type": "checkbox",
					"label":"Force users to change their password at their first login",
					"name" :"pass",
					"flex":"45%"
				},
				{
					"type": "checkbox",
					"label":"Activate user at the end of the creation process",
					"name" :"password2",
					"flex":"45%"
				},
				{
					"type": "checkbox",
					"label":"Send user has been created (by administrator) notification to new user",
					"name" :"password2",
					"flex":"45%"
				}
			],[
				{
					"type": "label",
					"label":"Assign User to one or more groups by selecting it below",
				},
				{
					"type": "checkbox",
					"label":"2016 Nov Cert",
					"name" :"last_name",
					"flex":"100%"
				},
				{
					"type": "divider",
				},
				{
					"type": "checkbox",
					"label":"2016 Nov Cert",
					"name" :"last_name",
					"flex":"100%"
				},
				{
					"type": "divider",
				},
				{
					"type": "checkbox",
					"label":"Form Builder Certification",
					"name" :"last_name",
					"flex":"100%"
				},
				{
					"type": "divider",
				},
				{
					"type": "checkbox",
					"label":"IformBuilder Customers",
					"name" :"last_name",
					"flex":"100%"
				},
				{
					"type": "divider",
				},
				{
					"type": "checkbox",
					"label":"Test Usernames",
					"name" :"last_name",
					"flex":"100%"
				},
				{
					"type": "divider",
				},
			],[
				{
					"type": "checkbox-group",
					"label":"Age",
					"name" :"age",
					"flex":"100%",
					"fields":["18 – 24", "25 – 30", "31 – 35", "36 – 45", "Over 45"]
				},
				{
					"type": "input",
					"label":"Future Address",
					"name" :"future_address",
					"flex":"45%"
				},

				{
					"type": "input",
					"label":"City of Wedding",
					"name" :"city_wedding",
					"flex":"45%"
				},

				{
					"type": "date",
					"label":"Wedding Date",
					"name" :"wedding_date",
					"flex":"45%"
				},

				{
					"type": "time",
					"label":"Time of Ceremony",
					"name" :"ceremony_time",
					"flex":"45%"
				},

				{
					"type": "time",
					"label":"Time of Reception",
					"name" :"reception_time",
					"flex":"45%"
				},

				{
					"type": "radio",
					"label":"Cultural Wedding?",
					"name" :"culural_wedding",
					"fields":["Yes", "No"],
					"flex":"100%"
				},

				{
					"type": "radio",
					"label":"Wedding Budget",
					"name" :"budget",
					"fields":["Under $10,000", "$10,001 - $15,000", "$15,001 - $20,000", "$20,001 - $25,000", "Over $25,000"],
					"flex":"100%"
				},
				{
					"type": "radio",
					"label":"Number of guests",
					"name" :"guests",
					"fields":["0-50", "50-100", "150-200", "200-250", "250-300", "300 – 350", "Over 350", "Used for price per person estimates, such as invitations, catering, and cake"],
					"flex":"100%"
				},
				{
					"type": "radio",
					"label":"What type of wedding is planned",
					"name" :"wedding_type",
					"fields":["Very Formal", "Formal", "Semi-Formal", "Informal", "Other"],
					"flex":"100%"
				},
				{
					"type": "textarea",
					"label":"What are two words best describes your wedding day vision (Suggestions are below): (Elegant, Simple, Party, Celebration, Traditional, Romantic, Sophisticated, Glamorous, Contemporary, Vintage, Magical, Festive, Conservative)",
					"name" :"day_vision",
					"flex":"100%"
				},

				{
					"type": "radio",
					"label":"What type of wedding is planned",
					"name" :"wedding_type",
					"fields":["Very Formal", "Formal", "Semi-Formal", "Informal", "Other"],
					"flex":"100%"
				},

				{
					"type": "radio",
					"label":"How many bridesmaids, including the Maid of Honor",
					"name" :"number_of_bridesmaids",
					"fields":["1-3", "4-6", "7-10", "10 or more"],
					"flex":"100%"
				},
				{
					"type": "radio",
					"label":"How many groomsmen, including Best Man?",
					"name" :"number_of_groomsmen",
					"fields":["1-3", "4-6", "7-10", "10 or more"],
					"flex":"100%"
				},
				{
					"type": "radio",
					"label":"Will you have a flower girl/s? If so, how many?",
					"name" :"number_of_flowergirls",
					"fields":["1-2","3-4"],
					"flex":"100%"
				},
				{
					"type": "radio",
					"label":"Will you have a ring bearer",
					"name" :"ring_bearer",
					"fields":["Yes","No"],
					"flex":"100%"
				},
				{
					"type": "input",
					"label":"What is your primary color",
					"name" :"primary_color",
					"flex":"45%"
				},
				{
					"type": "input",
					"label":"What is your secondary color",
					"name" :"secondary_color",
					"flex":"45%"
				},
				{
					"type": "input",
					"label":" What is your metal",
					"name" :"metal",
					"flex":"45%"
				},
			]
		]
	}
];


/*
	[{
		TYPE (string): button, checkbox, radio button, textarea, input, dropdown, divider, stepper
		
		NAME (string/array): applied for button/checkbox/radio button/textarea/input/dropdown/stepper/tree
		
		LABEL (string/array): applied for button/checkbox/radio button/textarea/input/dropdown/stepper/tree
		
		
		MODEL (obj): required
		
		FLEX button/checkbox/radio button/textarea/input/dropdown
		
		FIELDS (array): required for radio button and dropdown

	}]
*/