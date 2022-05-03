from fastapi import fastapi
from pydantic import BaseModel
import uvicorn

app= FastAPI()


@app.get("/")
def root():
  return {'mensagem':'desgraça'}
