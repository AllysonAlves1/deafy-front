import { useRef, useState } from "react";
import FileInput from "../fileInput/FileInput";
import SelectInput from "../select/Select";
import TextInput from "../textInput/TextInput";
import Button from "../button/button";
import { FFmpeg } from "@ffmpeg/ffmpeg";
import { fetchFile, toBlobURL } from "@ffmpeg/util";
import http from "@/http";

export default function FormMedia({ user }: { user: string }) {
  const [values, setValues] = useState({
    title: "",
    category: "",
  });
  const [files, setFiles] = useState({
    audio: "",
    image: "",
  });

  function handleChange(event: { target: { value: any; name: any } }) {
    const fieldValue = event.target.value;
    const fieldName = event.target.name;
    setValues((values) => ({
      ...values,
      [fieldName]: fieldValue,
    }));
  }

  function handleFileChange(event: { target: { files: any; name: any } }) {
    const fieldValue = event.target.files[0];
    const fieldName = event.target.name;
    setFiles((files) => ({
      ...files,
      [fieldName]: fieldValue,
    }));
  }

  // FFmpeg
  const [loaded, setLoaded] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const ffmpegRef = useRef(new FFmpeg());
  const messageRef = useRef<HTMLParagraphElement | null>(null);

  const load = async () => {
    setIsLoading(true);
    const baseURL = "https://unpkg.com/@ffmpeg/core@0.12.4/dist/umd";
    const ffmpeg = ffmpegRef.current;
    ffmpeg.on("log", ({ message }) => {
      if (messageRef.current) messageRef.current.innerHTML = message;
    });
    await ffmpeg.load({
      coreURL: await toBlobURL(`${baseURL}/ffmpeg-core.js`, "text/javascript"),
      wasmURL: await toBlobURL(
        `${baseURL}/ffmpeg-core.wasm`,
        "application/wasm"
      ),
    });
    setLoaded(true);
    setIsLoading(false);
  };

  const transcode = async (e: {
    target: { files: (string | File | Blob | undefined)[] };
  }) => {
    const ffmpeg = ffmpegRef.current;
    await ffmpeg.writeFile("audio.mp3", await fetchFile(e.target.files[0]));
    await ffmpeg.exec(["-i", "audio.mp3", "output.wav"]);
    const wavData = (await ffmpeg.readFile("output.wav")) as any;
    return wavData;
  };

  const uploadAudio = async (e: any) => {
    const wavData = await transcode(e);
    const title = await e.target.value;
    const formData = new FormData();
    formData.append("title", title);
    formData.append("audio", wavData);
    http
      .post("/upload", formData, {
        headers: {
          authorization: `Bearer ${localStorage.getItem("token")}`,
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => {
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <form
      className="flex flex-col gap-4 w-full max-w-sm mx-auto bg-white rounded-xl shadow-md overflow-hidden p-4 mb-2"
      onSubmit={(e) => {
        e.preventDefault();
        console.log(values, files);
      }}
    >
      {user === "ADMIN" ? (
        <>
          <TextInput name="title" label="Título" onChange={handleChange} />
          <SelectInput onChange={handleChange} />
          <FileInput name="image" label="Imagem" onChange={handleFileChange} />
          <FileInput name="audio" label="Audio" onChange={handleFileChange} />
        </>
      ) : (
        <>
          <TextInput name="title" label="Título" onChange={handleChange} />
          <FileInput name="audio" label="Audio" onChange={handleFileChange} />
        </>
      )}

      <Button nome="Enviar" />
    </form>
  );
}
