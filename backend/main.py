from fastapi import FastAPI
import uvicorn
import os
from fastapi import File, UploadFile
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

input_images_dir = "./input_images"
input_prompt_dir = "./input_prompt"
output_images_dir = "./output_images"

app.add_middleware(
    CORSMiddleware,
    # Allows CORS from this origin
    allow_origins=["http://localhost:3000", "http://localhost:3001"],
    allow_credentials=True,
    allow_methods=["*"],  # Allows all HTTP methods
    allow_headers=["*"],
)


@app.post("/upload")
async def upload_file(file: UploadFile = File(...)):
    file_name = file.filename
    file_path = os.path.join(input_images_dir, file_name)

    with open(file_path, "wb") as f:
        contents = await file.read()
        f.write(contents)

    return {"Successfully uploaded : ", file_name}

if __name__ == "__main__":
    uvicorn.run(app, host="localhost", port=8000)
