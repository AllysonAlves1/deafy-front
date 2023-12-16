import { useEffect, useRef, useState } from "react";
import FileInput from "../fileInput/FileInput";
import SelectInput from "../select/Select";
import TextInput from "../textInput/TextInput";
import Button from "../button/button";
import { FFmpeg } from "@ffmpeg/ffmpeg";
import { fetchFile, toBlobURL } from "@ffmpeg/util";
import http from "@/http";
import { useRouter } from "next/navigation";

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
    http
      .post("audios/posts/upload", formData, {
        headers: {
          authorization: `Bearer ${localStorage.getItem("token")}`,
          "Content-Type": "multipart/form-data",
        },
      })
      .then(() => {
        router.push('/home');
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
    // const subtitle = Fetch com a IA
    // formData.append("subtitle", subtitle);
    http
      .post("/audios/upload", formData, {
        headers: {
          authorization: `Bearer ${localStorage.getItem("token")}`,
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => {
        setLoading(true);
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
        if(user === "ADMIN") uploadPost();
        else uploadAudio();
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

      <Button nome="Enviar" type="submit" />
    </form>
  );
}
