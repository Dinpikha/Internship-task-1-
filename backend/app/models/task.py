from pydantic import BaseModel,Field
from typing import Optional

class TaskCreate(BaseModel):
    title:str = Field (..., min_length=1,max_length=150)
    description: Optional[str]=None 
    status: str ='Pending'
    priority:str='Medium'


class TaskUpdate(BaseModel):
    title: Optional[str] = Field(None, min_length=1, max_length=150)
    description: Optional[str] = None
    status: Optional[str] = None
    priority: Optional[str] = None