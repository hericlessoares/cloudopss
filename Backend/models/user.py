
from typing import Optional
from pydantic import BaseModel




class User(BaseModel):
    id:str
    nome:str
    email:str
    telefone:str
    endereco:str
    profissao:str
    
    
    


   