import {
  HomeContainer,
  NewsContainer,
  PictureContainer,
  FormContainer,
  LetMeReadFirstLink,
} from "./styles"

import logoRocketNews from '../assets/logoRocketNews.svg'
import { ArrowRight, PaperPlaneTilt } from 'phosphor-react'
import { useState } from "react"
import { useForm } from "react-hook-form"

interface LeadForm {
  emailInput: string
  id: string
}

export function Home() {

  const { register, handleSubmit } = useForm()
  const [emailLeads, setEmailLeads] = useState<LeadForm[]>([])

  function handleSubmitEmail(data: any) {
    event?.preventDefault()

    const id = String(new Date().getTime())

    const newLead: LeadForm = {
      emailInput: data.emailInput,
      id
    }

    alert('Email enviado com sucesso')
    setEmailLeads((state) => [...state, newLead])
  }

  console.log(emailLeads)

  return (
    <HomeContainer>
      <NewsContainer>
        <img src={logoRocketNews} />
        <h2>atualize ideias e informações em 5 minutos.</h2>
        <strong>tudo que você precisa saber para começar seu dia bem e informado</strong>
        <p>noticias sobre o universo Rocketseat, e tudo o que precisa para começar o dia melhor.
          perfeito para se preparar para codar ☕</p>
        <FormContainer action="" onSubmit={handleSubmit(handleSubmitEmail)}>
          <label htmlFor="emailInput">Insira seu e-mail:</label>
          <div>
            <input
              type="text"
              id="emailInput"
              placeholder="oi@rocketseat.com"
              {...register("emailInput")}
            />
            <button type="submit">
              <PaperPlaneTilt size={24} />
            </button>
          </div>
        </FormContainer>
        <LetMeReadFirstLink>
          <a href="#" >deixe-me ler primeiro</a>
          <ArrowRight size={24} />
        </LetMeReadFirstLink>
        {/* {emailLeads.map((lead) => {
          return (
            <p key={lead.id}>{lead.emailInput}</p>
          )
        })} */}
      </NewsContainer>
      <PictureContainer />
    </HomeContainer >
  )
} 