import { Contact, Subtitle } from "../../styles/home"

const Contatos = () => {
    return (
        <>
        <div>
            <Contact>Contato
                <form action=""><br/>                    
                    <label htmlFor="email">Email</label> <br/>
                    <input type="email" id='email' name='email'></input> <br/>   

                    <label htmlFor="mensagem">Mensagem</label> <br/>
                    <textarea name='mensagem' id='mensagem' cols='50' rows='10'></textarea> <br/>

                    <input type="submit" class="" value="Send Message"></input>
                </form>
            </Contact>    
        </div>
        </>
    )
}

export default Contatos
