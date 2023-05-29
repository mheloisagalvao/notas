import React from 'react';
import Navbar from '../components/Navbar';
import MockUp from '../assets/undraw_Book_lover_re_rwjy.png';
import MockUpDois from '../assets/undraw_Personal_notebook_re_d7dc.png';
import { BiCool, BiNotepad, BiPencil, BiWindowOpen } from 'react-icons/bi'

export default function Home() {
  return (
    <>
    <Navbar />
    <section class="bg-white mt-8 mb-8">
    <div class="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div class="mr-auto place-self-center lg:col-span-7">
            <h1 class="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-black">Crie notas para melhor controle e etc.</h1>
            <p class="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-black-400">
            
            Bem-vindo ao nosso site de criação e gerenciamento de anotações! Aqui, você pode liberar sua criatividade e organizar suas ideias em arquivos de anotação personalizados.
            </p>

            <p></p>

            <p>
            Com nossa interface intuitiva e fácil de usar, você pode criar anotações com facilidade, formatar o texto, adicionar imagens e até mesmo categorizá-las em diferentes pastas para uma organização eficiente.
            </p>

            <p></p>

            <p>
            Nossa plataforma permite que você acesse suas anotações de qualquer lugar, a qualquer momento, usando qualquer dispositivo. Nunca mais perca suas ideias brilhantes!
            </p>

            <p></p>

            <p>
            Além disso, oferecemos recursos avançados de pesquisa e filtro para ajudá-lo a localizar rapidamente suas anotações específicas. Com apenas alguns cliques, você encontrará a informação que precisa.
            </p>

            <p></p>

            <p>
            Compartilhe suas anotações com colegas de equipe, amigos ou familiares para colaboração e feedback. Trabalhe em conjunto para tornar suas ideias ainda mais poderosas!
            </p>

            <p></p>

            <p>
            Seja você um estudante, profissional criativo ou alguém que adora manter suas ideias organizadas, nosso site de criação e gerenciamento de anotações está aqui para ajudar. Comece a explorar sua criatividade e a manter suas ideias sempre à mão. Experimente agora e veja como é fácil anotar e gerenciar suas ideias de forma eficiente!
            </p>

            <p></p>
            <p></p>

            <a href="#" class="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900">
                Crie notas
                <svg class="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
            </a>
            <a href="#" class="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-black dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
                Saiba mais!
            </a> 
        </div>
        <div class="hidden lg:mt-0 lg:col-span-5 lg:flex">
            <img src={MockUp} alt="mockup" />
        </div>                
    </div>
</section>
<section class="bg-white mt-8 mb-8">
<h1 class="mb-4 text-4xl md:text-center font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-black">Features</h1>

    <div class="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
       
        <div class="hidden lg:mt-0 lg:col-span-5 lg:flex">
            <img src={MockUpDois} alt="mockup" />
        </div>   
        <div class="mr-auto place-self-center lg:col-span-7 flex flex-col space-y-2">
        <a href="#" class="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-gray-900 rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-black dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800 gap-2">
        <BiNotepad />
                Crie múltiplas notas
            </a>  
            <a href="#" class="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-gray-900 rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-black dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800 gap-2">
        <BiWindowOpen />
                Adicionar imagens
            </a>  
            <a href="#" class="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-gray-900 rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-black dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800 gap-2">
        <BiPencil />
                Editar mudanças
            </a>  
            <a href="#" class="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-gray-900 rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-black dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800 gap-2">
        <BiCool />
                Leia em qualquer lugar
            </a>  
            <a href="#" class="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-black dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
                Saiba mais!
            </a> 
        </div>
                     
    </div>
    </section>
</>
  )
}
