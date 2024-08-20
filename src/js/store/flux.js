const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],
			info: "Mensagem de Flux.js",
			contactApiUrl : "https://playground.4geeks.com/contact/"
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			},
			changeInfo: () => {
				setStore({ info: "mudar uma ação!"})
			},
			getAllContacts: () => {
				const store = getStore()
				fetch(store.contactApiUrl + "agendas/vchoupina/contacts")
				.then((response)=>{
					console.log(response)
					return response.json()
				})
				.then((data)=>{
					console.log(data);
					setStore({contacts: data})
				})
				.catch(()=>{})
			}
		}
	};
};

export default getState;
