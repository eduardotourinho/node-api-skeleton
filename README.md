# Esqueleto de projetos de API

Este esqueleto foi montado utilizando Node.js + Express para validação/avaliação pela empresa ZRP. 
Esta combinação foi escolhida pelo motivo de ser uma das mais utilizadas para este fim (no ambiente Node.JS) e que se sobressai por sua escalabilidade

O projeto está escrito utilizando ES2015 e estruturado com as seguintes metodologias e ferramentas:

## MVC

O roteamento para as APIs (controller) estã no diretório **routes**, Os roteamentos estão implementados no padrão REST
  
## DDD (Domain Driven Development)
 
Dentro de **domain**, fica a estrutura do domínio de negócios, acessado/utilizado 
pelos _routes (controllers)_ 

## TDD 
Os testes ficam no diretório **tests**. Para toda funcionalidade implementada, deverá haver testes equivalentes.
Para os testes está sendo utilizada o framework **Mocha** 

## Ferramentas/módulos utilizadas

### .editorconfig

Ajuda a manter o padrão e consistência do código-fonte, em IDEs que suportam o EditorConfig
 
### Babel

Como o projeto está escrito em ES2015 e nem todas IDEs suportam tal sintaxe, foi utilizado o Babel para 
realizar o "transpiler" do código-fonte, de modo que não apareçam erros durante a programação.
 
