import React from "react";

export default function ChatBot() {
    return (
        <div className="chatbot">
            <button className="chatbot-opener">
                <img src="assets/images/comment.png" alt="image" />
            </button>
            <div className="chatbot-content">
                <button className="cmp-close"></button>
                <h3 className="block-caption">Assistente Riusalo.it</h3>

                <div className="messages">
                    <div className="message in">
                        Ciao, sono Riusalo, come posso esserti d’aiuto?
                    </div>
                    <div className="message out">
                        Salve, vorrei capire come funziona Riusalo, mi potrebbe
                        gentilmente aiutare?
                    </div>
                </div>

                <div className="block-footer">
                    <input type="text" placeholder="Inserisci messaggio" />
                    <button className="send-btn">
                        <span className="btn-text" data-modal="#info-modal">
                            Invia
                        </span>
                    </button>
                </div>
            </div>
        </div>
    );
}
