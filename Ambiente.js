NodeJs
Git e Github

Mod1
5. Introduzindo testes estáticos
npm init -y
npm install --save-dev eslint@8.16.0 --save-exact
npx eslint --init
npx eslint index.js
OU
Instalar a extensão do ESLint no VSCode;
Para “chamar” o Eslint no VSC e organizar seu código automaticamente, utilize o atalho ctrl + shift + P (Windows/Linux) ou cmd + shift + P (MacOs), digite Eslint e escolha a opção "Fix all auto-fixable problems" ou posicione o cursor piscante sobre alguma das linhas sublinhadas vermelhas e utilize o atalho ctrl + . para abrir o menu do Eslint e escolher “Fix all auto-fixable problems” se estiver disponível.

Mod2
2. Asserções
=== 'igual'
!== 'diferente'
throw{} 'é uma exceção'