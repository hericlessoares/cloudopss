
from fastapi import FastAPI
from models.user import User
from routes.user import user
from fastapi.middleware.cors import CORSMiddleware


app = FastAPI()
app.include_router(user)

origins = [
    "*"
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)




