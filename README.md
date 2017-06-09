# Esqueleto de projetos de API

Este esqueleto foi montado utilizando Node.js + Express. 
Esta combinação além de ser uma das mais utilizadas, se sobressai por sua escalabilidade.

O projeto está escrito utilizando ES2015 e estruturado com as seguintes metodologias e ferramentas:

* MVC - O roteamento para as APIs (controller) estã no diretório **routes**'
* DDD (Domain Driven Development) - Dentro de **domain**, fica a estrutura do domínio de negócios, acessado/utilizado 
pelos _routes (controllers)_ 
* TDD - Os testes ficam no diretório **tests**. Para toda funcionalidade implementada, deverá haver testes equivalentes;
