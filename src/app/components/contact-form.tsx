import axios from "axios";
import { tree } from "next/dist/build/templates/app-page";
import { headers } from "next/headers";
import { useState } from "react";
import { useForm } from "react-hook-form"
import { z } from "zod";

const config = {
  headers: {
    'Accept': 'application/json'
  }
}

const contactSchema = z.object({
    nome: z.string(),
    email: z.string().email(),
    mensagem: z.string()
})

type ContactSchema = z.infer<typeof contactSchema>

export function ContactForm() {

    const {register, handleSubmit } = useForm<ContactSchema>();
    const [emailSent, setEmailSent] = useState(false);

    function sendContactEmail(data: ContactSchema) {
      console.log(data);
        axios.post('https://formspree.io/mvowzdpk', data, config).then(res => {
          setEmailSent(true);
        }).catch(err => {
          console.error('Ocorreu um erro durante o envio da mensagem:', err)
        });
    }

    return(
        <div className="contact-wrapper">
          <div className="section-title">
            <h3>BORA BATER UM PAPO?</h3>
          </div>
          <div className="text-area">
            <p>
              Quer a nossa visão e produção presentes na sua ideia? Precisa de
              dados e análises? Entre em contato!
            </p>
          </div>
          <div className="text-area">
            <p>Se preferir, entre em contato via 300noise@gmail.com.</p>
          </div>
          {!emailSent ? (
            <div className="form-wrapper">
              <form onSubmit={handleSubmit(sendContactEmail)} className="contact-form">
                <input type="text" id="name" placeholder="Nome" {...register('nome')} required/>
                <input type="email" id="email" placeholder="Email"  {...register('email')} required/>
                <textarea
                  rows={8}
                  id="content"
                  placeholder="O que tem para nos dizer?"
                  {...register('mensagem')}
                  required
                ></textarea>
                <button type="submit">
                  ENVIAR
                </button>
              </form>
            </div>
          ) : (
            <div>
              <p>Recebemos seu e-mail!</p>
              <p>Responderemos assim que possível! </p>
            </div>
          )}
        </div>
    )
}