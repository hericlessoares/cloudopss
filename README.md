# cloudopss-

Dentro do projeto existem duas pastas

-A pasta respectiva da Api é a com o nome de Backend

-A api foi criada atraves da FastApi 
-O comando para instalar a mesma é pip install fastapi
-Possui como dependencia para executar o uvicorn 
-O uvicorn é um ASGI server
-O comando para instalar o mesmo é pip install "uvicorn[standard]"
-O FastApi possui um Swagger para documentação no endpoint /docs
-A Api possui os metodos Post ,Get , Put,Delete
-O banco usado foi um noSQL o mongoDB
-A api possui suporte para cluster ou uso local
-Para iniciar a execução da Api , dentro da pasta Backend execute o comando uvicorn index:app --reload
-A api está configurada para não haver bloqueio de cors


-A pasta ao frontend da aplicação é a com o nome Frontend
-Fui usado Angular como Framework de trabalho
-Para execução do front necessario possuir o node assim como o angular cli
-para instalar o angular cli execute npm install -g @angular/cli
 dentro da pasta frontend
-Foi usado o Material instalado através do comando npm install --save @angular/material @angular/cdk @angular/animations
-Para executar o frontend execute o comando ng serve dentro da pasta frontend

Obs:Necessario que execute a conexão com algum banco Mongodb
