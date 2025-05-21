from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

app = FastAPI()

# Настройка CORS для доступа с фронтенда
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

class RequestData(BaseModel):
    action: str

@app.post("/api/action")
async def handle_action(data: RequestData):
    if data.action == "start":
        # Логика запуска двигателя или другого процесса
        return {"status": "success", "message": "Действие 'start' выполнено"}
    elif data.action == "stop":
        # Логика остановки двигателя или другого процесса
        return {"status": "success", "message": "Действие 'stop' выполнено"}
    else:
        raise HTTPException(status_code=400, detail="Неизвестное действие")
    
    #uvicorn main:app --reload
