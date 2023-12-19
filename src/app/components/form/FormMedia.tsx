import { useEffect, useRef, useState } from "react";
import FileInput from "../fileInput/FileInput";
import SelectInput from "../select/Select";
import TextInput from "../textInput/TextInput";
import Button from "../button/button";
import { FFmpeg } from "@ffmpeg/ffmpeg";
import { fetchFile, toBlobURL } from "@ffmpeg/util";
import http from "@/http";
import { useRouter } from "next/navigation";
import axios from "axios";
import { CheckCircleIcon } from "@heroicons/react/24/outline";

export default function FormMedia({ user }: { user: string | undefined }) {
  const [values, setValues] = useState({
    title: "",
    category: "",
  });
  const [files, setFiles] = useState({
    audio: "",
    image: "",
  });

  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    load();
  }, [loading]);

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
  const ffmpegRef = useRef(new FFmpeg());
  const messageRef = useRef<HTMLParagraphElement | null>(null);

  const load = async () => {
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
  };

  const transcode = async (e: {
    target: { files: (string | File | Blob | undefined)[] };
  }) => {
    const ffmpeg = ffmpegRef.current;
    const inputFile = e.target.files[0] as File;
    await ffmpeg.writeFile("audio.mp3", await fetchFile(inputFile));
    await ffmpeg.exec(["-i", "audio.mp3", "output.wav"]);
    const wavData = (await ffmpeg.readFile("output.wav")) as any;
    let fileName = inputFile.name;
    fileName = fileName.replace(/\.mp3$/, ".wav");
    const blobOptions = { type: "audio/wav" };
    const blob = new Blob([wavData.buffer], blobOptions);
    const audioFile = new File([blob], fileName, { type: "audio/wav" });
    return audioFile;
  };

  const uploadPost = async () => {
    const formData = new FormData();
    formData.append("title", values.title);
    formData.append("category", values.category);
    formData.append("audio", files.audio);
    formData.append("image", files.image);
    formData.append("subtitle", "");
    http
      .post("/audios/posts/upload", formData, {
        headers: {
          authorization: `Bearer ${localStorage.getItem("token")}`,
          "Content-Type": "multipart/form-data",
        },
      })
      .then(() => {
        setMessage("Post enviado com sucesso!");
        router.push("/home");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const uploadAudio = async () => {
    const formData = new FormData();
    formData.append("title", values.title);
    const wavData = await transcode({ target: { files: [files.audio] } });
    formData.append("audio", wavData);
    const subtitle = async () => {
      const arquivoDeAudio = wavData; // Aqui você deve colocar seu arquivo de áudio (blob, Buffer, etc.)

      const url =
        "https://brazilsouth.stt.speech.microsoft.com/speech/recognition/conversation/cognitiveservices/v1";

      const headers = {
        "Content-Type": "audio/wav",
        "Ocp-Apim-Subscription-Key": "4e1f3ba069db4eadbd22b72379ac0582",
        Accept: "application/json",
        Host: "brazilsouth.stt.speech.microsoft.com",
        "Transfer-Encoding": "chunked",
        Expect: "100-continue",
      };

      const params = {
        language: "pt-BR",
      };

      const response = await axios.post(url, arquivoDeAudio, {
        params,
        headers,
      });

      const { data } = response;
      const DisplayText = data.DisplayText;

      return DisplayText; // Retorno do texto interpretado
    };
    const subtitleResult = await subtitle();
    formData.append("subtitle", subtitleResult);
    http
      .post("/audios/upload", formData, {
        headers: {
          authorization: `Bearer ${localStorage.getItem("token")}`,
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => {
        setLoading(true);
        setMessage("Audio enviado com sucesso!");
        console.log(res.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <form
      className="flex flex-col gap-4 w-full max-w-sm mx-auto bg-white rounded-xl shadow-md overflow-hidden p-4 mb-2 items-center"
      onSubmit={(e) => {
        e.preventDefault();
        if (user === "ADMIN") uploadPost();
        else uploadAudio();
      }}
    >
      {user === "ADMIN" ? (
        <>
          <TextInput name="title" label="Título" onChange={handleChange} />
          <SelectInput onChange={handleChange} />
          <FileInput name="image" label="Imagem" onChange={handleFileChange} />
          <FileInput name="audio" label="Audio" onChange={handleFileChange} />
          {message && (
            <div className="flex gap-2">
              <CheckCircleIcon className="h-5 w-5 text-green-500" />
              <p className="text-green-500 text-center text-sm">{message}</p>
            </div>
          )}
        </>
      ) : (
        <>
          <TextInput name="title" label="Título" onChange={handleChange} />
          <FileInput name="audio" label="Audio" onChange={handleFileChange} />
          <p className="border-gray-300 dark:bg-white dark:text-black w-full">
            Limite de 60s por áudio
          </p>
          {message && (
            <div className="flex gap-2">
              <CheckCircleIcon className="h-5 w-5 text-green-500" />
              <p className="text-green-500 text-center text-sm">{message}</p>
            </div>
          )}
        </>
      )}

      <Button nome="Enviar" type="submit" />
    </form>
  );
}
