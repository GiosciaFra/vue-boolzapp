// Milestone 1
// Replica della grafica con la possibilità di avere messaggi scritti dall’utente (verdi) e
// dall’interlocutore (bianco) assegnando due classi CSS diverse
// Visualizzazione dinamica della lista contatti: tramite la direttiva v-for, 
// visualizzare nome e immagine di ogni contatto
// Milestone 2
// Visualizzazione dinamica dei messaggi: tramite la direttiva v-for, 
// visualizzare tutti i messaggi relativi al contatto attivo all’interno del pannello della conversazione
// Click sul contatto mostra la conversazione del contatto cliccato


// Milestone 3
// Aggiunta di un messaggio: l’utente scrive un testo nella parte bassa e digitando “enter” 
// il testo viene aggiunto al thread sopra, come messaggio verde
// Risposta dall’interlocutore: ad ogni inserimento di un messaggio, 
// l’utente riceverà un “ok” come risposta, che apparirà dopo 1 secondo.
// Milestone 4
// Ricerca utenti: scrivendo qualcosa nell’input a sinistra, vengono visualizzati 
//solo i contatti il cui nome contiene le lettere inserite (es, Marco, Matteo Martina -> Scrivo “mar” rimangono solo Marco e Martina)
// Milestone 5 - opzionale
// Cancella messaggio: cliccando sul messaggio appare un menu a tendina che permette di cancellare 
//il messaggio selezionato
// Visualizzazione ora e ultimo messaggio inviato/ricevuto nella lista dei contatti 



const { createApp } = Vue

createApp({
    data() {
        return {
            contacts: [
                {
                    name: 'Michele',
                    avatar: './img/avatar_1.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Hai portato a spasso il cane?',
                            status: 'sent',
                             showOptions: false,
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Ricordati di stendere i panni',
                            status: 'sent',
                             showOptions: false,
                        },
                        {
                            date: '10/01/2020 16:15:22',
                            message: 'Tutto fatto!',
                            status: 'received',
                             showOptions: false,
                        }
                    ],
                    lastMessage: '', // Ultimo messaggio
                    lastMessageTime: '' // Orario dell'ultimo messaggio
                },
                {
                    name: 'Fabio',
                    avatar: './img/avatar_2.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '20/03/2020 16:30:00',
                            message: 'Ciao come stai?',
                            status: 'sent',
                             showOptions: false,
                        },
                        {
                            date: '20/03/2020 16:30:55',
                            message: 'Bene grazie! Stasera ci vediamo?',
                            status: 'received',
                             showOptions: false,
                        },
                        {
                            date: '20/03/2020 16:35:00',
                            message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                            status: 'sent',
                             showOptions: false,
                        }
                    ],
                },
                {
                    name: 'Samuele',
                    avatar: './img/avatar_3.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '28/03/2020 10:10:40',
                            message: 'La Marianna va in campagna',
                            status: 'received',
                             showOptions: false,
                        },
                        {
                            date: '28/03/2020 10:20:10',
                            message: 'Sicuro di non aver sbagliato chat?',
                            status: 'sent',
                             showOptions: false,
                        },
                        {
                            date: '28/03/2020 16:15:22',
                            message: 'Ah scusa!',
                            status: 'received',
                             showOptions: false,
                        }
                    ],
                },
                {
                    name: 'Alessandro B.',
                    avatar: './img/avatar_4.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Lo sai che ha aperto una nuova pizzeria?',
                            status: 'sent',
                             showOptions: false,
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Si, ma preferirei andare al cinema',
                            status: 'received',
                             showOptions: false,
                        }
                    ],
                },
                {
                    name: 'Alessandro L.',
                    avatar: './img/avatar_5.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ricordati di chiamare la nonna',
                            status: 'sent',
                             showOptions: false,
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Va bene, stasera la sento',
                            status: 'received',
                             showOptions: false,
                        }
                    ],
                },
                {
                    name: 'Claudia',
                    avatar: './img/avatar_6.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ciao Claudia, hai novità?',
                            status: 'sent',
                             showOptions: false,
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Non ancora',
                            status: 'received',
                             showOptions: false,
                        },
                        {
                            date: '10/01/2020 15:51:00',
                            message: 'Nessuna nuova, buona nuova',
                            status: 'sent',
                             showOptions: false,
                        }
                    ],
                },
                {
                    name: 'Federico',
                    avatar: './img/avatar_7.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Fai gli auguri a Martina che è il suo compleanno!',
                            status: 'sent',
                             showOptions: false,
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Grazie per avermelo ricordato, le scrivo subito!',
                            status: 'received',
                             showOptions: false,
                        }
                    ],
                },
                {
                    name: 'Davide',
                    avatar: './img/avatar_8.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ciao, andiamo a mangiare la pizza stasera?',
                            status: 'received',
                             showOptions: false,
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
                            status: 'sent',
                             showOptions: false,
                        },
                        {
                            date: '10/01/2020 15:51:00',
                            message: 'OK!!',
                            status: 'received',
                            showOptions: false,
                        }
                    ],


                },
                
            
            ],

            // array di risposte possibili del pc
            pcResponses: [
                "Va bene!",
                "Capisco.",
                "Interessante.",
                "Molto bene!",
                "Ecco cosa penso:",
                "Hai ragione.",
                "Non sono sicuro di capire completamente, ma va bene.",
                "Certo!",
                "Non so cosa dire a riguardo.",
                "Che bello!",
                "Hmm, interessante punto di vista.",
                "Certamente.",
                "Mi fa piacere sentirlo!",
                "Hmm, non so cosa dire.",
                "Ho bisogno di riflettere su questo.",
                "Mi sembra giusto.",
                "Ok, andiamo avanti.",
                "Che notizia interessante!",
                "Non ci avevo mai pensato.",
                "Grazie per la tua opinione.",
                "Posso chiederti di espandere su questo?",
                "Molto interessante!",
                "Oh, questa è nuova per me.",
                "Non sono sicuro di condividere la tua opinione.",
                "Mi dispiace, non posso rispondere a questo.",
            ],
            // contatto ATTUALMENTE attivo nella chat
            activeContact: {},

            // contatto TEMPORANEAMENTE attivo per le risposte
            temporaryActiveContact: null,

            // testo barra di ricerca
            searchName: '',

            //  variabile per gestire lo stato dell'icona
            isMessageSent: false,

            contactStatus: 'online',
        };
    },

    mounted() {
        // all'avvio dell'app, imposto il primo contatto come quello attivo di default
        this.activeContact = this.contacts[0];

        // Inizializzo i campi lastMessage e lastMessageTime per ogni contatto
        this.contacts.forEach(contact => {
        const lastMessage = contact.messages[contact.messages.length - 1];
        
        if (lastMessage) {
            contact.lastMessage = lastMessage.message;
            contact.lastMessageTime = lastMessage.date;
        } else {
            contact.lastMessage = 'Nessun messaggio';
            contact.lastMessageTime = '';
        }
    });
    },

    methods: {
        // Cambio il contatto attivo quando si fa clic su un contatto nella lista chat
        changeActiveContact(index) {
            this.activeContact = this.contacts[index];

            
        },

        // invio un messaggio alla chat attiva e simulo un risposta dopo 1s
        sendMessage() {

            // Ottiengo il riferimento all'elemento dell'input del messaggio
            const messageInput = this.$refs.messageInput;

            // Ottiengo il testo inserito nell'input del messaggio
            const text = messageInput.value.trim();

            if (text.trim() === '') {

                // non invio messaggi vuoti
                return;
            }
            const newMessage = {
                date: new Date().toLocaleString(),
                message: text,
                status: 'sent',
                showOptions: false,

            };

            // Nasconde il menu a tendina per tutti i messaggi
            this.activeContact.messages.forEach(message => {
                message.showOptions = false;
            });

            // Memorizzo temporaneamente la chat attualmente attiva
            this.temporaryActiveContact = this.activeContact;

            this.activeContact.messages.push(newMessage);

            // Pulisco l'input del messaggio
            this.$refs.messageInput.value = '';

            // Aggiorna lo stato "sta scrivendo..." quando l'utente sta scrivendo
            this.contactStatus = 'sta scrivendo...';
            
            setTimeout(() => {
                const responseMessage = {
                    date: new Date().toLocaleString(),
                    message:  this.getRandomPCResponse(),
                    status: 'received',
                    showOptions: false,
                };

                // Utilizzo la chat memorizzata temporaneamente per la risposta automatica
                this.temporaryActiveContact.messages.push(responseMessage);

                // Aggiorno l'ultimo messaggio nella lista dei contatti
                this.temporaryActiveContact.lastMessage = responseMessage.message;
                this.temporaryActiveContact.lastMessageTime = responseMessage.date;


                // Resetto la chat attualmente attiva
                this.temporaryActiveContact = null;

                // Resetto lo stato dopo aver inviato il messaggio
                this.isMessageSent = false;

                // Risposta automatica del PC
                this.contactStatus = 'online';

                // Riporto l'icona del microfono subito dopo l'invio del messaggio
                this.$refs.messageInput.focus(); // Focus sull'input
                this.handleInput(); // Chiamata alla funzione handleInput per gestire l'icona subito
            }, 1000);

        },


       
        getRandomPCResponse() {
            
            const randomIndex = Math.floor(Math.random() * this.pcResponses.length);
            return this.pcResponses[randomIndex];
        },


         // Funzione per gestire l'icona in base al contenuto dell'input
        handleInput() {
            this.isMessageSent = this.$refs.messageInput.value.trim() === '';
        },
    
        sendMessageByAirplane() {
            if (!this.isMessageSent && this.$refs.messageInput.value.trim() !== '') {
                this.sendMessage();

                // Imposto lo stato di invio del messaggio e resetto l'input
                this.isMessageSent = true;
                this.$refs.messageInput.value = '';
                
            };
        },

        // filtro i contatti in base al testo inserito nella search bar
        searchContact() {

            this.searchName = this.searchName.toLowerCase();

            const filterContacts = this.contacts.filter(contact => {

                const contactName = contact.name.toLowerCase();

                return contactName.includes(this.searchName);

            });

            return filterContacts;

        },

        // mostro il menu a tendina dei messaggi
        showMessageOptions(messageIndex) {

            this.activeContact.messages.forEach(message => {
                message.showMessageOptions = false;
            });

            // mostro il menu a tendina solo per il messaggio cliccato
            this.activeContact.messages[messageIndex].showOptions = true;


        },

        // elimino il messaggio
        deleteMessage(messageIndex) {

            // rimuovo il messaggio dell'array dei messagi
            this.activeContact.messages.splice(messageIndex, 1);
        },


        toggleOptions(currentMessage) {

            // inverto lo stato di 'showOptions' per mostrare o nascondere il menu a tendina
             currentMessage.showOptions = !currentMessage.showOptions;
        },
    
        deleteMessage(currentMessage) {

            //ottengo l'indice del messaggio corrente 
            const index = this.activeContact.messages.indexOf(currentMessage);

            // verifico se l'indice è valido
            if (index !== -1) {

                // se è valido rimuovo il mess 
                this.activeContact.messages.splice(index, 1);

                if (index !== -1) {
                    this.activeContact.messages.splice(index, 1);
            
                    // Aggiorna lastMessage e lastMessageTime in base all'ultimo messaggio disponibile
                    const lastMessage = this.activeContact.messages.length > 0
                        ? this.activeContact.messages[this.activeContact.messages.length - 1]
                        : null;
            
                    if (lastMessage) {
                        this.activeContact.lastMessage = lastMessage.message;
                        this.activeContact.lastMessageTime = lastMessage.date;
                    } else {
                        this.activeContact.lastMessage = 'Nessun messaggio';
                        this.activeContact.lastMessageTime = '';
                    }
                }
            }
        },
    },
}).mount('#app');